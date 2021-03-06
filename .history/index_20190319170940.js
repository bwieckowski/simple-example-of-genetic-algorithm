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

function sortPopulation( population )
{
  return population.sort(function(a,b){ return (a.score>b.score) ? -1 : (b.score == a.score) ? 0 : 1})
}

function fittnesPopulation( population )
{
  
  var fitnesspopulation =population
  .filter( item => {return fittnes(item) > 0 })
  .map( member => {
    var score = fittnes(member)
     return { "member": member, "score": score }
  })

  fitnesspopulation = sortPopulation( fitnesspopulation)

  return fitnesspopulation
}

function cross( item1, item2 )
{
  var item3 = "";
  var item4 = "";
  var i = 0;
  while( i < item1.length)
  {
    if(i%2)
    {
      item3+=item1[i]
      item4 +=item2[i]
    }
    else
    {
      item3 +=item2[i]
      item4 +=item1[i]
    }
    i++;

  }

  console.log( item3 , item4 )
  return [ item3, item4 ]

}

function chooseBetterChild( children )
{
  if (children[1].score > children[0])
    return children[1]
  else
    return children[0]
}

function crossPopulation( population )
{
  var newPopulation = []
  for( var i = 0; i < population.length-1; i++)
  {
    var children = cross( population[i].member, population[i+1].member)
    console.log( children )
    newPopulation.push( chooseBetterChild(children) )
  }

  return newPopulation;

}


function genetic()
{

  var population = getPopulation(100)
  do{
  population = fittnesPopulation(population)
  console.log(population)
  
  population = crossPopulation( population )
  console.log( population )

  }while( population[0].score < 0.9)
}

genetic();


 