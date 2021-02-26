let spaceshipVelocity = 150;

function speedDown(velocity, callback) {
  let desaceleration = 20;
  while(velocity > 0) {
    callback(velocity);
    velocity -= desaceleration;
  }
  alert("Nave parada, comportas abertas!");
}

speedDown(spaceshipVelocity, function(velocity) {
  console.log("Velocidade atual: " + velocity);
})
