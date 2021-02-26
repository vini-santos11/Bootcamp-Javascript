const hitchedSpaceships = [ ["Fenix", 8, true], 
                          ["Golias", 10, true], 
                          ["Helmet", 5, false], 
                          ["Elemental", 3, true], 
                          ["Darwin", 15, false] ]

let over9 = hitchedSpaceships.filter(element => { 
   return element[1] > 9;
}).map(spaceship => {
  return spaceship[0];
})

let hitchPlataform = hitchedSpaceships.findIndex(spaceship => {
  return spaceship[2] == false;
})

let higlightedSpaceships = hitchedSpaceships.map(element => {
  return element[0].toUpperCase();
})

let message = "Espaçonaves com mais de 9 tripulantes: " + over9.join(", ");
message += "\nPlataforma com processo de engate: " + (hitchPlataform + 1);
message += "\nEspaçonaves destacadas: " + higlightedSpaceships.join(", ");
alert(message);