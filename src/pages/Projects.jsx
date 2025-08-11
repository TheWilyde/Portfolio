const projects = [
  /*  {
    title: '',
    description: '',
    image: '',
    technologies: ['', '', '',],
    links: {
      website: '', github: '',
    },
  },*/
];

const Projects = () => {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-white">My Projects</h1>

      {projects.length === 0 ? (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-sm text-white/80">
            No projects yet as they’re compiling in the multiverse. Check back
            soon!
          </p>
        </div>
      ) : (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-white/10 bg-white/5 shadow flex flex-col">
              <div className="p-6">
                <a
                  href={p.links.website || p.links.github || '#'}
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    alt={p.title}
                    className="h-40 w-full object-cover object-top rounded-lg"
                    src={p.image}
                  />
                </a>
              </div>

              <div className="p-6 pt-0 flex flex-col gap-2">
                <h3 className="font-semibold leading-none tracking-tight text-white">
                  {p.title}
                </h3>
                <p className="text-xs text-white/70">{p.description}</p>
              </div>

              <div className="p-6 pt-0 flex h-full flex-col items-start justify-between gap-4">
                <div className="mt-2 flex flex-wrap gap-1">
                  {p.technologies.map((t) => (
                    <div
                      key={t}
                      className="inline-flex items-center rounded-md bg-white/10 px-1 py-0 text-[10px] font-semibold text-white">
                      {t}
                    </div>
                  ))}
                </div>

                <div className="flex flex-row flex-wrap items-start gap-1">
                  {p.links.website && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={p.links.website}
                      className="items-center rounded-md bg-[#a2f778]/70 hover:bg-[#a2f778] transition-colors flex gap-2 px-2 py-1 text-[10px] font-semibold text-black">
                      Website
                    </a>
                  )}
                  {p.links.github && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={p.links.github}
                      className="items-center rounded-md bg-[#a2f778]/70 hover:bg-[#a2f778] transition-colors flex gap-2 px-2 py-1 text-[10px] font-semibold text-black">
                      Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </article>
  );
};

export default Projects;
