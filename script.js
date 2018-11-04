class Rectangle {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    calculateArea(){
        return this.length * this.breadth;
    }
};
const Rectangle1 = new Rectangle(20, 40);
console.log(`The area of Rectangle is ${Rectangle1.calculateArea()}`);