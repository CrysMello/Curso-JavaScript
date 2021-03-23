const nota = 4.9;
// Comparando conceitos de notas 
if(nota <= 10.0 && nota >= 9.0)
{
    console.log("Conceito: A")
    console.log("Parabéns!!! Continue assim :D");
}

if(nota >= 7.0 && nota <= 8.9){
    console.log("Conceito: B");
}
if(nota >=5.0 && nota <= 6.9){
    console.log("Conceito: C");
}
if(nota >=4.5 && nota <= 4.9){
    console.log("Conceito: D");
}
if(nota < 4.5){
    console.log("Conceito: F")
    console.log("Você está na merda, estude mais!!!!");
}

console.log("FIM")