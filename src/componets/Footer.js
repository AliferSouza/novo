const styleFooter = `
text-align: center;
font-size: 1rem;
`


export default function Footer(data, cardapioColor) {

  let footer = ``;
  data.forEach((element) => {
    footer += `
    <h5 style="${styleFooter} color: ${element.color}; ">
    ${element.Nome}
    </h5>
   `;
  });
  return footer;
}
