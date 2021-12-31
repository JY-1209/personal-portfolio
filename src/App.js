import "./App.css";
import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Hobbies from "./components/hobbies";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Hobbies />
    </main>
  );
}

export default App;
