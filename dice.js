const diceGraphic = document.getElementById("diceGraphic");

let timesPlayed = 0;

const rollDice = () => {
  // Start shaking animation
  diceGraphic.className = "shaken";

  // Get random number between 1 and 6
  let result = Math.floor((Math.random() * 6) + 1);

  // A third of the time if the result is odd, make it even
  if(Math.random() <= 0.33 && result % 2 == 1) {
    result++;
  }
  
  return result;
}


const updateDice = (result) => {
  // Display result in half a second
  setTimeout(() => {
    // Stop shaking animation
    diceGraphic.className = "";

    // Display dice face which matches result
    diceGraphic.src = "faces/" + result + ".png";
  
    // Update times played counter
    timesPlayed++;
    document.getElementById("timesPlayed").textContent = timesPlayed;
  }, 500);

};

const testOdds = (numberOfTrials) => {
  let odd = 0;
  let even = 0;
  for(i = 0; i < numberOfTrials; i++) {
    const result = rollDice();
      if(result % 2 == 0) {
        even++;
      } else {
        odd++;
      }
  }
  console.log("TEST RESULTS");
  console.log("------------");
  console.log("Total Trials:", numberOfTrials);
  console.log("Odd:", odd);
  console.log("Even:", even);

  console.log(((even / numberOfTrials) * 100).toFixed(2) + "% more likely to roll even");
}
