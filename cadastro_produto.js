// Aprendendo sobre objeto

let produto= {
    nome: "Celular",
    preco: 2300,
    desconto: 0.15,
    precoComDesconto: function() {
        return this.preco* (1 - desconto);
    }
}