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
        alert('your guess is whack')
        
      }
    },
    render: function (playGuess){
    this.prevGuesses.unshift(playGuess)
    if (playGuess >this.secretNum){
      alert(`your guess is too high.Previous Guesses; ${this.prevGuesses.join(', ')}`)
      
    } else if(playGuess <this.secretNum){ 
      alert(`your guess is too low.Previous Guesses ${this.prevGuesses.join(', ')}`)
      
    }else{
      alert('you win game over')
    }
  }
}
  
game.play()