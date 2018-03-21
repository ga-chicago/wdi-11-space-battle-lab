console.log("We are about to have a space battle!");

const hullParam = [3, 4, 5, 6];
const fireParam = [2, 3, 4];
const accParam = [.6, .7, .8];

class Player {
	constructor(name, hull, firepower, accuracy){
		this.name = name;
		this.hull = hull;
		this.firepower = firepower;
		this.accuracy = accuracy;
	}
}

//create 'USS Assembly' with fixed values for hull, firepower, and accuracy. 
const ussAssembly = new Player ('USS Assembly', 20, 5, .7);
console.log(ussAssembly);

//create Alien Ship with random values for hull, firepower, and accuracy.
const alienShip1 = new Player ('Alien Ship 1', 10 , accParam[Math.floor(Math.random() * accParam.length)]);
console.log(alienShip1);

class SpaceBattle {
	constructor(ussAssembly, alienShip){
		this.ussAssembly = ussAssembly;
		this.alienShip = alienShip;
	}
	attack(){
	if(this.ussAssembly.hull > 0 && this.alienShip.hull >0){
	let cont = true; 
		if (Math.random() < this.ussAssembly.accuracy) {
			console.log('You hit the alien ship!');
			this.alienShip.hull = this.alienShip.hull - this.ussAssembly.firepower;
			if (this.alienShip.hull > 0) {
				console.log('Alien Ship still intact. Attack again?');
				cont = prompt("Continue? 'true' (yes) or 'false' (no)?");
				} else {
					console.log('Alien ship destroyed!');
				}
			} else {
				console.log('You missed the alien ship!');
			}
		} else {
			console.log('Alien ship destroyed.')
		} 
	} 
};

const game1 = new SpaceBattle(ussAssembly, alienShip1);