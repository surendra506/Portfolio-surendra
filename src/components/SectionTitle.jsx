function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
      <p className="theme-kicker text-sm uppercase tracking-[0.4em]">{eyebrow}</p>
      <h2 className="theme-heading mt-4 font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="theme-body mt-5 text-base leading-8">{description}</p>
    </div>
  );
}

export default SectionTitle;
