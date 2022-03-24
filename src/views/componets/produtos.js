const stylesImg = `
width: 125%;
border-radius: 4px 4px 0 0;   
`
const stylesButtons = `
display: flex;
justify-content: center;
align-items: center;
border-radius: 1rem;
`
const stylesCard = `  
box-shadow: 0 0px 5px 5px rgba(217, 217, 217, 0.64); 
border-radius: 8px;   
margin: 0rem 0rem 1rem 0rem;
padding: 0rem 3rem 1rem 0rem;
`

const stylesCardContextContainer = `  
padding-left: 2.8rem;
`




function cardFoods(dados, cardapioColor) {
    let cardFoods = ``;
    dados.forEach((dado) => {
        cardFoods += `   
        <div style="${stylesCard}">
        <h6 class="id">${dado.Id} </h6>
            <div class = "food-img">
                <img style="${stylesImg}" class = "img" src = "${dado.Imagem}" alt = "food image">
                <span>
                    <i class = "far fa-heart"></i>
                </span>
                
                <h3 class = "food-rate" style="background : ${cardapioColor}">Preco: ${dado.Preco}</h3>
            </div>
        
            <div  style="${stylesCardContextContainer}">
                <h2 class="Titulo">${dado.Titulo}</h2>
                <p class="Descrição">${dado.Descricao}</p>
                <div class = "food-info">
                    
                <p style="color : ${cardapioColor}"> 🔥  ${dado.Infocaloria}</p>
                    
                    <span style="background : ${cardapioColor}">${dado.Categoria}</span>
                  </div>
        
                <div class = "food-price-calc">
                    <h2 class = "food-total" style="color : ${cardapioColor}" ${dado.Categoria}>$0.00</h2>
                    <div class = "food-quantity">
                        <div style="${stylesButtons}" class = "order-dec center">
                        <h3>-</h3>
                     </div>
                        <div class = "order-val" style="${stylesButtons}">0</div>
                        <div style="${stylesButtons}" class = "order-inc center">
                          
                           <h3>+</h3>
                        </div>
                    </div>
                </div>
            </div>  
            </div> 
`;
    });

    return cardFoods;
}
export default cardFoods;
