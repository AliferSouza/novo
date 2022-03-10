const stylesButton = `  
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
`;
const buttonPedir =`  margin-top: -1.5rem;`
const buttonTotal =` margin-top: -1.3rem;`
 

export default function Button(cardapioColor) {
  const button = `  
    <div id="button" style="${stylesButton} background: ${cardapioColor}">
    <h2 style="${buttonPedir}">Pedir</h2>
    <span id="button-total" style="${buttonTotal}">00.00</span>
    </div>  
    `;
  return button;
}












