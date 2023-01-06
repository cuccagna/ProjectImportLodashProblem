import '../sass/_base.scss';

import _ from 'lodash';

import { MainHeader } from "../components/main-header/main-header";
import { Logo } from "../components/logo/logo"
import { addImage } from "./add-image";
import Ananas from "../../assets/img/logo-ananas.png"
import { Ananas as AnanasClass } from "../components/ananas/ananas.js"; 



const logoFruit = new Logo("logo-ananas","ananas");

const mainHeaderFruit = new MainHeader(logoFruit);
mainHeaderFruit.render(_.upperFirst("ananas page"));

addImage(Ananas, "logo-ananas", "Ananas");

const el = new AnanasClass("ananas");
el.render(); //aggiunge l'immagine al body


