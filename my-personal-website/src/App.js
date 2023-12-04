import "./App.css";
import Navbar from "./componets/navbar/Navbar";
import Intro from "./componets/intro/Intro";
import MyProjects from "./componets/myProjects/MyProjectss";
import AboutMe from "./componets/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <MyProjects />
      <AboutMe />
    </div>
  );
}

export default App;
