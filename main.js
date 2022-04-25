
document.querySelector('button').addEventListener('click', playRound)


function playRound(){
  let deckId = localStorage.getItem('deckId');
      getDeckId(deckId); 
      drawTwo(deckId);

}



// Checks if Deck Id. Uses same Id or gets new
function getDeckId(deckId){
  if (deckId){
    console.log(`Deck Id is: ${deckId}`)
  } else {
    console.log('No deck Id. Retrieving.')

    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      localStorage.setItem('deckId', data.deck_id)
    
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  }

}

// Gets card value for each player
function drawTwo(deckId){
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      localStorage.setItem('player1', convertToNum(data.cards[0].value))
      localStorage.setItem('player2', convertToNum(data.cards[1].value))
      document.querySelector('#player1').src = data.cards[0].image
      document.querySelector('#player2').src = data.cards[1].image
    
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

// Converts Face Cards to Num Val
function convertToNum(val){
  if(val === 'ACE'){
    return 14
  }else if(val === 'KING'){
    return 13
  }else if(val === 'QUEEN'){
    return 12
  }else if(val === 'JACK'){
    return 11
  }else{
    return Number(val)
  }
}

function evaluateWin(player1Val, player2Val){
  if(player1Val > player2Val){
    
  }
}