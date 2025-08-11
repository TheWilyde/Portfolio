import {LuMoveRight} from 'react-icons/lu';

const FeaturedProjects = () => {
  const projects = [
    /*{
      title: '',
      description: '',
      image: '',
      technologies: ['', '', ''],
      links: {
        website: '',
        github: '',
      },
    },*/
  ];

  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Featured Projects
        </h2>
        <a
          className="flex items-center gap-2 font-light text-white/70 hover:text-white transition-colors"
          href="/projects">
          <span>view more</span>
          <LuMoveRight />
        </a>
      </div>

      {projects.length === 0 ? (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-sm text-white/80">
            No projects yet as they’re compiling in the multiverse. Check back
            soon!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col">
              <div className="p-6">
                <img
                  alt={project.title}
                  className="h-40 w-full object-cover object-top rounded-lg"
                  src={project.image}
                />
              </div>

              <div className="p-6 pt-0 flex flex-col gap-2">
                <h3 className="font-semibold text-white">{project.title}</h3>
                <p className="text-xs text-white/70">{project.description}</p>
              </div>

              <div className="p-6 pt-0 flex h-full flex-col items-start justify-between gap-4">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/10 px-1 py-0 text-[10px] font-semibold text-white">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-row flex-wrap items-start gap-1">
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-md bg-white/20 px-2 py-1 text-[10px] font-semibold text-white hover:bg-white/30 transition-colors">
                      <svg
                        className="size-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 0V3"
                        />
                      </svg>
                      Website
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-md bg-white/20 px-2 py-1 text-[10px] font-semibold text-white hover:bg-white/30 transition-colors">
                      <svg
                        className="size-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 22v-4a4.8 4.8 0 00-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 004 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2"
                        />
                      </svg>
                      Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedProjects;
