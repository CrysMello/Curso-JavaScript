class Data {
    dia = 22
    mes = 06
    ano = 2020

// utilize a data padrão Unix como referência
//O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
    
    constructor(dia = 1, mes = 1, ano = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
    }
    //metodo para formatar data
    exibir() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

const d1 = new Data();
// alterando as informações da class

d1.dia = 03
d1.mes = 09
d1.ano = 2010

console.log(d1);
console.log(d1.exibir());

const d2 = new Data(20, 06, 1984);


console.log(d2);
console.log(d2.exibir());