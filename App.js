const numberRandom = Math.floor(Math.random() * 100);

let gameCounter = 0;
console.log(numberRandom);

const invalidedNumber = (value) =>{
    if(isNaN(value)) {
        return "Pleas Enter valid number"
    } else if (value < 1 || value > 100 ){
        return "pleas Enter a number between 1 to 100"
    }
}


const checkGuess = (number) => {
    gameCounter++;
    if(number === numberRandom){
        console.log("You guessed right");
    }else if(number > numberRandom){ 
        console.log("Guess again, increase it")
        play() 
    }else{
       console.log("Guess again, reduce it")
       play() 
    }
}


const play = () =>{
    const userNumber = prompt("Enter number between 1 to 100 ");

    if(userNumber === null) return;

    if(gameCounter >=10){
        console.log("Game Over");
        return;
    }

    const validation = invalidedNumber(+userNumber);
    if(validation){
        console.log(validation);
        return play();
    }
    
    checkGuess(+userNumber);
}

play();
