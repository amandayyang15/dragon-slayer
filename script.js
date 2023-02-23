let xp = 0;
let health = 100;
let gold = 50; //UPDATESSSSS
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];
let kills = 0;
// let images = document.querySelectorAll("#svgs");
// let element = document.querySelector("#svgs");

const button1 = document.querySelector("#button1"); //const: for constant variable
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterKillText = document.querySelector("#killText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

//images
const golemIMG = document.querySelector("#golemIMG");
const slimeIMG = document.querySelector("#slimeIMG");
const dragonIMG = document.querySelector("#dragonIMG");

const stickIMG = document.querySelector("#stickIMG");
const axeIMG = document.querySelector("#axeIMG");
const maceIMG = document.querySelector("#maceIMG");
const swordIMG = document.querySelector("#swordIMG");
const wandIMG = document.querySelector("#wandIMG");

const townsquareIMG = document.querySelector("#townsquareIMG");
const storeIMG = document.querySelector("#storeIMG");
const caveIMG = document.querySelector("#caveIMG");


const weapons = [
    {
        name: " stick",
        power: 5,
        image: stickIMG,
    },
    {
        name: " axe",
        power: 20,
        image: axeIMG,
    },
    {
        name: " mace",
        power: 50,
        image: maceIMG,

    },
    {
        name: " sword",
        power: 75,
        image: swordIMG,
    },
    {
        name: " magic wand",
        power: 100,
        image: wandIMG,
    }
]

const monsters = [
    {
      name: "Slime",
      level: 2,
      health: 15,
      image: slimeIMG,
    },
    {
      name: "Rock Golem",
      level: 8,
      health: 60,
      image: golemIMG,

    },
    {
      name: "Dragon",
      level: 20,
      health: 300,
      image: dragonIMG,

    }
  ];

const locations = [
    {
        name: "town square",
        "button text": ["Go to store","Go to cave","Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\".",
        image: townsquareIMG,
    },
    {
        name: "store",
        "button text": ["Buy 10 health (🪙10)","Buy weapon (🪙30)","Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store.",
        image: storeIMG,
    },
    {
        name: "cave",
        "button text": ["Fight slime","Fight golem","Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "You enter the cave and see some monsters.",
        image: caveIMG,

    },
    {
		name: "fight",
		"button text": ["Attack", "Dodge", "Run"],
		"button functions": [attack, dodge, goTown],
		text: "You are fighting a monster.",
        image: caveIMG,
	},
	{
		name: "kill monster",
		"button text": ["Go to town square", "Go to town square", "Go to town square"],
		"button functions": [goTown, goTown, easterEgg],
		text: 'The monster dies. You gain experience points and find gold.',
        image: caveIMG,
	},
	{
		name: "lose",
		"button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
		"button functions": [restart, restart, restart],
		text: "LOL...you died ☠️",
        image: caveIMG,
	},
	{
		name: "win",
		"button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
		"button functions": [restart, restart, restart],
		text: "Congrats you slayed the dragon! YOU WIN THE GAME! 🎉",
        image: caveIMG,
    },
	{
		name: "easter egg",
		"button text": ["2", "8", "Go to town square?"],
		"button functions": [pickTwo, pickEight, goTown],
		text: "You find a secret game. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!",
        image: caveIMG,

	}

]

//initialize buttons
monsterStats.style.display = "none";
weapons[currentWeapon].image.style.opacity = "1";

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;


function update(location){
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text; //dot notn doesnt' work for arrays
    monsterStats.style.display = "none";

}

function goTown() {
    let loc = 0;
    update(locations[loc]);
    locations[loc].image.style.zIndex = "1";
    for (i = 0; i < locations.length; i++){
        if (i != loc){
            locations[i].image.style.zIndex = "0";
        }
    }
    for (x = 0; x < monsters.length; x++){
        monsters[x].image.style.zIndex = "-1";
    }
}

function goStore() {
    let loc = 1;
    update(locations[loc]);
    locations[loc].image.style.zIndex = "1";
    for (i = 0; i < locations.length; i++){
        if (i != loc){
            locations[i].image.style.zIndex = "0";
        }
    }
    for (x = 0; x < monsters.length; x++){
        monsters[x].image.style.zIndex = "-1";
    }
}

function goCave() {
    let loc = 2;
    update(locations[loc]);
    locations[loc].image.style.zIndex = "1";
    // for (i = 0; i < locations.length; i++){
    //     if (i != loc){
    //         locations[i].image.style.zIndex = "0";
    //     }
    // }
    for (x = 0; x < monsters.length; x++){
        monsters[x].image.style.zIndex = "-1";
    }
}

function fightDragon() {
    let loc = 3;
    locations[loc].image.style.zIndex = "1";
    for (i = 0; i < locations.length; i++){
        if (i != loc){
            locations[i].image.style.zIndex = "0";
        }
    }
}

function buyHealth() {
    if (gold >= 10){
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
    }
    else {
        text.innerText = "You don't have enough gold to buy health.";
    }
}

function buyWeapon() {
    if (currentWeapon < weapons.length - 1) {
    	if (gold >= 30) {
            gold -= 30;
            currentWeapon++;
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name;
    		text.innerText = "You now have a " + newWeapon + ".";
            inventory.push(newWeapon);
            text.innerText += " In your inventory you have: " + inventory;
            weapons[currentWeapon].image.style.opacity = "1";
    	}
        else {
    		text.innerText = "You do not have enough gold to buy a weapon.";
    	}
    }

    else {
		text.innerText = "You already have the most powerful weapon!";
        button2.innerText = "Sell weapon for 🪙15";
		button2.onclick = sellWeapon;
	}
}

let s = 0;

function sellWeapon() {
	if (inventory.length > 1) {
		gold += 15;
		goldText.innerText = gold;
        let currentWeapon = inventory.shift();
        text.innerText = "You sold a " + currentWeapon + ".";
        text.innerText += " In your inventory you have: " + inventory;
        weapons[s].image.style.opacity = "0.1";
        s++;
    }
    else {
    	text.innerText = "Don't sell your only weapon!";
  	}
}

function fightSlime() {
	fighting = 0;
	goFight();
}

function fightBeast() {
	fighting = 1;
	goFight();
}

function fightDragon() {
	fighting = 2;
	goFight();
}

function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "block";
    monsterNameText.innerText = monsters[fighting].name;
	monsterHealthText.innerText = monsterHealth;
    let loc = 2;
    for (i = 0; i < locations.length; i++){
        if (i != loc){
            locations[i].image.style.zIndex = "0";
        }
    }
    monsters[fighting].image.style.opacity="1";
    monsters[fighting].image.style.zIndex = "2";
    for (i = 0; i < monsters.length; i++){
        if (i != fighting){
            monsters[i].image.style.zIndex = "-1";
        }
    }

}

function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";

    if (isMonsterHit()) {
        health -= getMonsterAttackValue(monsters[fighting].level);
    } else {
		text.innerText += " You miss.";
	}

    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
	healthText.innerText = health;
	monsterHealthText.innerText = monsterHealth;
	if (health <= 0) {
		lose();
	} else if (monsterHealth <= 0) {
		fighting === 2 ? winGame() : defeatMonster();
        kills ++;
        monsterKillText.innerText = kills;
            monsters[fighting].image.style.zIndex = "2";

	}

	if (Math.random() <= .1 && inventory.length !== 1) {
        text.innerText += " Your " + inventory.pop() + " breaks.";
        currentWeapon--;
	}
}

function getMonsterAttackValue(level) {
    let hit = (level * 5) - (Math.floor(Math.random() * xp));
    console.log(hit);
    return hit;
}

function isMonsterHit() {
	return Math.random() > .2 || health < 20;
}


function dodge() {
    text.innerText = "You dodge the attack from the " + monsters[fighting].name + ".";
}

function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7)
    xp += monsters[fighting].level;
    goldText.innerText = gold;
	xpText.innerText = xp;
    monsters[fighting].image.style.opacity="0.2";
    update(locations[4]);
}

