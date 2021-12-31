import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10 mb-12">
      <div className="w-4/5 max-w-full mx-auto container flex pt-5 pb-5 flex-col md:flex-row items-center">
        <a
          href="#about"
          className="ml-3 text-xl title-font font-medium text-white mb-4 md:mb-0"
        >
          Justin Yang
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
