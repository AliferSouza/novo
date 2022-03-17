import Button from "../componets/Button.js";
import Produtos from "../componets/produtos.js";
import Header from "../componets/Header.js";
import FooterRodape from "../componets/FooterRodape.js";


export default function Caradapio(data, cardapioColor, compararUrlEApi) {
  

   console.log(Button)
     console.log(FooterRodape)
  
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


             <div>
               ${Button(cardapioColor)}
             </div>
             
              <div>
               ${FooterRodape(compararUrlEApi, cardapioColor)}
              </div>

           
           
          

            

          
      
  `;

    return cardapio;
}
