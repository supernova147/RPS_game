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

-Reset button is separate. & counters can be included within tree.
-------------------------------------------------------------------
^ Old method 
New one uses buttons instead of forms for input. - Creates a better user experience - Pressing a button > typing for RPS.
Similar logic - explanations down below.
*/

//variables used to set the game's counters.
let wins_count = 0;
let loss_count = 0;
let draw_count = 0;
const reset_count = 0;

//Below is the rock function, waits for the rock button to be pressed.
function rock_function() {
//Below the choices of the game are established, as well as
//The computer's randomization using 'Math.random' & is recorded in comp_choice

    const choices = ['rock', 'paper', 'scissors']; //an array consisting of choices in the game.
    let rng = Math.floor(Math.random() * 3); //there's only 3 options available! so it should be randomized for those 3 options!
    let comp_choice = choices[rng]; //the computer's choice will only be able to choose from 'rock', 'paper', or 'scissors'
    //below is the logic tree that follows the rules of the game.
        if(comp_choice === 'rock') { //this if statement results in a draw.
            draw_count += 1; // so we add a draw to the draw_count.
            document.getElementById("draw_count").innerText = draw_count; //we change the current # to the updated draw_count & this updates on the web page as well.
            
            //below is how we change the images. both user & computer images are changed to their respective choices.
            
            let comp_img = document.getElementById('comp_img');
            comp_img.src = 'rock.png';
            let user_img = document.getElementById('user_img');
            user_img.src = 'rock.png'; //since the users previous choice may be different - it's important that we still include changing the user's image to rock as well! even if its the same option as before.
        }
        else if(comp_choice === 'paper') {  //Loss condition logic!
            loss_count += 1;
            document.getElementById("loss_count").innerText = loss_count;
            
            let comp_img = document.getElementById('comp_img');
            comp_img.src = 'paper.png';
            let user_img = document.getElementById('user_img');
            user_img.src = 'rock.png';
        }
        else {  //Win condition logic! No need to specify the win condition as its the last available option. The check COULD be added but it is redundant.
            wins_count += 1;    
            document.getElementById("wins_count").innerText = wins_count;
            
            let comp_img = document.getElementById('comp_img');
            comp_img.src = 'scissors.png';
            let user_img = document.getElementById('user_img');
            user_img.src = 'rock.png';
    }
}

// paper_function - logic follows the same as the above, except the comparisons to choices are "switched."
function paper_function() {

    const choices = ['rock', 'paper', 'scissors'];
    let rng = Math.floor(Math.random() * 3);
    let comp_choice = choices[rng];

        if(comp_choice === 'paper') {
            draw_count += 1; 
            document.getElementById("draw_count").innerText = draw_count; 
            
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

//scissors function, same functionality as the previous two!
function scissors_function() {

    const choices = ['rock', 'paper', 'scissors'];
    let rng = Math.floor(Math.random() * 3);
    let comp_choice = choices[rng];

    if(comp_choice === 'scissors') { 
        draw_count += 1; 
        document.getElementById("draw_count").innerText = draw_count; 
        
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
    wins_count = reset_count;  //reset_count or the number "0" works to reset the count!
    loss_count = reset_count;
    draw_count = reset_count;

    document.getElementById("draw_count").innerText = draw_count; //this showcase the updated count onto the web!
    document.getElementById("wins_count").innerText = wins_count;
    document.getElementById("loss_count").innerText = loss_count;
}