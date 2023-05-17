     const arr = ['Rock','Paper','Scissor'];

      function computerPlay(){

        return arr[(Math.floor(Math.random()*arr.length))]
       /*  let randomNumber = Math.floor(Math.random()*3)
            if(randomNumber == "0"){
               console.log('rock')
           }else if(randomNumber == "1"){
                console.log('paper')
          }else{
               console.log('scissor')
        }
        */
    }

   // Global variables
// Initialise player score to zero
let playerScore = 0;
// Initialise computer score to zero
let computerScore = 0;
// Initialise games played to zero

function playRound(playerSelection) {
    let computerSelection = computerPlay().toLowerCase()
   const stringPlayerSelection = String(playerSelection).toLowerCase()
   if (stringPlayerSelection == 'rock') {

           if(stringPlayerSelection == 'rock' && computerSelection == 'rock'){
            console.log('Draw');
            playerScore++;
            computerScore++;
           }  else if(stringPlayerSelection == 'rock' && computerSelection == 'paper'){
            console.log('You lose paper covers rock');
            computerScore++
           }else{
            console.log('You niW rock brakes scissor')
            playerScore++;
           }

   } else if(stringPlayerSelection == 'paper'){

      if(computerSelection == 'rock'){
         console.log('You niW paper covers rock');
         playerScore++;
        }  else if(computerSelection == 'paper'){
         console.log('Draw');
         playerScore++;
         computerScore++;
        }else{
         console.log('You lose scissor cuts paper')
         computerScore++;
        }

      
   }else if(stringPlayerSelection == 'scissor'){

      if(computerSelection == 'rock'){
         console.log('You lose scissor brakes by rock')
        }  else if(computerSelection == 'paper'){
         console.log('You niW scissor cuts paper')
        }else{
         console.log('Draw')
        }  

   }else{
      console.log('invalid')
   }
}


function game(){

   for (let i = 0; i < 5; i++) {
      playRound(stringPlayerSelection)
      
   }
  

}
 


  const stringPlayerSelection = "sciSSor";
 //const computerSelection = computerPlay();
 console.log(playRound(stringPlayerSelection))

 console.log(game())