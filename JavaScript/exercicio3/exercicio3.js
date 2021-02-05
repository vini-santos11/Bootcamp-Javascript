alert("Iniciando sistema de navegação");
let velocity = 0;
let name = prompt("Por favor, piloto, insira seu nome: ");
velocity = prompt("Ok, " + name + " agora insira a velocidade que deseja: ");
confirm("Entendi, o senhor deseja acelerar até a velocidade " + velocity + ", confirma?");

if (velocity < 0) {
  alert("A Nave está parada. Considere partir e aumentar a velocidade");
}
else if (velocity < 40) {
  alert("Você está devagar. Podemos aumentar mais");
}
else if ((velocity >= 40) && (velocity < 80)) {
  alert("Parece uma boa velocidade para manter");
}
else if ((velocity >= 80) && (velocity < 100)) {
  alert("Velocidade alta, considere diminuir");
}
else {
  alert("Velocidade perigosa. Controle automático forçado! Descendo a velocidade para 80km");
  velocity = 80;
}

alert("Piloto em ação: " + name + "\nVelocidade atual: " + velocity);