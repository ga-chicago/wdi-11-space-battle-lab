console.log("this is a space battle game.");

//six alien ships that attack one at a time
//wait to see outcome

//game round:
// You attack the first alien ship
// If the ship survives, it attacks you
// If you survive, you attack the ship again
// If it survives, it attacks you again
// Etc.

// If you destroy the ship, you have the option to attack the next ship
// or to retreat
// If you retreat, the game is over,
//perhaps leaving the game open for further developments or options.

// You win the game if you destroy all of the aliens.
// You lose the game if you are destroyed.

//ship properties (meaning it is an object)
// hull is the same as hitpoints.
//If hull reaches 0 or less, the ship is destroyed.
//attack method()

// firepower is the amount of damage done
//to the hull of the target with a successful hit.

// accuracy is the chance between 0 and 1 that the ship will hit its target.

//2 classes of ships --> USS Assembly & alien ships (6) which have "ranged properties"
//stored as an array??

class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  greeting(){
  console.log("this is an attack!");
  }
}

// created a variable to randomly generate alien firepower, hull, etc to new alien ships.
const alienHullArr = [3, 4, 5, 6];
alienHull = alienHullArr[Math.floor(Math.random() * alienHullArr.length)];
//loop through array, then use Math.random to pull out random number
const alienfirepowerArr = [2, 3, 4];
alienFirepower = alienfirepowerArr[Math.floor(Math.random() * alienfirepowerArr.length)];

const alienAccuracyArr = [.6, .7, .8];
alienAccuracy = alienAccuracyArr[Math.floor(Math.random() * alienAccuracyArr.length)]

const ussAssembly = new Ship("USS Assembly", 20, 5, .7)

const alienShip1 = new Ship("Alien Ship 1", alienHull, alienFirepower, alienAccuracy)
