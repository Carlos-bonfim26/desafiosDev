const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 80 },
  { nome: "Monitor", preco: 600 }
];

const desconto = produtos.map(produto => {
    const Precooriginal = produto.preco
    let novoPreco = Precooriginal - (Precooriginal / 10);

    return novoPreco;
})

desconto.forEach(element => {
    console.log(element);
});