function lose() {
    update(locations[5]);
}

function winGame() {
  update(locations[6]);
}

function restart() {
	xp = 0;
	health = 100;
	gold = 50;
	currentWeapon = 0;
    kills = 0;
	inventory = ["stick"];
	goldText.innerText = gold;
	healthText.innerText = health;
	xpText.innerText = xp;
    monsterKillText.innerText = kills
    for(var i = 1; i < weapons.length; i++) {
        weapons[i].image.style.opacity = "0.25";
    }
    weapons[0].image.style.opacity = "1";
    let s = 0;
	goTown();
}

function easterEgg() {
	update(locations[7]);
}

function pickTwo() {
    pick(2);
}

function pickEight() {
    pick(8);
}

function pick(guess) {
    let numbers = [];
    while (numbers.length < 10) {
        numbers.push(Math.floor(Math.random() * 11));
    }

    text.innerText = "You picked " + guess + ". Here are the random numbers:\n";

    for (let i = 0; i < 10; i++) {
        text.innerText += numbers[i] + ", ";
    }

    if (numbers.indexOf(guess) !== -1) {
        text.innerText += "\n Right! You win 🪙20 !"
        gold += 20;
        goldText.innerText = gold;
    }

    else {
        text.innerText += "\n Wrong! You lose 10 health!"
        health -= 10;
        healthText.innerText = health
        if (health <= 0) {
          lose();
        }
    }
}
