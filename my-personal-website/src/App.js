import "./App.css";
import Navbar from "./componets/navbar/Navbar";
import Intro from "./componets/intro/Intro";
import MyProjects from "./componets/myProjects/MyProjectss";
import AboutMe from "./componets/AboutMe/AboutMe";
import ContactMe from "./componets/ContactMe/ContactMe";
import Myskills from "./componets/mySkills/Myskills";
import Footer from "./componets/Footer/Footer";
import MobileMenu from "./componets/Menu/MobileMenu";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { _menuIsOpen } from "./services/atom";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useRecoilState(_menuIsOpen);

  return (
    <div className="App">
      {menuIsOpen && <MobileMenu />}

      <div className={menuIsOpen ? "hidden-background" : ""}>
        <Navbar />
        <Intro />
        <MyProjects />
        <AboutMe />
        <Myskills />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
