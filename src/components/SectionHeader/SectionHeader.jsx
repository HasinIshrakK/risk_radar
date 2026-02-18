const SectionHeader = ({ subtitle, title, peraTitle }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold tracking-wide uppercase">
          {subtitle}
        </span>
        <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          {title}
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          {peraTitle}
        </p>
      </div>
    </div>
  );
};
export default SectionHeader;
