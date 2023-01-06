import "./ananas.scss";
import Ananas2 from "../../../assets/img/logo-ananas.png"

export class Ananas{
   render(idAnanas) {
      const imgAnanas = document.createElement("img");
      imgAnanas.id = idAnanas;
      imgAnanas.classList.add("ananas");
      imgAnanas.src = Ananas2;
      imgAnanas.alt = "Ananas";
      document.body.appendChild(imgAnanas);
   }
}