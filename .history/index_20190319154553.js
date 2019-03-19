'use strict'


let pattern = "Baaaaartek"
var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"




function randomLetter()
{
  var letter = Math.floor( Math.random() * possible.length);
  return possible[ letter ]
}

function randomWord( lenght )
{
  var word = []
  for( var i = 0; i < lenght; i++)
    word.push( randomLetter() )
  
  return word.join("")
}

function fittnes( item )
{
  score=0;
  for(var i = 0; i < lenght; i++)
    if( pattern[i] == item[i] )
      score++;
  score /= item.lenght
  return score;
}


var word = randomWord(pattern.length)
console.log( fittnes )