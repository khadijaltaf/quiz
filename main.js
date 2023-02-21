// var newadd = document.getElementById("add").value;
// newadd = 0;

// function noaddition(){
//     var buttons = document.getElementsByTagName("button");
//     for (var i = 0; i < buttons.length; i++) {
//       buttons[i].disabled = true;
// }
// }


// function addition(){
//   new
// }

let total = 0; // initialize a variable to keep track of the total number of correct answers

function finalanswer(){
  
}

function checkAnswer(selectedOption) {
  const options = document.querySelectorAll('.option'); // get all the answer options
  const scoreBox = document.getElementById('score-box'); // get the score box element

  options.forEach(option => {
    if (option === selectedOption) { // if the selected option is the correct answer
      option.style.backgroundColor = 'green'; // set background color to green
      option.disabled = true; // disable the option
      total++; // increment the total number of correct answers
      scoreBox.textContent = `Score: ${total}`; // update the score box with the new score
    } else {
      option.style.backgroundColor = 'red'; // set background color to red
      option.disabled = true; // disable the option
    }
  });
}

function checkAnswer1(selectedOption) {
  const options = document.querySelectorAll('.option1'); // get all the answer options
  const scoreBox = document.getElementById('score-box'); // get the score box element

 

  options.forEach(option => {
    if (option === selectedOption) { // if the selected option is the correct answer
      option.style.backgroundColor = 'green'; // set background color to green
      option.disabled = true; // disable the option
      total++; // increment the total number of correct answers
      scoreBox.textContent = `Score: ${total}`; // update the score box with the new score
    } else {
      option.style.backgroundColor = 'red'; // set background color to red
      option.disabled = true; // disable the option
    }
  });
}


