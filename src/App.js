import "./App.css";
import Body from "./components/body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Education from "./components/pages/Education";
import Projects from "./components/pages/Projects";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="home">
        <SideBar />
        <Body />
      </div>
      <About />
      <Projects />
      <div id="eduNav">
        <Education />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
