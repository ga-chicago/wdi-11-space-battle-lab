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
const alienShip1 = new Player ('Alien Ship 1', hullParam[Math.floor(Math.random() * hullParam.length)], fireParam[Math.floor(Math.random() * fireParam.length)], accParam[Math.floor(Math.random() * accParam.length)]);
console.log(alienShip1);