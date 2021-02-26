let name = prompt("Solicite o nome da espaçonave: ");
let InverseName = "";

for (let i = name.length - 1; i>=0; i--) {
	if (name[i] == "e") {
		break;
	}
  InverseName += name[i];
}
alert("Nome original da nave: " + name + "\nNome Invertido da nave: " + InverseName);
