import "./App.css";
import Navbar from "./componets/navbar/Navbar";
import Intro from "./componets/intro/Intro";
import MyProjects from "./componets/myProjects/MyProjectss";
import AboutMe from "./componets/AboutMe/AboutMe";
import ContactMe from "./componets/ContactMe/ContactMe";
import Myskills from "./componets/mySkills/Myskills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <MyProjects />
      <AboutMe />
      <Myskills />
      <ContactMe />
    </div>
  );
}

export default App;
