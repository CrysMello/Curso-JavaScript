const nascimento = {
    dia: 26,
    mes: 03,
    ano: 2020,
    exibir:function(){
        return (`${this.dia}/${this.mes}/${this.ano}`);
    },
}
console.log(nascimento.exibir());