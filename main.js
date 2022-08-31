let btnCrear = document.querySelector("#btn-add-item");
let txtNombre = document.querySelector("#nombre");
let numEdad = document.querySelector("#edad");
let dateCumple = document.querySelector("#cumple");
let listAmigos = document.querySelector("#list");
//console.log(txtNombre);
//console.log(numEdad);
//console.log(dateCumple);
btnCrear.addEventListener("click", (ev)=>{
    ev.preventDefault();
    console.log(txtNombre.value); 
    console.log(numEdad.value); 
    console.log(dateCumple.value); 
    let nuevoNombre = document.createElement("li");
    nuevoNombre.textContent = txtNombre.value + ", " +  numEdad.value +", "+dateCumple.value;
    listAmigos.appendChild(nuevoNombre);
});