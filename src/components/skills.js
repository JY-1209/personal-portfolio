import { skills } from "../data";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";

export default function Skills() {
  return (
    <article id="skills" className="mt-52 mx-auto text-center">
      <ChipIcon className="w-10 inline-block mb-4" />
      <h1 className="text-5xl font-medium text-white mx-auto text-center">
        Skills & Technologies
      </h1>
      <p className="font-mono text-center text-xl mt-12">
        Here are some of my skills
      </p>
      <section className="flex flex-wrap w-4/5 mx-auto">
        {skills.map((skill) => (
          <article key={skill} className="p-2 w-1/2">
            <article className="bg-gray-800 rounded flex p-4 h-full items-center">
              <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">{skill}</span>
            </article>
          </article>
        ))}
      </section>
    </article>
  );
}
