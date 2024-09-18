import "./style.scss";
import { Kontakt } from "../Kontakt";

export const MainPage = () => {
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>ESFIB</h1>
      </header>
      <main>
        <p>toto je stránka esfib</p>
        <Kontakt />
      </main>
      <footer>
        <p>&copy; Julie Desová</p>
      </footer>
    </div>
  );
};
