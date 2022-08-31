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
    if( txtNombre.value!="" && numEdad.value!="" && dateCumple.value!="" ){
        let nuevoNombre = document.createElement("li");
        nuevoNombre.textContent = txtNombre.value + ", " +  numEdad.value +", "+dateCumple.value;
        listAmigos.appendChild(nuevoNombre);
        txtNombre.value="";
        numEdad.value="";
        dateCumple.value="";
    }

    if(txtNombre.value==""){
        let errorMsg = document.querySelector("#error-name");
        errorMsg.classList.add("active");
        errorMsg.classList.remove("inactive");
    }else{
        let errorMsg = document.querySelector("#error-name");        
        errorMsg.classList.add("inactive");
        errorMsg.classList.remove("active");
    }

    if(numEdad.value==""){
        let errorMsg = document.querySelector("#error-age");
        errorMsg.classList.add("active");
        errorMsg.classList.remove("inactive");
    }else{
        let errorMsg = document.querySelector("#error-age");        
        errorMsg.classList.add("inactive");
        errorMsg.classList.remove("active");
    }

    if(dateCumple.value==""){
        let errorMsg = document.querySelector("#error-birt");
        errorMsg.classList.add("active");
        errorMsg.classList.remove("inactive");
    }else{
        let errorMsg = document.querySelector("#error-birt");        
        errorMsg.classList.add("inactive");
        errorMsg.classList.remove("active");
    }

});