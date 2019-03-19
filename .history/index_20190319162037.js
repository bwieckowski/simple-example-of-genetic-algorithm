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
  for(var i = 0; i < pattern.length; i++)
  {
    if( pattern[i] == item[i] )
      score++;
  }
  return score/pattern.length;
}

function getPopulation( ammountPopulation )
{
  var population = []

  for (let index = 0; index < ammountPopulation; index++)
    population.push( randomWord(pattern.length) )

  return population;
}

function fittnesPopulation( population )
{
  
  var fitnesspopulation =population..filter( return fit).map( member => {
    var score = fittnes(member)
    if( score > 0)
     return { "member": member, "score": score }
    else
     return null
  })

   fitnesspopulation.sort((a,b)=>{ (a.score>b.score) ? 1 : (b.score > a.score) ? -1 : 0})

  return fitnesspopulation
}


var population = getPopulation(100)
var scorePopulation = fittnesPopulation( population )
console.log( scorePopulation )


 