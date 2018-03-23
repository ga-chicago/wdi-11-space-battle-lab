
	
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
		this.alienShipArray = [];
	}
	generateShip(){
		const newShip = new AlienShip();

		this.alienShipArray.push(newShip);
	}
}

const alien = new AlienShipFactory();

alien.generateShip();
alien.generateShip();
alien.generateShip();
alien.generateShip();
alien.generateShip();
alien.generateShip();





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









