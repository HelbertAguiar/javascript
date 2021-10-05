var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while(isSunk == false){

    guess = prompt("Pronto para atirar? (insirar um numero entre 0 e 6): ");

    if ( guess < 0 || guess > 6 ){
        alert("palpite inválido");
        window.stop();
    }
    
    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3 ){
        alert("Acertou miseravi");
        hits = hits + 1;

        if (hits == 3){
            isSunk = true;
            alert("Você venceu");
        }
    }else{
        alert("errou");
    }
}

var stats = "Você acertou: " + hits + "vezes e voce tentou: " + guesses + " vezes.";
alert(stats)
