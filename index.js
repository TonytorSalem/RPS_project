
let playerScore = 0
let computerScore = 0
const start = document.querySelector('.start')
const Try = document.querySelector('.try')
const rmvTry = document.querySelector('.try')
const startrm = document.querySelector('.start')
const container = document.querySelector('.container')
const score = document.querySelector('.score')
const spanpScore = document.querySelector('.spanpScore')
const spancScore = document.querySelector('.spancScore')
const rock = document.getElementById('r')
const paper = document.getElementById('p')
const scissors = document.getElementById('s')
const results = document.querySelector('.results')
const main = document.querySelector('.main')
const p = document.querySelector('p')
const rmp = document.querySelector('p')
const t = document.querySelector('.try')
const rmt = document.querySelector('.try')


const arr = ['r','p','s'];

function computerPlay(){
  return arr[(Math.floor(Math.random()*arr.length))]
 }




start.addEventListener('click', function (){
   container.style.display = 'block'
   startrm.style.display = 'none'
   p.style.display = 'none'
  
   
})

Try.addEventListener('click', function (){
  container.style.display = 'block'
  spanpScore.textContent = 0
  spancScore.textContent = 0
  rmvTry.style.display = 'none'
  p.style.display = 'none'
 
  
})


 function convertTOwords(letter){
   if(letter === 'r')return 'rock'
   if(letter==='p')return 'paper'
   if(letter === 's') return 'scissors'
 }


 function checkResult(playerScore,computerScore){
   if(playerScore === 5 || computerScore === 5){
      
      if(playerScore<computerScore){
        container.style.display = 'none'
        startrm.style.display = 'none'
        p.style.display = 'block'
        p.textContent = "YOU LOST"
        p.style.font = '40px'
        p.classList.add('scoreResult')
        p.style.font = '40px'
        p.classList.add('scoreResult')
        start.style.display = "none"
        Try.style.display = "block"
        
      }else{
         container.style.display = 'none'
        startrm.style.display = 'none'
        rmp.style.display = 'block'
        p.textContent = "YOU WIN"
        p.style.font = '40px'
        p.classList.add('scoreResult')    
        p.style.font = '40px'
        p.classList.add('scoreResult')
        start.style.display = "none"
        Try.style.display = "block"
       
      }
   }
 }

 function win(userChoice,compChoice){
   playerScore++
   checkResult(playerScore,computerScore)
   spanpScore.innerHTML = playerScore
   spancScore.innerHTML = computerScore
  
   results.innerHTML = convertTOwords(userChoice) + ' beats ' + convertTOwords(compChoice) + " YOU WIN"
   
 }
 
 function lose(userChoice,compChoice){
   computerScore++
   checkResult(playerScore,computerScore)
   spanpScore.innerHTML = playerScore
   spancScore.innerHTML = computerScore
  
   results.innerHTML = convertTOwords(userChoice) + ' loses to ' + convertTOwords(compChoice) + " YOU LOST"
   
 }
 function draw(userChoice,compChoice){
   checkResult(playerScore,computerScore)
   results.innerHTML = convertTOwords(userChoice) + ' equals ' + convertTOwords(compChoice) + " DRAW"
   
 }
 

function playRound(playerSelection) {
   let computerSelection = computerPlay()
   switch(playerSelection+computerSelection){
      case "rs":
      case "pr":   
      case "sp":
        win(playerSelection,computerSelection)
      break;

       case "rp":
       case "ps":   
       case "sr":
         lose(playerSelection,computerSelection)
       break;

       case "rr":
       case "pp":   
       case "ss":
         draw(playerSelection,computerSelection)
       break;
        
   }

      }


     /*
      t.addEventListener('click', function (){
         container.style.display = 'block'
         spanpScore.innerHTML = 0
         spancScore.innerHTML = 0
         results.innerHTML = "rock beats scissors"
         startrm.style.display = 'none'
         rmt.style.display = 'none'
         playRound(playerSelection)
      })*/ 


   rock.addEventListener('click', ()=>{
      
      playRound('r')
   })  

   paper.addEventListener('click', ()=>{
     
      playRound('p')
   })  

   scissors.addEventListener('click', ()=>{
     
      playRound('s')
   })  

































/*
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

/*
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

console.log(playRound(stringPlayerSelection))
console.log(playRound(stringPlayerSelection))
console.log(playRound(stringPlayerSelection))
console.log(playRound(stringPlayerSelection))
console.log(playRound(stringPlayerSelection))

}



const stringPlayerSelection = "sciSSor";
//const computerSelection = computerPlay();
console.log(playRound(stringPlayerSelection))

console.log(game())
*/