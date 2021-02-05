alert("Começando a conversão");
let distance = prompt("Entre com a distância em anos-luz: ");
let choice = prompt("escolha uma das opçoes abaixo: \n1- Parsec(pc)\n2- Unidade Astronomica(AU)\n3- Quilometros(km)");

let pcDistance = 0;

switch (choice) {  
    case "1":
        pcDistance = distance * 0.30660;
        alert("A distância em anos-luz é: " + distance + "\nA distância em Parsec é de: " + pcDistance);
    break;

    case "2":
        pcDistance = distance * 63241.1;
        alert("A distância em anos-luz é: " + distance + "\nA distância em Unidade Astronomica é de: " + pcDistance);    
    break;

    case "3":
        pcDistance = distance * 9.5;
        alert("A distância em anos-luz é: " + distance + "\nA distância em Quilômetros é de: " + pcDistance);    
    break;
    default:
        alert("A distância em anos-luz é: " + distance);     
    break;
}