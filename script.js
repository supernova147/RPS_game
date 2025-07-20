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

const choices = ['rock', 'paper', 'scissors'];
let rng = Math.floor(Math.random() * 3);
let comp_choice = choices[rng];

console.log(comp_choice)
function rock_function() {

const choices = ['rock', 'paper', 'scissors'];
let rng = Math.floor(Math.random() * 3);
let comp_choice = choices[rng];

console.log(comp_choice)

    if(comp_choice === 'rock') {
        draw_count += 1;
        document.getElementById("draw_count").innerText = draw_count;
        document.getElementById(comp_img).inner
    }
    else if(comp_choice === 'paper') {
        loss_count += 1;
        document.getElementById("loss_count").innerText = loss_count;

    }
    else {
        wins_count += 1;
        document.getElementById("wins_count").innerText = wins_count;
    }
}

// paper_function {

// }

// scissors_function {

// }