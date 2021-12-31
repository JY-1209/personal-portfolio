// This is a named export and it's used when I'm importing a specific thing by it's export name.
// The alternative is the default export which is used when we're importing the entire code
import { projects } from "../data";
import { CodeIcon } from "@heroicons/react/solid";

export default function Projects() {
  return (
    <article id="projects" className="mt-52">
      <CodeIcon className="mx-auto w-10 mb-4" />
      <h1 className="text-5xl font-medium text-white mx-auto text-center">
        My Projects
      </h1>
      <p className="font-mono text-center text-xl mt-12">
        Here are some projects that I made in my classes and in my personal
        time.
      </p>
      <article className="flex flex-wrap mt-20 w-4/5 mx-auto">
        {projects.map((project) => (
          <article className="w-1/2">
            <a href={project.link} className="font-sans w-1/2 block mx-auto mb-16">
              <article
                className="flex relative w-full h-96 justify-center
                mx-auto"
              >
                {/* the absolute class is necessary to have the section title
              text overlap on top of the iamges*/}
                <img
                  src={project.image}
                  alt={project.alt}
                  key={project.image}
                  className="absolute inset-0 w-full h-full mx-auto object-cover
                  inset-0 object-center rounded z-0"
                />
                {/* the z level is important so that the header will always be at
              the top instead of the projects */}
                <section
                  className="px-8 py-10 relative z-0 border-4 w-full rounded
                  border-gray-800 bg-gray-900 opacity-0 hover:opacity-100"
                >
                  <h2 className="font-mono text-white">{project.title}</h2>
                  <p className="leading-relaxed">{project.description}</p>
                </section>
              </article>
            </a>
          </article>
        ))}
      </article>
    </article>
  );
}
