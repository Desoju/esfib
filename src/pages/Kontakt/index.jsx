import "./style.scss";
import email from "./images/envelope.svg"
import phone from "./images/phone.svg"

export const Kontakt = () => {
  return (
    <div className="kontakt">
      <h3>Kontaktní údaje</h3>
      <p>ESFIB, Ing. Zdeněk Des</p>
      <img src={email} alt="emial" className="image" />
      <p>zdenek.des@esfib.cz</p>
      <img src={phone} alt="phone" className="image" />
      <p>+420 777 62 12 55</p>
      <p>Datová schránka : mdk2rk</p>
      <p>IČO : 7548799</p>
      <p>Sídlo:</p>
      <p>Okrouhlická 606</p>
      <p>Říčany 664 82</p>
    </div>
  );
};