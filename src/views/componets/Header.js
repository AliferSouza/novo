const stylesHeaderContainer = `  
background: #f9f9f9;
display: flex;
justify-content: center;
padding-top: 1rem;
`;
const stylesHeader = `  
max-width: 95%;
background: #fa7921;
color: white;
padding: 15px;
border-radius: 10px;
box-shadow: 0 0 10px 0 #f9f9f9;
`;

export default function Header(compararUrlEApi, cardapioColor) {
  let header = ``;
  compararUrlEApi.forEach((element) => {
    header += `
    <div style="${stylesHeaderContainer}">
    <div style="${stylesHeader} background : ${cardapioColor}">
    <h1>${element.Nome}</h1>
    <h2>Monte seu Cardapio agora mesmo.</h2>  
    </div> 
    </div>
   `;
  });
  return header;
}
