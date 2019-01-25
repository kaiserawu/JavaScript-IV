/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
    === GameObject ===
    * createdAt
    * dimensions (These represent the character's size in the video game)
    * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
function GameObject(obj) {
    this.createdAt = obj.createdAt;
    this.dimensions = obj.dimensions;
}

GameObject.prototype.destroy = function() {
    return `${this.name} was removed from the game.`;
};

/*
    === CharacterStats ===
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(obj) {
    GameObject.call(this, obj);

    this.healthPoints = obj.healthPoints;
    this.name = obj.name;
}


CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.loseHealth = function(num) {
    this.healthPoints -= num;
    console.log(this.takeDamage());
    console.log(`${this.name} has ${this.healthPoints} health left!`);
    if (this.healthPoints <= 0) {
        console.log(this.destroy());
    }
}
CharacterStats.prototype.takeDamage = function() {
    return `${this.name} took damage.`;

}

/*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
*/
function Humanoid(obj) {
    CharacterStats.call(this, obj);

    this.team = obj.team;
    this.weapons = obj.weapons;
    this.language = obj.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
    return `${this.name} offers a greeting in ${this.language}.`;
}

/*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!


function Hero(obj) {
    Humanoid.call(this, obj);

    this.smiteDamage = obj.smiteDamage;
}

Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.smite = function(target) {
    console.log(`${this.name} smites ${target.name}!`)
    if (target.healthPoints > 0) {
        target.loseHealth(this.smiteDamage);
    } else {
        console.log(`${this.name}, stop attacking! They're already dead!`);
    }
};

function Villain(obj) {
    Humanoid.call(this, obj);

    this.decayDamage = obj.decayDamage;
}

Villain.prototype = Object.create(Humanoid.prototype);
Villain.prototype.decay = function(target) {
    console.log(`${this.name} casts Decay on ${target.name}!`)
    for (let i = 0; i < 3; i++) {
        if (target.healthPoints > 0) {
            target.loseHealth(this.decayDamage);
        } else {
            console.log(`${this.name}, stop attacking! They're already dead!`);
        }
    }
};


const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 3,
        width: 3,
        height: 3,
    },
    healthPoints: 15,
    name: 'Mr. Hero',
    team: 'The Good Guys',
    weapons: [
        'One Huge Glowy Sword'
    ],
    language: 'Common Tongue',
    smiteDamage: 5,
});

const villain = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 3,
        width: 3,
        height: 3,
    },
    healthPoints: 13,
    name: 'Evil Dude',
    team: 'The Bad Guys',
    weapons: [
        'Staff of Evily Evilness'
    ],
    language: 'Spooky Common Tongue',
    decayDamage: 2,
});

console.log(hero.greet());
console.log(villain.greet());
hero.smite(villain);
villain.decay(hero);
hero.smite(villain);
villain.decay(hero);
villain.decay(hero);