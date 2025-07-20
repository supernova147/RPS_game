/*Logic Tree
- Wait for user input & capture user input
--Compare User input to computer's
--if its equal.. add a draw.

---if it isnt equal & its scissors > paper.. add W
---if it isnt equal & its paper > rock.. add W
---if it isnt equal & its rock > scissors.. add W

---if it isnt equal & its paper < scissors.. add L
---if it isnt equal & its rock < paper.. add L
---if it isnt equal & its scissors < rock.. add L

-Reset button is separate.
---

*/

let wins_count = 0;
let loss_count = 0;
let draw_count = 0;

const reset_count = 0;
let user_choice;

// const choices = ['rock', 'paper', 'scissors'];
// let rng = Math.floor(Math.random() * 3);
// let comp_choice = choices[rng]; 

// console.log(comp_choice) //testing output

//below is the rock function, waits for the rock button to be pressed.
function rock_function() {
//below the choices of the game are established, as well as
//the computer's randomization using 'Math.random' & is recorded in comp_choice

const choices = ['rock', 'paper', 'scissors'];
let rng = Math.floor(Math.random() * 3);
let comp_choice = choices[rng];
    //below is the logic tree that follows the rules of the game.
    if(comp_choice === 'rock') { //this if statement results in a draw.
        draw_count += 1; // so we add a draw to the draw_count.
        document.getElementById("draw_count").innerText = draw_count; //we change the current # to the updated draw_count.

        //below is how we change the images. both user & computer images are changed to their respective choices.

        let comp_img = document.getElementById('comp_img');
        comp_img.src = 'rock.png';
        let user_img = document.getElementById('user_img');
        user_img.src = 'rock.png';
    }
    else if(comp_choice === 'paper') {
        loss_count += 1;
        document.getElementById("loss_count").innerText = loss_count;

        let comp_img = document.getElementById('comp_img');
        comp_img.src = 'paper.png';
        let user_img = document.getElementById('user_img');
        user_img.src = 'rock.png';
    }
    else {
        wins_count += 1;
        document.getElementById("wins_count").innerText = wins_count;

        let comp_img = document.getElementById('comp_img');
        comp_img.src = 'scissors.png';
        let user_img = document.getElementById('user_img');
        user_img.src = 'rock.png';
    }
}

// paper_function {
function paper_function() {
//below the choices of the game are established, as well as
//the computer's randomization using 'Math.random' & is recorded in comp_choice

const choices = ['rock', 'paper', 'scissors'];
let rng = Math.floor(Math.random() * 3);
let comp_choice = choices[rng];

    //below is the logic tree that follows the rules of the game.
    if(comp_choice === 'paper') { //this if statement results in a draw.
        draw_count += 1; // so we add a draw to the draw_count.
        document.getElementById("draw_count").innerText = draw_count; //we change the current # to the updated draw_count.

        //below is how we change the images. both user & computer images are changed to their respective choices.

        let comp_img = document.getElementById('comp_img');
        comp_img.src = 'paper.png';
        let user_img = document.getElementById('user_img');
        user_img.src = 'paper.png';
    }
    else if(comp_choice === 'scissors') {
        loss_count += 1;
        document.getElementById("loss_count").innerText = loss_count;

        let comp_img = document.getElementById('comp_img');
        comp_img.src = 'scissors.png';
        let user_img = document.getElementById('user_img');
        user_img.src = 'paper.png';
    }
    else {
        wins_count += 1;
        document.getElementById("wins_count").innerText = wins_count;

        let comp_img = document.getElementById('comp_img');
        comp_img.src = 'rock.png';
        let user_img = document.getElementById('user_img');
        user_img.src = 'paper.png';
    }
}

function scissors_function() {
//below the choices of the game are established, as well as
//the computer's randomization using 'Math.random' & is recorded in comp_choice

const choices = ['rock', 'paper', 'scissors'];
let rng = Math.floor(Math.random() * 3);
let comp_choice = choices[rng];

    //below is the logic tree that follows the rules of the game.
    if(comp_choice === 'scissors') { //this if statement results in a draw.
        draw_count += 1; // so we add a draw to the draw_count.
        document.getElementById("draw_count").innerText = draw_count; //we change the current # to the updated draw_count.

        //below is how we change the images. both user & computer images are changed to their respective choices.

        let comp_img = document.getElementById('comp_img');
        comp_img.src = 'scissors.png';
        let user_img = document.getElementById('user_img');
        user_img.src = 'scissors.png';
    }
    else if(comp_choice === 'rock') {
        loss_count += 1;
        document.getElementById("loss_count").innerText = loss_count;

        let comp_img = document.getElementById('comp_img');
        comp_img.src = 'rock.png';
        let user_img = document.getElementById('user_img');
        user_img.src = 'scissors.png';
    }
    else {
        wins_count += 1;
        document.getElementById("wins_count").innerText = wins_count;

        let comp_img = document.getElementById('comp_img');
        comp_img.src = 'paper.png';
        let user_img = document.getElementById('user_img');
        user_img.src = 'scissors.png';
    }
}


// Reset button - resets the score of wins, losses, & draws.
// also changes the # displayed on the scoreboard.

function reset(){ 
    wins_count = 0;
    loss_count = 0;
    draw_count = 0;

    document.getElementById("draw_count").innerText = draw_count; 
    document.getElementById("wins_count").innerText = wins_count;
    document.getElementById("loss_count").innerText = loss_count;
}