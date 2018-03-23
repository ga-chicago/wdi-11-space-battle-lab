// define ship class to use to build every instance of player ship and alien ships
// all ships need hull (health), firepower (attack), accuracy (chance attack will hit)

// function to generate random number between 0 and specified param to use to define alien ship properties

// round Math.random() in below function to 2 decimal places

const getRandomNum = (max) => {
	num = Math.random() * Math.floor(max);
	// round the result so the output is more friendly
	roundedString = num.toFixed(2)
	roundedNum = Number(roundedString);
  	return roundedNum;
};

// create functions to generate random alien hulls, firepowers, accuracies
// use those outputs as values for AlienShip class

const getAlienHull = () => {
	// hull is between the values 3 and 6
	// range of those values is 3
	// generate num between 0 and 3
	randomNum = getRandomNum(3);
	// add 3 so it is between 3 and 6
	return randomNum + 3;
};

const getAlienFirepower = () => {
	// firepower between 2 and 4
	// generate number between 0 and 2
	randomNum = getRandomNum(2);
	// add 2 so it's between 2 and 4
	return randomNum + 2;
};

const getAlienAccuracy = () => {
	// accuracy is between .6 and .8 <-- range .2
	// randomNum is between 0 and 1. 1/5 = 0.2 max
	// add 0.4 to make it between 0.6 and 0.8
	randomNum = getRandomNum(1);
	randomNumDiv5 = randomNum / 5;
	return randomNumDiv5 + 0.6;
}

class Ship {
	// need to be able to input all three parameters when calling
	// an instance of an object
	constructor(hull, firepower, accuracy) {
		this.hull = hull;
		this.firepower = firepower;
		this.accuracy = accuracy;
	}
	// need to build a method to fire upon a target
	fire(targetShip) {
		// set accuracy, firepower, health to a variable
		let accuracy = this.accuracy;
		let firepower = this.firepower;
		let health = targetShip.hull;
		// set condition for if attack ship hits using accuracy
		if (Math.random() <= accuracy) {
			// some way to determine how much damage is done to target ship
			// firepower - hull = damage
			targetShip.hull = (health - firepower);
			console.log(targetShip.name + " has been hit!");	
			console.log(targetShip.name + " has " + health + " health left.");
			if (targetShip === game.playerShip) {
				// if the alien shot at the player, it's the player's turn
				return game.playerAttack();
			} else if (targetShip === alienShipFactory.ships[0]) {
				// if the player shot at the alien, it's the alien's turn
				return game.alienAttack();
			}
		} else {
			console.log(this.name + " missed!");
			if (targetShip === game.playerShip) {
				// if the alien shot at the player, it's the player's turn
				return game.playerAttack();
			} else if (targetShip === alienShipFactory.ships[0]) {
				// if the player shot at the alien, it's the alien's turn
				return game.alienAttack();
			}
		}
	}
}

// build AlienShip class inherited from ship class

class AlienShip extends Ship {
	constructor(hull, firepower, accuracy, serialNumber) {
		//name should be something like alienship1,alienship2,etc.
		super (hull, firepower, accuracy);
		this.name = "Alien";
		this.serialNumber = serialNumber;
	}
}

// build alienShip factory to store array of alien ships

const alienShipFactory = {
	ships: [],
	amountShips: 0,
	generateAlienShip(){
		this.amountShips += 1;
		const newAlienShip = new AlienShip (getAlienHull(), getAlienFirepower(), getAlienAccuracy(), this.ships.length);
		this.ships.push(newAlienShip);
		return newAlienShip;
	},
	findAlienShip(index){
		return this.ships[index];
	}
}

// create of player ship class by inheriting ship class

class PlayerShip extends Ship {
	constructor (hull, firepower, accuracy) {
		super (hull, firepower, accuracy);
		this.name = "USS Assembly";
	}
}


// generate alien ships
// create a function to generate n ships

const makeAlienShips = (numShips) => {
	for (let i = 0; i < numShips; i++){
		alienShipFactory.generateAlienShip();
	}
}

