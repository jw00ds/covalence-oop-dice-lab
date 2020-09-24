
// Create/prep/append items
let diceArray = [];
let containerDivButtons = document.createElement("div");
let containerDivDice = document.createElement("div");
let generateDieButton = document.createElement("button");
let generateDieButtonLabel = document.createTextNode("Generate Die");
let sumButton = document.createElement("button");
let sumButtonLabel = document.createTextNode("Sum Dice");
let rollButton = document.createElement("button");
let rollButtonLabel = document.createTextNode("Roll Dice");
containerDivButtons.appendChild(generateDieButton);
containerDivButtons.appendChild(rollButton);
containerDivButtons.appendChild(sumButton);
document.body.appendChild(containerDivButtons);
document.body.appendChild(containerDivDice);
generateDieButton.appendChild(generateDieButtonLabel);
rollButton.appendChild(rollButtonLabel);
sumButton.appendChild(sumButtonLabel);
generateDieButton.setAttribute("class", "roll-buttons");
rollButton.setAttribute("class", "roll-buttons");
sumButton.setAttribute("class", "roll-buttons");
containerDivDice.setAttribute("class", "container");
containerDivButtons.setAttribute("class", "container");
generateDieButton.addEventListener("click", function () {
    new Die();
});
rollButton.addEventListener("click", function () {
    diceArray.forEach((die) => {
        die.roll();
    });
});
sumButton.addEventListener("click", function () {
    let sum = 0;
    diceArray.forEach((die) => {
        sum += die.value;
    });
    alert(sum);
});

// Define Die class w/ methods
class Die {
    constructor() {
        this.div = document.createElement("div");
        this.roll();
        this.render();
        this.div.addEventListener("click", () => this.roll());
        this.div.addEventListener("dblclick", () => this.dblclickRemove());
        diceArray.push(this);
    }
    render() {
        containerDivDice.appendChild(this.div);
        this.div.setAttribute("class", "dice");
    }
    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.div.textContent = this.value;
    }
    sglclickRoll() {
        this.roll();
    }
    dblclickRemove() {
        containerDivDice.removeChild(this.div);
        diceArray.splice(diceArray.indexOf(this), 1);
    }
}
