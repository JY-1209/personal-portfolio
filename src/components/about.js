export default function About() {
  return (
    <article id="about" className="flex">
      <article className="mr-16 ml-16">
        <h1 className="text-3xl font-sans font-medium mb-5 text-white mt-10">
          Hi, I'm Justin
          <br className="inline-block"></br>I love to build apps
        </h1>
        <p className="text-xl font-mono mb-16">
          I'm passionate about creating CS products and in the intersection of
          social good and computer science.
        </p>
        <a
          href="#contact"
          className="rounded bg-blue-500 hover:bg-blue-400 px-3 py-4 text-white"
        >
          Contact Me!
        </a>
        <a
          href="#projects"
          className="rounded bg-green-500 hover:bg-green-400 px-3 py-4 ml-10
          text-white"
        >
          View Projects!
        </a>
      </article>
      {/* The src relative path starts from the location of index.html not about.js */}
      <img
        src="images/me.jpg"
        alt="A photo of myself"
        className="w-1/4 rounded"
      />
    </article>
  );
}
