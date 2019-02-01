function dwarfRollCall(dwarves) {
  var dwarvesRollCall = "";
  
  for(var i = dwarves.length/2; i<dwarves.length; i++)
  {
    dwarvesRollCall = dwarvesRollCall + (i+1) + ". " + dwarves[i] + " ";
  }
  
  return dwarvesRollCall;
}

function summonCaptainPlanet(planeteerCalls){
  var exclaimedArray = [];
  
  for (var i = 0; i<planeteerCalls.length; i++)
  {
  exclaimedArray.push(planeteerCalls[i].toUpperCase() + "!");
  }
  
  return exclaimedArray;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i<words.length; i++)
  {
    var charCount = words[i].length;
    if (charCount > 4)
    {
      return true;
    }
    return false;
  }
}

function findTheCheese (foods) {
  for (var i = 0; i<foods.length; i++)
  {
    if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert")
    {
      return foods[i];
    }
  }
  return "no cheese!";
}

function wordsWithB(words){
  var wordsWithBArray = [];
    for (var i = 0; i<words.length; i++)
  {
    if (words[i].startsWith('B'))
    {
      wordsWithBArray.push(words[i]);
    }
  }
  return wordsWithBArray;
}


