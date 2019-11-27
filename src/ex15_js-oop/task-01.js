class Sweet {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
        this.taste = this.calculateTaste();
    }

    getWeight() {
        return this.weight;
    }

    calculateTaste() {
        return 10;
    }
}

class Candy extends Sweet {
    constructor(name, weight, flavor) {
        super(name, weight);
        this.flavor = flavor;
        super.taste = this.calculateTaste();
    }

    calculateTaste() {
        let additionalTastePoints;
        switch (this.flavor) {
            case "chocolate":
                additionalTastePoints = 4;
                break;
            case "vanilla":
                additionalTastePoints = 3;
                break;
            case "strawberry":
                additionalTastePoints = 2;
                break;
            default:
                additionalTastePoints = 1;
        }
        return super.calculateTaste() + additionalTastePoints * 2;
    }
}

class ChocolateFigure extends Sweet {
    constructor(name, weight, chocolateType) {
        super(name, weight);
        this.chocolateType = chocolateType;
        super.taste = this.calculateTaste(); 
    }

    calculateTaste() {
        let additionalTastePoints;
        switch (this.chocolateType) {
          case "milk":
            additionalTastePoints = 5;
            break;
          case "dark":
            additionalTastePoints = 3;
            break;
          case "white":
            additionalTastePoints = 2;
            break;
          default:
            additionalTastePoints = 1;
        }
        return super.calculateTaste() + additionalTastePoints * 3;
    }
}

class Marshmallow extends Sweet {
    constructor(name, weight, isCoveredWithChocolate) {
        super(name, weight);
        this.isCoveredWithChocolate = isCoveredWithChocolate;
        super.taste = this.calculateTaste(); 
    }

    calculateTaste() {
        let additionalTastePoints = 3;
        if (this.isCoveredWithChocolate) {
            additionalTastePoints *=2;
        }
        return super.calculateTaste() + additionalTastePoints;
    }
}

class Gift {
    constructor(sweets) {
        this.sweets = sweets;
    }

    calculateWeight() {
        let giftWeight = 0;
        this.sweets.forEach(function(sweet) {
            giftWeight += sweet.weight;
        });
        return giftWeight;
    }

    sortTasteSweets() {
        this.sweets.sort((a, b) => a.taste > b.taste ? 1 : -1);
    }

    findSweet(sweetName) {
        let sweetInfo = "";
        let isSweetFound = false;
        for (let i = 0; i < this.sweets.length; i++) {
                if (this.sweets[i].name === sweetName) {
                    for (let key in this.sweets[i]) { 
                        if (key in this.sweets[i]) {
                        sweetInfo += key + ": " + this.sweets[i][key] + "\n";    
                        }
                    }
                    isSweetFound = true;
                    break;
                }
                
        }
        if (!isSweetFound) {
            sweetInfo = "This sweet is not in the gift";
        }      
        console.log(sweetInfo); 
    }
}

const moonChunk = new Candy("moon chunk", 97, "cheese");
const lickieLoo = new Candy("lickie loo", 53, "vanilla");
const koffeeKandy = new Candy("koffee kandy", 41, "chocolate");
const kokoKringle = new ChocolateFigure("koko kringle", 103, "milk");
const cowAMel = new Marshmallow("cow a mel", 45, true);

const gift = new Gift([moonChunk, lickieLoo, koffeeKandy, kokoKringle, cowAMel]);
console.log(gift.calculateWeight());
gift.sortTasteSweets();
gift.findSweet("koko kringle");