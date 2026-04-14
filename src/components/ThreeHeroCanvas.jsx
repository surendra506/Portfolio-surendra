import { useEffect, useRef } from "react";
import * as THREE from "three";

function ThreeHeroCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 7.8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xa855f7, 1.2);
    scene.add(ambient);

    const pointA = new THREE.PointLight(0x38bdf8, 18, 30);
    pointA.position.set(4, 4, 5);
    scene.add(pointA);

    const pointB = new THREE.PointLight(0x8b5cf6, 16, 30);
    pointB.position.set(-4, -2, 3);
    scene.add(pointB);

    const shaderMaterial = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uPointer: { value: new THREE.Vector2(0, 0) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uPointer;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv - 0.5;
          float radius = length(uv);
          float wave = sin((uv.x + uPointer.x * 0.18) * 12.0 + uTime * 0.85) * 0.08;
          float waveTwo = cos((uv.y + uPointer.y * 0.14) * 16.0 - uTime * 0.7) * 0.07;
          float aura = smoothstep(0.72, 0.08, radius + wave + waveTwo);
          vec3 cyan = vec3(0.10, 0.78, 1.0);
          vec3 violet = vec3(0.62, 0.25, 1.0);
          vec3 color = mix(violet, cyan, vUv.y + sin(uTime * 0.25) * 0.12);
          gl_FragColor = vec4(color, aura * 0.28);
        }
      `
    });
    const shaderPlane = new THREE.Mesh(new THREE.PlaneGeometry(10, 10, 1, 1), shaderMaterial);
    shaderPlane.position.z = -3.2;
    scene.add(shaderPlane);

    const coreGeometry = new THREE.TorusKnotGeometry(1.45, 0.38, 220, 28);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x8b5cf6,
      emissive: 0x2563eb,
      emissiveIntensity: 0.55,
      roughness: 0.18,
      metalness: 0.72,
      transmission: 0.08,
      transparent: true,
      opacity: 0.92
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(core);

    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.8, 1),
      new THREE.MeshBasicMaterial({
        color: 0x22d3ee,
        wireframe: true,
        transparent: true,
        opacity: 0.22
      })
    );
    scene.add(wire);

    const particlesCount = 1000;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 11;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x7dd3fc,
      transparent: true,
      opacity: 0.85,
      size: 0.022,
      sizeAttenuation: true
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const pointer = { x: 0, y: 0 };

    const handlePointerMove = (event) => {
      const bounds = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
    };

    const clock = new THREE.Clock();
    let animationFrame;

    const render = () => {
      const elapsed = clock.getElapsedTime();
      shaderMaterial.uniforms.uTime.value = elapsed;
      shaderMaterial.uniforms.uPointer.value.set(pointer.x, pointer.y);
      core.rotation.x = elapsed * 0.25 + pointer.y * 0.25;
      core.rotation.y = elapsed * 0.42 + pointer.x * 0.35;
      core.position.y = Math.sin(elapsed * 1.1) * 0.14;
      wire.rotation.x = elapsed * 0.12;
      wire.rotation.y = elapsed * 0.18;
      particles.rotation.y = elapsed * 0.05;
      particles.rotation.x = pointer.y * 0.08;
      camera.position.x += (pointer.x * 0.55 - camera.position.x) * 0.04;
      camera.position.y += (pointer.y * 0.4 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(render);
    };

    const handleResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    mount.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("resize", handleResize);
    render();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      mount.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      coreGeometry.dispose();
      coreMaterial.dispose();
      shaderPlane.geometry.dispose();
      shaderMaterial.dispose();
      wire.geometry.dispose();
      wire.material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}

export default ThreeHeroCanvas;
