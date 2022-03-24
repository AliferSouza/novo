const stylesButton = document.querySelector("#stylesDynamic")  
stylesButton.innerHTML = `
.buttonPrincipal{
  display: flex;
  justify-content: center;
  position: fixed; 
  right: 0.5rem;
  top: 14rem;
  background: #fa7921;
  padding: 35px 15px 0px 10px;
  border-radius: 50px 10px 10px 50px;
  color: white;
  font-size: 10px;
  cursor: pointer;
  gap: 0.5rem;
}

.buttonPedir{
  margin-top: -1.5rem;
}

.buttonTotal{
  margin-top: -1.3rem;
}

`

export default function Button(cardapioColor) {
  setTimeout(() => {
    const buttonPrincipal = document.querySelector(".buttonPrincipal");
    console.log(buttonPrincipal)
  
  }, );
 
  return `  
    <div class="buttonPrincipal" style="background: ${cardapioColor}">
    <h2 class="buttonPedir">Pedir</h2>
    <span id="button-total" class="buttonTotal">00.00</span>
    </div>  
    `;
  
}












