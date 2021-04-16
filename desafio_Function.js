// Função Construtora (Classe) -> Objeto

function Data (dia = 1, mes = 12, ano = 2020){
    this.dia = dia;
    this.mes = mes;
    this.ano = mes;

    this.exibir = function(){
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

const d1 = new Data(24, 12, 2020);
console.log(d1.exibir());

console.log(d1);