const assembly = new PlayerShip (20, 5, 0.7);


let enemyFleet = 0;

const game = {
	alienShips: enemyFleet,
	attackingAlien: alienShipFactory.ships[0],
	playerShip: assembly,
	stats: {
		// eventually, display these stats in browser
		gamesWon: 0,
		gamesLost: 0,
		remainingAlienShips: alienShipFactory.ships.length,
		playerHealth: assembly.hull,
		attackingAlienHealth: 0
	},
	gameStart () {
		// start message
		console.log(assembly.name + " encounters a hostile alien armada!");
		// generate alien fleet
		makeAlienShips(getRandomNum(10));
		enemyFleet = alienShipFactory.ships;
		// assign attacking Alien
		this.attackingAlien = alienShipFactory.ships[0];
		// set attacking alien health
		this.attackingAlienHealth = alienShipFactory.ships[0].hull;
		// reset player health
		assembly.hull = 20;
		// first player attack
		this.playerAttack();
	},
	playerChoice () {
		// with buttons, the below code isn't necessary
		// but I'm keeping for posterity, and in case I want to go back
		// let gamePrompt = prompt("Do you wish to retreat (Yes or No)? There are " + alienShipFactory.ships.length + " alien ships remaining.");
		// gamePrompt;
		// if (gamePrompt === "Yes") {
		// 	return console.log("Game over.");
		// } else if (gamePrompt === "No") {
		// 	console.log("Another alien ship approaches!");
		// 	return this.playerAttack();
		// } else {
		// 	// if player doesn't respond with Yes or No
		// 	console.log("Please respond 'Yes' or 'No'");
		// 	return this.playerChoice();
		// }
	},
	// separate gameTurn method into playerAttack and alienAttack that can call each other
	playerAttack () {
		let target = this.attackingAlien;
		if (target.hull <= 0) {
			// if alien is destroyed
			console.log(target.name + " has been hit!");
			console.log(target.name + " has been destroyed.");
			// if destroyed, we will need to remove the first ship from that array
			alienShipFactory.ships.shift();
			// set condition for if no alien ships are left
			if (alienShipFactory.ships.length === 0) {
				// if all aliens are destroyed, end game
				return this.gameOver();
			}
			// bring back prompt
			// return this.playerChoice();
		} else {
			console.log(this.playerShip.name + " fires at the alien!");
			return this.playerShip.fire(target);
			// return this.alienAttack();
		}
	},
	alienAttack () {
		let target = assembly;

		if (target.hull <= 0) {
			// if player is destroyed, end game
			return this.gameOver();
		} else {
			console.log(this.attackingAlien.name + " fires at " + this.playerShip.name + "!");
			this.attackingAlien.fire(target);
		}
	},
	gameOver () {
		// set condition for if player loses
		if (this.playerShip.hull <= 0) {
			console.log("The " + this.playerShip.name + " has been destroyed. Game over.");
			// add 1 to total games lost
			this.stats.gamesLost += 1;
		} else {
			// set conditions for if player wins
			console.log("All alien enemies have been destroyed. " + this.playerShip.name + " wins!");
			this.stats.gamesWon += 1;
		}
	}
};

// BUTTONS

// rep with jQuery

// grab each button

// const pauseButton = $("#pause");
const fireButton = $("#fire-button");
const startButton = $("#start-game");
const retreatButton = $("#retreat");
const resetButton = $("#reset");
// const pauseButton = $("#pause");

// CREATE BUTTON FUNCTIONS

// set conditionals for buttons so they can only be 
// pressed the appropriate amount of times

$("#fire-button").click(function(){
	game.playerAttack();
});
$("#start-game").click(function(){
	game.gameStart();
});

$("#retreat").click(function(){
	console.log("The " + assembly.name + " surrenders to the alien armada. Game over.");
	game.stats.gamesLost += 1;
});
$("#reset").click(function(){
	makeAlienShips(getRandomNum(10));
	game.gameStart();
});
// $("#pause").click(function(){
// 	break;
// });
