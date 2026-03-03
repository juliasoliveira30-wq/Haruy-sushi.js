let categorias = [
    { id: 1, nome: "Temaki" },
    { id: 2, nome: "Combinado" },
    { id: 3, nome: "Bebidas" },
    { id: 4, nome: "Sobremesas" },
];

let produtos = [
    { categoriaid: 1, nome: "Temaki Completo", preco: 35.50, descricao: "Temaki com salmão, atum, cream cheese e cebolinha.", imagem: "https://www.seara.com.br/wp-content/uploads/2025/09/R0625-SP-temaki-tradicional-1200x675-1.webp" },
    { categoriaid: 2, nome: "Combinado 20 Peças", preco: 85.00, descricao: "Combinado com 20 peças sortidas.", imagem: "https://kingtemaki.com.br/lojas/wp-content/uploads/2022/12/CLUB_kingtemaki_800x800_2022_LOGO.jpg" },
    { categoriaid: 3, nome: "Refrigerante", preco: 7.50, descricao: "Refrigerante Coca-Cola.", imagem: "https://andinacocacola.vtexassets.com/arquivos/ids/158051/Pack-6-Coca-Cola-Original-350ml.jpg?v=638507764518030000" },
    { categoriaid: 4, nome: "Pudim", preco: 10.00, descricao: "Pudim de leite condensado.", imagem: "https://s2-receitas.glbimg.com/115DQucrWsNOUxf_ncmMUisprZI=/0x0:1080x819/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/w/a/cB6VP5QoOByFKEuCleIQ/jonreceitas-109758346-416338779271002-5424220606850697813-n.jpg" },
];

module.exports = { categorias, produtos };