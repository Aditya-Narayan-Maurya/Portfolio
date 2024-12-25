import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Experience/>
    <Contact/>
    <Skills/>
      <div className="flex">
      <div className="caret-violet-700 border-l-fuchsia-400 font-serif">I am app</div>
      <div className="font-bold">good boy</div>
      </div>
    </>
  )
}

export default App;
