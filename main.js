let btnCrear = document.querySelector("#btn-add-item");
let txtNombre = document.querySelector("#nombre");
let numEdad = document.querySelector("#edad");
let dateCumple = document.querySelector("#cumple");
let listAmigos = document.querySelector("#list");

btnCrear.addEventListener("click", (ev)=>{
    ev.preventDefault();    

    if( txtNombre.value!="" && numEdad.value!="" && dateCumple.value!="" ){
        let nuevoNombre = document.createElement("li");
        nuevoNombre.innerHTML =  
        `<div class="card">
            <h3 id="card-friend-name">${txtNombre.value}</h3>
            <section id="card-info-container">
                <p>Edad: <span id="span-age"> ${numEdad.value} </span> </p>
                <p><span id="span-birt"> ${dateCumple.value} </span>  </p>
            </section>                
        </div>`;        
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