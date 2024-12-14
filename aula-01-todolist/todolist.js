// Nosso campo de texto é id: nomeTarefa
const btnEnviar = document.getElementById("enviar");

btnEnviar.style.backgroundColor = "green"

//Adcionando evento de clique
btnEnviar.addEventListener("click", function () {
    console.log("Clicou no botão!");

    const inputTarefa = document.getElementById("nomeTarefa");
    console.log(inputTarefa.value)



    // Comparativo JavaScript
    // == igual
    // != diferente
    // > maior, >=maior igual
    // < menor, <= menor igual

    if (inputTarefa.value == "") { // Se a pessoa digitar algo igual a null
        alert("Digite alguma informação válida"); // exibir o alerta
        window.reload(); //recarregar a pagina
    }

    //document -> arquivo HTML
    //getElementById -> Busque o elemento com base no ID
    const listaItens = document.getElementById("listaItens");

    const h2 = document.createElement("h2"); 

    h2.textContent = inputTarefa.value

    listaItens.appendChild(h2)

});

console.log(btnEnviar)