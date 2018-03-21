// define ship class to use to build every instance of player ship and alien ships
// all ships need hull (health), firepower (attack), accuracy (chance attack will hit)

// function to generate random number between 0 and specified param

// round Math.random() in below function to 2 decimal places

const getRandomNum = (max) => {
  return (Math.random() * Math.floor(max)).toFixed(2);
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
	// max = 2 / 10 = 0.2
	randomNum = getRandomNum(2) / 10;
	return randomNum + 0.4;
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
		// set accuracy to a variable
		let accuracy = this.accuracy;
		let firepower = this.firepower;
		let health = targetShip.hull;
		// set condition for if attack ship hits using accuracy
		if (Math.random() <= accuracy) {
			// some way to determine how much damage is done to target ship
			// firepower - hull = damage
			health = (health - firepower).toFixed(2);
			console.log(targetShip.name + " has been hit!");
			if (health <= 0) {
				console.log(targetShip.name + " has been destroyed.");
				// call another endOfTurn function?
				// deploy another alien ship or game over
				// introduce choice for player to either retreat or keep fighting
				// using a prompt
			}
		console.log(targetShip.name + " has " + health + " health left.");
		} else {
			console.log(this.name + " missed!");
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
// later could create a function to generate n ships

const alien1 = alienShipFactory.generateAlienShip();
const alien2 = alienShipFactory.generateAlienShip();
const alien3 = alienShipFactory.generateAlienShip();
const alien4 = alienShipFactory.generateAlienShip();
const alien5 = alienShipFactory.generateAlienShip();
const alien6 = alienShipFactory.generateAlienShip();

// generate player ship
const playerShip = new PlayerShip (20, 5, 0.7);

// console.log(alien1,alien2,alien3,alien4,alien5,alien6,playerShip);

// create function to take turn
// at the end of each turn, if I win, I should be able to choose to retreat or keep battling
// set conditions for game over if I am destroyed
// set conditions for if I win

