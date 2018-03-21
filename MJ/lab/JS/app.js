




class Ship {
	constructor(hull,firepower,accuracy){
		this.hull = hull;
		this.firepower= firepower;
		this.accuracy = accuracy;
	}
	hullDecrement(){

	}
	firePowerIncrement(){

	}
	shoot(){
		return Math.random();
	}
	


}

const ussAssembly = new Ship(20,5,.7);


const alien1 = new Ship(3,2,.6);

const alien2 = new Ship(3,2,.6);

const alien3 = new Ship(4,2,.7);

const alien4 = new Ship(5,4,.7);

const alien5 = new Ship(5,4,.8);

const alien6 = new Ship(6,4,.8);





const spaceBattleGame = {
	aliens:[alien1,alien2,alien3,alien4,alien5,alien6],

	currentAlienInBattle(){
		for(let i = 0; i < this.aliens.length; i ++){
			
			this.battle(this.aliens[i]);


		}
	},
	battle(theAlien){



		while(theAlien.hull > 0 && ussAssembly.hull > 0){

			if(ussAssembly.shoot() >= ussAssembly.accuracy){
				console.log('You hit the alien ship');
				theAlien.hull -= ussAssembly.firepower
				console.log(theAlien.hull);
				if(theAlien.hull > 0){
					if(theAlien.shoot() >= theAlien.accuracy){
						console.log('The Alien shot back and hit you');
						ussAssembly.hull -= theAlien.firepower;
					}
				}
				else{console.log("You killed the Alien");}
			}

			else if(theAlien.shoot() >= theAlien.accuracy){
				console.log('You missed the Alien and he hit you');
				ussAssembly.hull -= theAlien.firepower
				console.log(ussAssembly.hull);
				if(ussAssembly.hull >0){
					if(ussAssembly.shoot() >= ussAssembly.accuracy){
						console.log('You hit the Alien');
						theAlien.hull -= ussAssembly.firepower;
					}
				}
			}




			// if(ussAssembly.shoot() >= ussAssembly.accuracy){
			// 	console.log('You hit the alien ship!');
			// 	theAlien.hull -= ussAssembly.firepower;
			// 	console.log(theAlien.hull);
			// 	if(theAlien.hull <= 0){
			// 		//this.aliens.shift();
			// 		break();
			// 	}
			// 	else if(theAlien.shoot()>= theAlien.accuracy){
			// 	console.log("You've been hit!");
			// 	ussAssembly.hull -= theAlien.firepower;
			// 	console.log(ussAssembly.hull);
			// 	}
			// }
			
		}
	},
	

}









