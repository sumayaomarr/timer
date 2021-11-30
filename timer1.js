
// function to proccess info in terminal
let argvs = process.argv.slice(2) 

// makes sure the past value is a number
argvs = argvs.map(Number)

// assigns one second delay to every past value
let alarms = argvs.map(arg => arg * 1000)

// plays the sound 

const beep = () => process.stdout.write('\x07');


// filter out nans and negative numbers

const beeper = function(delay){
  if (!isNaN(delay)&& delay >= 0){
    setTimeout(beep,delay);
  }
}

// loops through 
// declares elements of index to word alarm

for(let index of alarms){beeper(index)}