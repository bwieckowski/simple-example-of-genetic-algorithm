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
  var score=0;
  console.log(pattern.lenght)
  for(var i = 0; i < pattern.lenght; i++)
  {
    console.log(pattern[i])
    if( pattern[i] == item[i] )
      score++;
  }
  return score;
}


  var word = "Baaehiorhweu"//randomWord(pattern.length)
  //console.log(word)
  console.log( fittnes(word) )