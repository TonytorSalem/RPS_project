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

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection) {
    let computerSelection = computerPlay().toLowerCase()
   playerSelection = prompt('enter your wepon?')
   const stringPlayerSelection = String(playerSelection).toLowerCase()
   if (stringPlayerSelection == 'rock') {

           if(computerSelection == 'rock'){
            alert('draw')
            console.log('Draw');
            playerScore++;
            computerScore++;
           }  else if(computerSelection == 'paper'){
            alert('You lose paper covers rock')
            console.log('You lose paper covers rock');
            computerScore++
           }else{
            alert('You niW rock brakes scissor')
            console.log('You niW rock brakes scissor')
            playerScore++;
           }

   } else if(stringPlayerSelection == 'paper'){

      if(computerSelection == 'rock'){
         alert('You niW paper covers rock');
         console.log('You niW paper covers rock');
         playerScore++;
        }  else if(computerSelection == 'paper'){
         alert('draw');
         console.log('Draw');
         playerScore++;
         computerScore++;
        }else{
         alert('You lose scissor cuts paper');
         console.log('You lose scissor cuts paper')
         computerScore++;
        }

      
   }else if(stringPlayerSelection == 'scissor'){

      if(computerSelection == 'rock'){
       alert('You lose scissor brakes by rock')
         console.log('You lose scissor brakes by rock')
        }  else if(computerSelection == 'paper'){
         alert('You niW scissor cuts paper')
         console.log('You niW scissor cuts paper')
        }else{
        alert('Draw')
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