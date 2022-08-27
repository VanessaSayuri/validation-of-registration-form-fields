
const fields = document.querySelectorAll("[required]")

//console.log(fields);


//função para validar os campos
function ValidateField(field){
    //lógica para verificar se existem erros
    function verifyErrors(){
        let foundError = false;


        for (let error in field.validity){ //in intera sobre propriedades do objeto
            // se nao for customError então verifica se tem erro
            if(field.validity[error] && !field.validity.valid){
                foundError = error
            }
        } 

        return foundError;

    }

    function setCustomMessage (message){
        const spanError = field.parentNode.querySelector("span.error")
        if(message){
            //trocar a mensagem de required
        //field.setCustomValidity("First Name can not be empty!")

            spanError.classList.add("active"); //adiciona a classe e insere a mensagem
            spanError.innerHTML = message
    
        } else{
             //field.setCustomValidity("")
            spanError.classList.remove("active");
            spanError.innerHTML = ""
        }
        
    }

    return function(){
        if (verifyErrors()){
            field.style.borderColor = "red"
            setCustomMessage ("First Name can not be empty!")
        }
        else{
            setCustomMessage()
        }
    };
}


function customValidation(event){

    const field = event.target;

    const validation = ValidateField(field);

    validation();
    
}



for(let field of fields){
    field.addEventListener("invalid", event => {
        //elliminar o bubble
        event.preventDefault() // só faz sentido usar ele aqui pois o bubble só exite no evento "inválido"
        customValidation (event)
    })
   
    field.addEventListener("blur", customValidation)
} 



document.querySelector("form").addEventListener("submit", event => {
    console.log("Enviar formulário")

    //impedir de enviar o formulário (reload da página)
    event.preventDefault();
});
