import {LuMoveRight, LuGithub, LuGlobe} from 'react-icons/lu';

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
    <section className="flex flex-col gap-6">
      <div className="flex justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Featured Projects
        </h2>
        <a
          className="flex items-center gap-2 font-light text-white/70 hover:text-white transition-colors whitespace-nowrap"
          href="/projects">
          <span className="hidden sm:inline">view more</span>
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
                      <LuGlobe />
                      Website
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-md bg-white/20 px-2 py-1 text-[10px] font-semibold text-white hover:bg-white/30 transition-colors">
                      <LuGithub />
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
