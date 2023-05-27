
rock.addEventListener('click',function playerSelection(e){

    const computerSelection = computerPlay()
    e = 'rock'
   
    console.log('you Choose ' + e)

    if(e && computerSelection){
       rock.style.backgroundColor = 'red'
       paper.style.backgroundColor = 'white'
       scissor.style.backgroundColor = 'white'
       if (computerSelection == "rock") {
          playerScore++;
          computerScore++;
          console.log(`DRAW youScore ` + playerScore + ` and computerScore ` + computerScore)
          playerSelection.innerHTML = playerSelection + ' = ' + playerScore 
          computerSelection.innerHTML = computerSelection + ' = ' + computerScore
          return result
       } else if(computerSelection == "paper") {
          computerScore++
          console.log('you lose, paper covers rock computerScore ' + computerScore)
          result.innerHTML = 'cScore ' + computerScore
          return result
         
       }else if(computerSelection == "scissor"){
          playerScore++
          console.log("you won, rock brakes scissor you Score " + playerScore)
         result.innerHTML = 'youScore ' + playerScore
         return result
         
       }
    }else{
       console.log('try again')
    }
})

 paper.addEventListener('click',function playerSelection(e){

    const computerSelection = computerPlay()
    e = 'paper'
     
      
    console.log('you choose ' + e)
    
    if(e && computerSelection){
       paper.style.backgroundColor = 'red'
       rock.style.backgroundColor = 'white'
       scissor.style.backgroundColor = 'white'
       if (computerSelection == "rock") {
          playerScore++
          console.log('you won, paper covers rock')
          console.log('playerScore ' + playerScore++)
          result.innerHTML = 'youScore ' + playerScore
          return result
        
       } else if(computerSelection == "paper") {
          playerScore++;
          computerScore++;
          console.log('DRAW playerScore ' + playerScore + " and computerScore " + computerScore)
          result.innerHTML = 'Draw youScore ' + playerScore + ' cScore ' + computerScore
          return result
       }else if(computerSelection == "scissor"){
          computerScore++
          console.log("you lose,scissor cuts paper")
          console.log('computerScore ' + computerScore)
          result.innerHTML = 'you lose cScore ' + computerScore 
          return result
       }
    }
    else{
       console.log('try again')
    }
    
 })

 scissor.addEventListener('click',function playerSelection(e){

    const computerSelection = computerPlay()
    e = 'scissor'
       
    console.log('you choose ' + e)

    if(e && computerSelection){
       scissor.style.backgroundColor = 'red'
       paper.style.backgroundColor = 'white'
       rock.style.backgroundColor = 'white'
       if (computerSelection == "rock") {
          computerScore++
          console.log('you lose, rock brakes scissor')
          console.log('computerScore ' + computerScore)
          result.innerHTML = 'you lose cScore ' + computerScore
          return result 
       } else if(computerSelection == "paper") {
          playerScore++
          console.log('you won, scissor cuts paper')
          console.log('playerScore ' + playerScore)
          result.innerHTML = 'you won youScore ' + playerScore
          return result 
          
       }else if(computerSelection == "scissor"){
          computerScore++
          playerScore++
          console.log('DRAW playerScore ' + playerScore + " and computerScore " + computerScore)
          result.innerHTML = 'Draw cScore ' + computerScore + ' youScore ' + playerScore
          return result 
       }
    }else{
       console.log('try again')
    } 
 })

  for (let i = 1; i < 6; i++) {
   if (playerScore = 5 && computerScore) {
    if(computerScore = 5){
       result.innerHTML = 'DRAW'
       result.style.font = '24px'
       result.style.color = 'yellow'
       return result
    }else if(playerScore < computerScore){
       result.innerHTML = 'YOU LOSE'
       result.style.font = '24px'
       result.style.color = 'RED'
       return result
    }else if(playerScore > computerScore){
       result.innerHTML = 'YOU WON'
       result.style.font = '24px'
       result.style.color = 'green'
       return result
    }
    
   } else {
    
   }
    
  }
