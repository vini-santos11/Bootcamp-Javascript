alert("Bem vindo! Em breve, precisaremos de informações!")
let name1 = prompt("Digite o nome da pessoa mais velha: ");
let age1 = prompt("Digite a idade da pessoa mais velha: ");
let name2 = prompt("Digite o nome da pessoa mais nova: ");
let age2 = prompt("Digite a idade da pessoa mais nova: ");

let dif = age1 - age2;

alert("Segue dados da pessoa mais velha: ");
alert("Nome: " + name1 + "\nIdade: " + age1)
alert("Segue dados da pessoa mais nova: ");
alert("Nome: " + name2 + "\nIdade: " + age2);
alert("A diferença de idade entre as duas pessoas é de " + dif + " anos");
