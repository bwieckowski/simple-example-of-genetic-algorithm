'use strict'


let pattern = "Baaaaartek"
var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function random()
{
  var letter = Math.floor(Math.random() * possible.length);
  console.log( letter )
  return possible[ letter ]
}

console.log( random() )