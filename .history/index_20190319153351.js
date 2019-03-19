'use strict'


let pattern = "Baaaaartek"
var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function random()
{
  return possible[Math.random()*possible.length]
}

console.log(random)