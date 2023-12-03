import "./App.css";
import Navbar from "./componets/navbar/Navbar";
import Intro from "./componets/intro/Intro";
import MyProjects from "./componets/myProjects/MyProjectss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <MyProjects />
    </div>
  );
}

export default App;
