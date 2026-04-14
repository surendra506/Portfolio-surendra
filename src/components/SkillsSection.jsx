import { useRef } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import { useSectionReveal } from "../hooks/useSectionReveal.js";

function SkillsSection({ data }) {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef);

  return (
    <section id="skills" ref={sectionRef} className="section-shell py-24 sm:py-28">
      <SectionTitle
        eyebrow="Skills"
        title="A stack shaped for modern product work"
        description="Frontend craft, backend logic, data handling, and the workflow tools that keep delivery smooth."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {data.map((group, index) => {
          const GroupIcon = group.icon;

          return (
            <motion.article
              key={group.category}
              data-reveal
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="glass-card group rounded-[30px] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-8"
            >
              <div className="mb-7 flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 320, damping: 15 }}
                  className="theme-soft-panel flex h-12 w-12 items-center justify-center rounded-2xl text-cyan-200 shadow-[0_0_20px_rgba(96,165,250,0.18)] group-hover:shadow-[0_0_34px_rgba(34,211,238,0.34)] light-mode:group-hover:shadow-[0_18px_38px_rgba(15,23,42,0.1)]"
                >
                  <GroupIcon size={20} />
                </motion.div>
                <div>
                  <p className="theme-muted text-sm uppercase tracking-[0.25em]">Area 0{index + 1}</p>
                  <h3 className="theme-heading text-xl font-semibold">{group.category}</h3>
                </div>
              </div>

              <div className="space-y-5">
                {group.items.map((skill) => {
                  const SkillIcon = skill.icon;

                  return (
                    <div key={skill.name}>
                      <div className="mb-3 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ y: -3, rotate: -8, scale: 1.08 }}
                            transition={{ type: "spring", stiffness: 300, damping: 14 }}
                            className="theme-soft-panel flex h-10 w-10 items-center justify-center rounded-xl theme-muted"
                          >
                            <SkillIcon size={18} />
                          </motion.div>
                          <span className="theme-body text-sm font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-cyan-200">{skill.level}%</span>
                      </div>

                      <div className="theme-soft-panel h-2.5 overflow-hidden rounded-full">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 shadow-[0_0_22px_rgba(96,165,250,0.45)]"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsSection;
