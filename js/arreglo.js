//Compras a un supermercado
/*
let carrito=[   "leche",1,
                "carne",2,
                "papa",3,
                "fideos",1];

console.log("Item:"+carrito[0]);
console.log("Cantidad:"+carrito[1]);
console.log("Item:"+carrito[2]);
console.log("Cantidad:"+carrito[3]);
console.log("Item:"+carrito[4]);
console.log("Cantidad:"+carrito[5]);
console.log("Item:"+carrito[6]);
console.log("Cantidad:"+carrito[7]);
console.log("IMPRESION COMPLETA");
console.log(carrito);
// cOMO SE ADICIONA UN NUEVO ITEM Y CANTIDAD.
carrito.push("arroz",5);
console.log(carrito);
*/

/*
let item = {nombre:'Leche',cantidad:1};
console.log("Item: "+item.nombre);
console.log("Cantidad: "+item.cantidad);

let carrito=[{nombre:'Leche',cantidad:1},
             {nombre:'carne',cantidad:2},
             {nombre:'fideo',cantidad:1},
             {nombre:'papa',cantidad:3}];
console.log(carrito);
item={nombre:'arroz',cantidad:5};
carrito.push(item);
console.log(carrito);
*/
// imprimirlo con Etiquetas.
// Adicionar un nuevo registro.
/*
let item = {nombre:'Leche',cantidad:2,precio:7.5};

//imprimir item,cantidad,precio, total.
console.log("item:"+item.nombre);
console.log("cantidad:"+item.cantidad);
console.log("Precio:"+item.precio+"Bs");
console.log("total:"+item.cantidad*item.precio+"Bs");
*/

//Buscar funciones o procesos para ordenar un ARRAY.
// Ordenar el array de carrito
// Ordenar un array linial.
/*let numeros=[4,2,6,1,8,3,10];
numeros.sort((a,b)=>a-b);
console.log(numeros);
*/
let carrito=[{nombre:'Leche',cantidad:1,precio:7.5},
             {nombre:'carne',cantidad:2,precio:30.5},
             {nombre:'fideo',cantidad:1,precio:5.5},
             {nombre:'papa',cantidad:3,precio:20.5}];
item={nombre:'arroz',cantidad:2,precio:30.5};
carrito.push(item);
/*let carrito2=[{nombre:'Leche',cantidad:1,precio:7.5},
{nombre:'carne',cantidad:2,precio:30.5},
{nombre:'fideo',cantidad:1,precio:5.5},
{nombre:'papa',cantidad:3,precio:20.5},
{nombre:'arroz',cantidad:2,precio:30.5}];
*/
/*
console.log("IMPRESION ORDENADO POR PRECIO");
//carrito.slice().sort((x,y)=>x.precio - y.precio);
carrito2.sort((x,y)=>x.precio - y.precio);
console.log(carrito2);

console.log("IMPRESION ORDENADO POR NOMBRE");
carrito.sort((a,b)=>a.nombre.localeCompare(b.nombre));
console.log(carrito);
*/
console.log("IMPRESIÓN ORDENADA POR PRECIO");
let carritoOrdenadoPorPrecio = carrito.slice().sort((a, b) => a.precio - b.precio);
console.log(carritoOrdenadoPorPrecio);

console.log("IMPRESIÓN ORDENADA POR NOMBRE");
let carritoOrdenadoPorNombre = carrito.slice().sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(carritoOrdenadoPorNombre);