function imprimirId(id: number | string){
if (typeof id === "string") {
    console.log(`El id es ${(id as string).toUpperCase()}`);
} else {
    console.log(`El id es ${(id as number).toFixed(2)}`);
}
}

imprimirId(`este_es_mi_id`);
imprimirId(100.234234123);