import {projects} from '../data/projects.js';
import {LuGithub, LuGlobe} from 'react-icons/lu';

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
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-white/10 bg-white/5 shadow flex flex-col">
              <div className="p-6">
                <a
                  href={project.links.website || project.links.github || '#'}
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    alt={project.title}
                    className="h-40 w-full object-cover object-top rounded-lg"
                    src={project.image}
                  />
                </a>
              </div>

              <div className="px-6 py-3 pt-0 flex flex-col gap-2">
                <h3 className="font-semibold leading-none tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="text-xs text-white/70">{project.description}</p>
              </div>

              <div className="p-6 pt-0 flex h-full flex-col items-start justify-between gap-4">
                <div className="mt-2 flex flex-wrap gap-1">
                  {project.technologies.map((t) => (
                    <div
                      key={t}
                      className="inline-flex items-center rounded-md bg-white/10 px-1 py-0 text-[10px] font-semibold text-white">
                      {t}
                    </div>
                  ))}
                </div>

                <div className="flex flex-row flex-wrap items-start gap-1">
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-md bg-[#a2f778] px-2 py-1 text-[10px] font-semibold text-black hover:bg-white/30 transition-colors">
                      <LuGlobe />
                      Website
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-md bg-[#a2f778] px-2 py-1 text-[10px] font-semibold text-black hover:bg-white/30 transition-colors">
                      <LuGithub />
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
