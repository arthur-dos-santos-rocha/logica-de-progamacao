function simuladorCaixa(saldo, valorCompra, temLimite, limite) {
    if (saldo >= valorCompra) {
        return `Aprovado. Saldo final: {saldo - valorCompra}`;
    } 
    else if (temLimite && (saldo + limite) >= valorCompra) {
        let saldoFinal = saldo - valorCompra;
        return `Aprovado usando limite. Saldo final: {saldoFinal}`;
    } 
    else {
        return "Negado";
    }
}
console.log(350);
