function calcularFrete(bairro, valorPedido) {
  let frete;

  // Regra de frete por bairro
  if (bairro === "Centro") {
    frete = 5;
  } else if (bairro === "Brotas") {
    frete = 8;
  } else if (bairro === "Itapuã") {
    frete = 12;
  } else {
    frete = 15;
  }

  // Frete grátis
  if (valorPedido >= 80) {
    frete = 0;
  }

  const total = valorPedido + frete;

  return {
    frete: frete,
    total: total
  };
}

// Exemplo de uso
const resultado = calcularFrete("Brotas", 50);
console.log(`Frete: R$ ${resultado.frete}`);
console.log(`Total: R$ ${resultado.total}`);