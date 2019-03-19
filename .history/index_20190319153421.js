'use strict'


let pattern = "Baaaaartek"
var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function random()
{
  console.log(Math.random() * possible.length )
  return possible[Math.random()*possible.length]
}

console.log( random() )