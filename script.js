function testing() {
    alert("just testing...")
}


function computer_guess() {
    let choice = Math.floor(Math.random()*3)+1
    if (choice == 1){
        let img = document.createElement('img');
        img.src='./images/rock.jpg';
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.borderRadius = '25px';
        document.getElementById("here").textContent='';
        document.getElementById("here").append(img);

        let span = document.getElementById('cg')
        span.textContent = 'ROCK'


    } else if (choice == 2) {
        let img = document.createElement('img');
        img.src='./images/paper.jpg';
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.borderRadius = '25px';
        document.getElementById("here").textContent='';
        document.getElementById("here").append(img);

        let span = document.getElementById('cg')
        span.textContent = 'PAPER'

    } else {
        let img = document.createElement('img');
        img.src='./images/scissors.jpg';
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.borderRadius = '25px';
        document.getElementById("here").textContent='';
        document.getElementById("here").append(img);

        let span = document.getElementById('cg')
        span.textContent = 'SCISSORS'
    }

    return choice;
}


function rock () {

    let span = document.getElementById('p_guess')
    span.textContent = 'ROCK'
    let guess = computer_guess()
    win_or_lose(1, guess)

}

function paper () {

    let span = document.getElementById('p_guess')
    span.textContent = 'PAPER'

    let guess = computer_guess()
    win_or_lose(2, guess)


}

function scissors () {

    let span = document.getElementById('p_guess')
    span.textContent = 'SCISSORS'
    let guess = computer_guess()
    win_or_lose(3, guess)


}

let current_computer_score = 0;
let current_player_score = 0;

function win_or_lose(player_choice, computer_choice) {

    let computer_score = document.getElementById('cs')
    let player_score = document.getElementById('ps')
    let span = document.getElementById('wl')
    if (player_choice === computer_choice) {
        span.textContent = 'DRAW'
    }

    if ((player_choice == 1 && computer_choice == 3)
    || player_choice == 2 && computer_choice == 1 ||
    player_choice == 3 && computer_choice == 2) {
        span.textContent = 'WIN'
        current_player_score += 1;
        player_score.textContent = current_player_score;

        if (current_player_score == 5) {
            span.textContent = 'VICTORY, You win';
            current_player_score = 0;
            current_computer_score = 0;
            computer_score.textContent = current_computer_score;
            player_score.textContent = current_computer_score;



        }
    }

    if ((player_choice == 1 && computer_choice == 2)
    || player_choice == 2 && computer_choice == 3 ||
    player_choice == 3 && computer_choice == 1) {
        span.textContent = 'LOSE'
        current_computer_score += 1;
        computer_score.textContent = current_computer_score;

        if (current_computer_score == 5) {
            span.textContent = 'ARE DEFEATED, Computer wins';
            current_player_score = 0;
            current_computer_score = 0;
            player_score.textContent = current_computer_score;


        }
        


    }

}


