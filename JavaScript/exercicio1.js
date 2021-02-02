alert("Bem Vindo! A seguir pediremos que informe alguns dados");
let name = prompt("Qual o seu nome ?");
let age = prompt("Qual a sua idade?");
let confirmation = confirm("Você confirma que sua idade é: " + age);
if (confirmation == true) {
    alert("Nome: " + name + " |" + " Idade: " + age);
}
