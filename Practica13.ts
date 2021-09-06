interface Etiqueta { 
    label: string; 
}
function imprimirEtiqueta2(etiqueta: Etiqueta) { 
    console.log(etiqueta.label);
}; 
let miEtiqueta2 = {numero: 10,  label: "Esta es mi etiqueta2" };
    imprimirEtiqueta2(miEtiqueta2); 