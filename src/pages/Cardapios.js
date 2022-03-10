import Button from "../componets/Button.js";
import Produtos from "../componets/produtos.js";
import Header from "../componets/Header.js";
import Footer from "../componets/footer.js";


export default function Caradapio(data, cardapioColor, compararUrlEApi) {
  


    let dadoslanche = data.filter((item) => {
        return (item.Categoria === "Lanche" && (item.Quantidade > 0))
    })
    let dadosBebida = data.filter((item) => {
        return (item.Categoria === "Bebida" && (item.Quantidade > 0))
    })
    let dadosOutros = data.filter((item) => {
        return (item.Categoria === "Outros" && (item.Quantidade > 0))
    })

    let cardapio = "";

    cardapio += `  


             ${Header(compararUrlEApi, cardapioColor)}
           
     
            
             <h4>Comida:</h4>
             <div class="foods">
             ${Produtos(dadoslanche, cardapioColor)}
             </div>
             <br />
             
             <h4>Bebida:</h4>
             <div class="foods">
             ${Produtos(dadosBebida, cardapioColor)}
             </div>
             <br />

             <h4>Outros:</h4>
             <div class="foods">
             ${Produtos(dadosOutros, cardapioColor)}
             </div>
             <br />


             ${Button(cardapioColor)}
           
          

             ${Footer(compararUrlEApi, cardapioColor)}

          
      
  `;

    return cardapio;
}