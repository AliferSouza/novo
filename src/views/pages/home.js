import Lojas from "../componets/Lojas.js";

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


export default function Home(dados, url1) {
  return (`     
  <div style="${stylesHeaderContainer}">
  <div style="${stylesHeader}">
  <h1>Cardápios</h1>
  <h2>Marketplace de cardapios, entre em contato e tenha o seu.</h2>  
  </div> 
  </div> 
  ${Lojas(dados, url1)}
  
 

  `);
}