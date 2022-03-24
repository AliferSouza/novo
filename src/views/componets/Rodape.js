const styleFooter = `
text-align: center;
font-size: 1rem;
`
export default function Rodape(data, cardapioColor) {

  let rodape = ``;
  data.forEach((element) => {
    rodape += `
    <h5 style="${styleFooter} color: ${element.color}; ">
    ${element.Nome}
    </h5>
   `;
  });
  return rodape;
}
