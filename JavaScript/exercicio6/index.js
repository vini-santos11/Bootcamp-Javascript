let name = prompt("Solicite o nome da espaçonave: ");
let newSpaceship = "";
let firstCaractere = prompt("Qual caractere do nome deseja ser substituido?");
let secondCaractere = prompt("Qual caractere deseja colocar no lugar do substituido?");

for (let i = 0; i < name.length; i++) {
	if (name[i] == firstCaractere) {
		newSpaceship += secondCaractere;
	}
	else {
		newSpaceship += name[i];
	}
}
alert("O nome da espaçonave ficou: " + newSpaceship);