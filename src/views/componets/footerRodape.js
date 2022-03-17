const styleFooter = `
text-align: center;
font-size: 1rem;
`


export default function footerRodape(data, cardapioColor) {

  let footerRodape = ``;
  data.forEach((element) => {
    footerRodape += `
    <h5 style="${styleFooter} color: ${element.color}; ">
    ${element.Nome}
    </h5>
   `;
  });
  return footerRodape;
}
