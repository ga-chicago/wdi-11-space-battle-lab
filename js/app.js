console.log("Working");
$("document").ready(function(){

class AlienShip {
	constructor() {
	this.hull = Math.floor(Math.random() * (6 - 3) + 3);
	this.firePower = Math.floor(Math.random() * (4 - 2) + 2);
	this.accuracy = Math.random() * (.8 - .6) + .6;
	}
};

const alienShip1 = new AlienShip;
const alienShip2 = new AlienShip;
const alienShip3 = new AlienShip;
const alienShip4 = new AlienShip;
const alienShip5 = new AlienShip;
const alienShip6 = new AlienShip;

 const humanShip = {
	hull: 20,
	firePower: 5,
	accuracy: .7,
};

gameObject = {
	liveAlienShips: [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6],
	deadAlienShips: [],
	userIput: "",
	determineAlienHit() {
		if (Math.random() < this.liveAlienShips[0].accuracy) {
			humanShip.hull -= this.liveAlienShips[0].firePower;
			alert(`The Alien ship hit you for ${this.liveAlienShips[0].firePower}. Your hull integrity is at ${humanShip.hull}`);

		} else {
			console.log("miss");
		}
	},
	determineHumanHit() {
		if (Math.random() < humanShip.accuracy) {
			this.liveAlienShips[0].hull-= humanShip.firePower;
			alert("You've hit the alien ship for 5 damage!");
		} else {
			console.log("miss");
		}
	},
	fightOrFlight() {
		userInput = prompt("Victory! The USS ASSEMBLY has destroyed the alien ship! Would you like to retreat or fight next ship? Type retreat to quit!");
				return userInput;
	},
	nextRound() {
		if (userInput.toLowerCase() === "retreat" ) {
			return alert("Game Over Wimp!");		
		} else if (this.liveAlienShips.length === 0) {
			alert("Game Over");
		} else {
			this.deadAlienShips.push(this.liveAlienShips[0]);
			this.liveAlienShips.splice(0,1);
			this.combat();
		}

	},
	combat() {
		alert(`Get ready for SPACE COMBAT! THE USS ASSEMBLY HAS ${humanShip.hull} POINTS OF HULL INTEGRITY. WATCH OUT FOR LASERS!!!!!`)
		console.log(gameObject.deadAlienShips);
		console.log(gameObject.liveAlienShips);
		console.log(`The USS ASSEMBLY has ${humanShip.hull} hitpoints.`);
		console.log(`The alien ship has ${this.liveAlienShips[0].hull} hitpoints.`);
		while (this.liveAlienShips[0].hull > 0 && humanShip.hull > 0) {

			this.determineHumanHit();
			console.log(this.liveAlienShips[0].hull);
			if ( this.liveAlienShips[0].hull <= 0) {
				this.fightOrFlight();

			}
			this.determineAlienHit();
			console.log(humanShip.hull);
			  
			}
			this.nextRound();
			this.gameOver();
		},	

};

gameObject.combat();

})






