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
const alienShip1 = new Player ('Alien Ship 1', hullParam[Math.floor(Math.random() * hullParam.length)], fireParam[Math.floor(Math.random() * fireParam.length)], accParam[Math.floor(Math.random() * accParam.length)]);console.log(alienShip1);

class SpaceBattle {
	constructor(ussAssembly, alienShip){
		this.ussAssembly = ussAssembly;
		this.alienShip = alienShip;
	}
	ussAttack(){
	if(this.alienShip.hull >0){
	console.log("USS ASSEMBLY - ATTACK!")
	//let cont = true; 
		if (Math.random() < this.ussAssembly.accuracy) {
			this.alienShip.hull = this.alienShip.hull - this.ussAssembly.firepower;
			console.log("You hit the alien ship! The alien ship's hull is " + this.alienShip.hull + '.');
			if (this.alienShip.hull > 0) {
				// console.log('Attn: USS Assembly - Prepare for incoming attack!');
				// game1.alienAttack();
				let cont = prompt("Retreat? 'Yes' or 'No'");
				if (cont == 'No'){
					console.log('Attn: USS Assembly - Prepare for incoming attack!');
					game1.ussAttack();
				} else {
					console.log("USS Assembly is retreating! GAMEOVER.");
				}
				} else {
					console.log('Alien ship destroyed!');
					console.log('GAMEOVER');
				}
			} else {
				console.log("You missed the alien ship! The alien ship's hull is " + this.alienShip.hull + '.');
				console.log('Attn: USS Assembly - Prepare for incoming attack!');
				game1.alienAttack();
			}
		} else {
			console.log('Alien ship has been destroyed.')
			console.log('GAMEOVER');
		} 
	} 
	alienAttack(){
	console.log("ALIENS - ATTACK!")
	if(this.ussAssembly.hull > 0){
		if (Math.random() < this.alienShip.accuracy) {
			this.ussAssembly.hull = this.ussAssembly.hull - this.alienShip.firepower;
			console.log("You have been hit! Your ship's hull is " + this.ussAssembly.hull + '.');
			if (this.ussAssembly.hull > 0) {
				console.log("Your ship is still intact! Your ship's hull is " + this.ussAssembly.hull + '.');
				game1.ussAttack();
				} else {
					console.log('Your ship was destroyed!');
					console.log('GAMEOVER');
				}
			} else {
				console.log("The aliens missed you! Your ship's hull is " + this.ussAssembly.hull + '.');
				game1.ussAttack();
			}
		} else {
			console.log('USS Assembly destroyed.');
			console.log('GAMEOVER');
		} 

	}
};

const game1 = new SpaceBattle(ussAssembly, alienShip1);