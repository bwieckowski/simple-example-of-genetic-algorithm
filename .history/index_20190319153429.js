'use strict'


let pattern = "Baaaaartek"
var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function random()
{
  var letter = Math.random() * possible.length;
  console.log(Math.random() * possible.length )
  return possible[Math.random()*possible.length]
}

console.log( random() )