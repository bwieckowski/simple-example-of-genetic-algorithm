'use strict'


let pattern = "Trelemorele"
var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let maxPopulationCount = 10;
let mutationProbability =0.4;


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
    population.push( { "member" : randomWord(pattern.length), "score": 0 } )

  return population;
}

function sortPopulation( population )
{
  return population.sort(function(a,b){ return (a.score>b.score) ? -1 : (b.score == a.score) ? 0 : 1})
}

function fittnesPopulation( population )
{
  
  var fitnesspopulation = population
  .filter( item => {return fittnes(item.member) > 0 })
  .map( item => {
    var score = fittnes(item.member)
     return { "member": item.member, "score": score }
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
    if( i < ((item1.length)*Math.floor(Math.random()*1.5)/2) )
    {
      item3+=item1[i]
      item4+=item2[i]
    }
    else
    {
      item3 +=item2[i]
      item4 +=item1[i]
    }
    i++;

  }
  return [{ "member": item3, "score": 0 }, { "member": item4, "score": 0 } ]

}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function cutPopulation( population )
{
  var cutpopultaion = []
  for (var i = 0; i < maxPopulationCount || i < population.lenght; i++ )
    cutpopultaion.push( population[i] )

  return cutpopultaion;

}

function chooseBetter( children )
{
  if (children[1].score > children[0].score)
    return children[1]
  else
    return children[0]
}


function mutation(word) {
  for (var i = 0; i < word.lenght; i++)
    if (Math.random() < mutationProbability)
      word[i] = randomLetter()
  return word;

}


function crossPopulation( population )
{
  var newPopulation = []
  newPopulation.push(population[0])
  population = shuffle(population);
  for( var i = 0; i < population.length-1; i++)
  {
    var children = cross( mutation(population[i].member), mutation(population[i+1].member))
    var child = chooseBetter(children)
    newPopulation.push( child )
  }
  newPopulation = sortPopulation( newPopulation )
  return newPopulation;

}




function genetic()
{

  var population = getPopulation(100)

 

  var iterattion = 0
  do{
   
  population = fittnesPopulation(population)
  population = crossPopulation( population )
  population = fittnesPopulation(population)
    console.log(population)
    iterattion++;
    console.log('iterration', iterattion)
    console.log( population.length)
    
  }while( iterattion < 100)

}



function crossovertest()
{
  var word1 = randomWord(5);
  var word2 = randomWord(5);
  var cross =cross( word1, word2)

  console.log( word1 )
  console.log(cross[1].member)
  console.log(cross[0].member)
  console.log(word2)
}

//genetic();
//crossovertest();
var tab1 = [1,2,3,4]
var tab2 = [1,2,3,4]
console.log( tab1<tab2)