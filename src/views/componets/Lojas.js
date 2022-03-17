const stylesContiner = `
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
`
const stylesImg = `    
margin-top: 4rem;
border: 1px solid #fa7921;
padding: 2px;
width: 80px;
height: 80px;
border-radius: 50%;
object-fit: cover;
`

const stylesSpan = ` 
font-family: sans-serif;
font-size: 10px;
font-weight: 500; 

`


export default function Home(dados, url1) {
  let home = "";
  dados.forEach((item) => {
    home += `  
    <div style="${stylesContiner}">
     <a href="${`${url1 + "?" + item.Id}`}"  target="" style="text-decoration:none">
      <img style=" ${stylesImg}  border : ${`1px solid ${item.color}`} " class="logo"src="${item.Logo}">   
      <br>
      <span style=" ${stylesSpan} color : ${item.color} ">${item.Nome}</span>
      </a>
      `;
  });

  return home;
}