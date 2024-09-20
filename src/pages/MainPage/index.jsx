import "./style.scss";
import Logo from "./images/logo-menu-bile.png"
import { Kontakt } from "../Kontakt";
import { ONas } from "../ONas";
import { Reference } from "./../Reference";
import { Sluzby } from "./../Sluzby";

export const MainPage = () => {
  return (
    <div className="container">
      <div className="menu">
        <img src={Logo} alt="bílé logo Esfib" className="logo"/>
        <nav className="navbar">
          <ul>
            <li><a href="#o_nas">O NÁS</a></li>
            <li><a href="#reference">REFERENCE</a></li>
            <li><a href="#Kontakt">KONTAKT</a></li>
          </ul>
        </nav>
      </div>
      <div className="main">
        <ONas id="o_nas" />
        <Reference id="reference" />
        <Kontakt id="kontakt" />
      </div>
      <footer>
        <p>&copy; Julie Desová 2024</p>
      </footer>
    </div>
  );
};
