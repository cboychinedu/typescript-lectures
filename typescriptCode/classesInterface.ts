interface Colorful {
    color: string; 
    getColor(): string;
}

enum Size {
    Small = "Small",
    Medium = "Medium",
    Large = "Large"
}

type Car = {
    name: string;
    size: Size;
    color: string;
}

class Bike implements Colorful {
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    getColor(): string {
        return `The color of the bike is ${this.color}`;
    }
}

const myBike = new Bike("red");
console.log(myBike.getColor());

