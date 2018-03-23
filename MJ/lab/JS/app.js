
	
// class for similar alien ship objects
class AlienShip {
	constructor(){
		// to generate random hull at a range between 3-6
		this.hull = Math.floor((Math.random() * 4) + 3)
		//to generate random firepower at a range between 2-4
		this.firepower = Math.floor((Math.random() * 3)+2)
		//GENERATE RANGE FROM .2-.8
		this.accuracy = (Math.random() * .2)+.6
	}
}

//factory to make alien ships
class AlienShipFactory{
	constructor(){
		//this array will hold alien ship objects
		this.alienShipArray = [];
	}
	//this will create alien ships if called
	generateShip(){
		const newShip = new AlienShip();

		this.alienShipArray.push(newShip);
	}
}
//instantiate alien object
//alien ready to generate
const alien = new AlienShipFactory();




//Object for game in general
const spaceBattleGame = {

	//USS Ship Object
	ussAssemblyShip:{
		hull: 20,
		firepower: 5,
		accuracy:.7
	},


	//how many aliens to battle based on user input
	howManyAliens(parameter){
		//generate aliens using factory
		for(let i = 0; i < parameter; i ++){
			alien.generateShip();
		}
		//display alien ships
		console.log(aliens.alienShipArray);

	},



	ussAttack(){
		//prompt user to fire laser or retreat
		let fireRetreat = window.prompt('Fire Missile? (Y) or Retreat? (R)');

		if(fireRetreat === 'Y'|| fireRetreat ==='y'){
			//Continue Battle
			//USS Fires Missile At Alien
			//If USS Hits Alien Ship
			if(Math.random() > this.ussAssemblyShip.accuracy){
				//decrement alien health if hit
				alien.alienShipArray[0].hull -= this.ussAssemblyShip.firepower;
				//if alien has no health remaining, remove from array, if alien is alive, then alien attacks
				(alien.alienShipArray[0].hull <= 0) ? alienDecrement() : alienAttack()
			}

		}

		else if (fireRetreat === 'R' || fireRetreat === 'r'){
			gameOver()
		}
		

	}
	alienAttack(){
		//Alien attacks
		//If Alien Hits Target
		if(Math.random() > alien.alienShipArray[0].accuracy){
			//decrement health of USS
			this.ussAssemblyShip.hull -= alienShipArray[0].firepower;
			//If USS is Alive, Uss Attacks, Else Game Over
			(this.ussAssemblyShip.hull <= 0) ? gameOver() : ussAttack()
		}

	}
	alienDecrement(){
		//Remove Dead Alien From Array
		alien.alienShipArray.splice(0,1);

		console.log('You Killed An Alien!');
		//Attack Next Alien
		ussAttack()

	}
	
	gameOver(){

	}
}






// class Ship {
// 	constructor(hull,firepower,accuracy){
// 		this.hull = hull;
// 		this.firepower= firepower;
// 		this.accuracy = accuracy;
// 	}
	
// 	shoot(){
// 		return Math.random();
// 	}
	


// }

// const ussAssembly = new Ship(20,5,.7);


// const alien1= new Ship(Math.floor(Math.random()*6),Math.floor(Math.random()*4),.6);

// const alien2 = new Ship(3,2,.6);

// const alien3 = new Ship(4,2,.7);

// const alien4 = new Ship(5,4,.7);

// const alien5 = new Ship(5,4,.8);

// const alien6 = new Ship(6,4,.8);





// const spaceBattleGame = {
// 	aliens:[alien1,alien2,alien3,alien4,alien5,alien6],
// 	currentAlienInBattle(){
// 		for(let i = 0; i < this.aliens.length; i ++){
			
// 			let doContinue = prompt('Do you want to continue?"Yes" to continue, "No" to retreat.');

			
// 			if(doContinue !== 'Yes' || ussAssembly.hull <= 0){
// 				console.log('Game Over!',ussAssembly);
			
// 				break;
// 			}
			
				
// 			else{this.battle(this.aliens[i],[i]);}


// 		}
		
		
// 	},
// 	battle(theAlien,i){



// 		while(theAlien.hull > 0 && ussAssembly.hull > 0){

// 			if(ussAssembly.shoot() >= ussAssembly.accuracy){
// 				console.log('You hit alien number '+ i + ' ship');
// 				theAlien.hull -= ussAssembly.firepower
// 				console.log('Alien number ' + i + ' hull: ' + theAlien.hull);
// 				if(theAlien.hull > 0){
// 					if(theAlien.shoot() >= theAlien.accuracy){
// 						console.log('Alien number '+i+' shot back and hit you');
// 						ussAssembly.hull -= theAlien.firepower;
// 					}
// 					else{console.log('Alien number '+i+' missed');}
// 				}
// 				else{console.log("You killed Alien number "+i+'. ');}
// 			}

// 			else if(theAlien.shoot() >= theAlien.accuracy){
				
// 				console.log('You missed Alien number '+i+' and he hit you');
				
// 				ussAssembly.hull -= theAlien.firepower
				
// 				console.log(ussAssembly.hull);
				
// 				if(ussAssembly.hull >0){
				
// 					if(ussAssembly.shoot() >= ussAssembly.accuracy){
				
// 						console.log('You fired back and hit alien number '+ i);
				
// 						theAlien.hull -= ussAssembly.firepower;
				
// 					}
				
// 					else{console.log('You missed again');}
// 				}	
			
// 			}
		
// 		}

// 		if(this.aliens[this.aliens.length-1].hull <= 0 ){
// 			console.log('Congrats! You killed all the aliens',ussAssembly);
// 		}
// 		else if(ussAssembly.hull <=0 ){console.log("You lost!",ussAssembly);}			


// 	}
	

// }









