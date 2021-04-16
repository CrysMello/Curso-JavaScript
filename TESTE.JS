var cadastro, text,flen, i;
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
fLen =cadastro.length;
text = "<ul>";
for (i= 0; i < fLen; i++) {
    text += "<li>" + cadastro[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo").innerHTML = text