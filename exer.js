var cadastro =[
    {
        nome: "Crystiane",
        idade: 36,
        cidade: "Brasília",
        status: "Solteira",

    },
    {
        nome: "Carlos",
        idade: 25,
        cidade: "Belo Horizonte",
        status: "solteiro",
    },
    {
        nome:"João",
        idade:24,
        cidade:"Brasília",
        status:"casado",
    },
    {
        nome:"Ana Julia",
        idade: 36,
        cidade: "Curitiba",
        status:"Casada",
},   
];
for (let value of Object.values(cadastro)) {
document.write(value.nome); 