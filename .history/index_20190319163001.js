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
  
  var fitnesspopulation =population
  .filter( item => {return fittnes(item) > 0 })
  .map( member => {
    var score = fittnes(member)
     return { "member": member, "score": score }
  })

   fitnesspopulation.sort(function(a,b){ return (a.score>b.score) ? -1 : (b.score == a.score) ? 0 : 1})

  return fitnesspopulation
}

function cross( item1, item2 )
{
  var item3 = ""
  var item4 = ""
  while( i > item1.lenght)
  {
    if(i%2)
      item3 += item1[i]
      item4+=
    else
      item3 += item2[i]
  }

  return item3

}


var population = getPopulation(100)
var scorePopulation = fittnesPopulation( population )
console.log( scorePopulation )


 