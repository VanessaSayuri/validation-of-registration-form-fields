
const fields = document.querySelectorAll("[required]")

//console.log(fields);

function customValidation(event){
    const field = event.target;

    //lógica para verificar se existem erros (propriedade customError == true)
    function verifyErrors(){
        let foundError = false;


        for (let error in field.validity){ //in intera sobre propriedades do objeto
            // se nao for customError então verifica se tem erro
            if(error != "customError" && field.validity[error]){
                foundError = true
            }
        } 

        return foundError;

    }

    const error = verifyErrors();

    if (error){
        //trocar a mensagem de required
        field.setCustomValidity("First Name can not be empty!")
    }
    else{
        field.setCustomValidity("")
    }

    
}



for(let field of fields){
    field.addEventListener("invalid", customValidation)
}






document.querySelector("form").addEventListener("submit", event => {
    console.log("Enviar formulário")

    //impedir de enviar o formulário (reload da página)
    event.preventDefault();
});
