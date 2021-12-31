// This is a named export and it's used when I'm importing a specific thing by it's export name.
// The alternative is the default export which is used when we're importing the entire code
import { projects } from "../data";

export default function Projects() {
  return (
    <article id="projects" className="mt-52">
      <h1 className="text-5xl font-medium text-white mx-auto text-center">
        My Projects
      </h1>
      <p className="font-mono text-center text-xl mt-12">
        Here are some projects that I made in my classes and in my personal
        time.
      </p>
      <article id="projects" className="flex flex-wrap mt-20">
        {projects.map((project) => (
          <a href={project.link} className="w-1/2 p-4 font-sans">
            <article
              className="flex relative w-1/2 h-96 justify-center
              mx-auto"
            >
              {/* the absolute class is necessary to have the section title
              text overlap on top of the iamges*/}
              <img
                src={project.image}
                alt={project.alt}
                key={project.image}
                className="absolute inset-0 w-full h-full mx-auto object-cover
                inset-0 object-center rounded"
              />
              <section
                className="px-8 py-10 relative z-10 border-4 w-full
                  border-gray-800 bg-gray-900 opacity-0 hover:opacity-100"
              >
                <h2 className="font-mono text-white">{project.title}</h2>
                <p className="leading-relaxed">{project.description}</p>
              </section>
            </article>
          </a>
        ))}
      </article>
    </article>
  );
}
