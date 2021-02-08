let dobrasEspaciais = 0;
let chosenOption = "0";

alert("Começando mais uma navegação");

let name = prompt("Qual o nome da nave? ");
 
chosenOption = prompt("Deseja entrar na dobra espacial?\n1- Sim\n2- Não");

while (chosenOption == "1") {
    dobrasEspaciais += 1;
    chosenOption = prompt("Deseja realizar a próxima dobra espacial?\n1- Sim\n2- Não");
}

alert("Nave: " + name + "\nQuantidade de dobras espaciais: " + dobrasEspaciais);