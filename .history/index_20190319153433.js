'use strict'


let pattern = "Baaaaartek"
var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function random()
{
  var letter = Math.random() * possible.length;
  console.log( letter )
  return possible[Math.random()*possible.length]
}

console.log( random() )