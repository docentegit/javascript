/*
const INTERVALO=10;

console.log("Intervalo sera de " + INTERVALO + " minutos con una constante");
//INTERVALO=15;// No se permite por ser constante
*/
/*
var intervalo=15;
console.log("Intervalo sera de " + intervalo + " minutos con una variable");
intervalo=20;
console.log("Intervalo de " + intervalo + " minutos con una variable modificada");
*/
/*
let varb=true;//booleano
let varn=3.141592;//Numerico
let vars="Texto string";//cadena
let var1;//Indefinido

console.log("Para la variable varb="+varb+" con el tipo dato="+typeof varb);
console.log("Para la variable varn="+varn+" con el tipo dato="+typeof varn);
console.log("Para la variable vars="+vars+" con el tipo dato="+typeof vars);
console.log("Para la variable var1="+var1+" con el tipo dato="+typeof var1);

var1=vars;
console.log("Para la variable var1="+var1+" con el tipo dato="+typeof var1);
*/
//Realizar las siguientes conversiones implicitas.
let var1=15.25;
let var2=0;
let var3=true;
let var4="100";
let varx;
varx=var1;
/*
varx=var2;//Colocar comentario
console.log("Para la variable var1="+varx+" con el tipo dato="+typeof varx);
varx=var3;//Colocar comentario
console.log("Para la variable var1="+varx+" con el tipo dato="+typeof varx);
varx=var4;//Colocar comentario
console.log("Para la variable var1="+varx+" con el tipo dato="+typeof varx);
*/
//Conversiones explicitas.
varx=var1+var2;// Dentro implicitas
console.log("Para la variable var1="+varx+" con el tipo dato="+typeof varx);

var3=Boolean(var2)+var3;// Analizarlo
console.log("Para la variable var1="+var3+" con el tipo dato="+typeof var3);

varx=var1+Number(var4);//Buscar una funcio de conversión.
console.log("Para la variable var1="+varx+" con el tipo dato="+typeof varx);



