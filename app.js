const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        console.log(this.secretNum)
        while(this.prevGuesses[0]!== this.secretNum) 
        this.getGuess()
        if(this.prevGuesses[0] === this.secretNum){
        return
      }
      
      },

    getGuess: function() {
      
      let playersGuess = parseInt(prompt(`Please guess a number between ${this.smallestNum} and ${this.biggestNum}`))
      if(playersGuess!==NaN) {
        if(playersGuess>=1 && playersGuess <= 100){
          this.render(playersGuess)} 
        
      } else {
        alert('your guess is too high||low')
        
      }
    },
    render: function (playGuess){
    this.prevGuesses.unshift(playGuess)
    console.log(this.prevGuesses)
    }
  }

  
  //     if (prevGuessesArray[prevGuessArray.length-1] === this.secretNum){
  //       alert(`Congrats! you guessed the number in ${previousGuessArray.length}`)  
  //     }else if(prevGuessesArray[prevGuessArray.length-1] > this.secretNum){
  //       alert('Your guess is too high Previous guesses: x, x, x, x')

  //     }else if(prevGuessesArray[prevGuessArray.length-1] < this.secretNum){
  //     alert(`your guess is too low ${prevGuessArray}`)
  //   }
  // }
game.play()