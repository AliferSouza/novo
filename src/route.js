import Home from "./views/pages/home.js";
import Caradapio from "./views/pages/Cardapios.js";
import Context from "./context/context.js";
const root = document.querySelector(".root");

export default function Router(data, dados, cardapioColor, compararUrlEApi, url1, url2) {
 
   if (url2 === undefined) {  
    root.innerHTML = '';
    root.innerHTML = Home(dados, url1);
   }
  else {
    root.innerHTML = '';
    root.innerHTML = Caradapio(data, cardapioColor, compararUrlEApi);
    Context()
  }
}