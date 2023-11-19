class Circle {
    constructor(radius) {
      this._radius = radius;
    }
  
    // Getter method for radius
    get radius() {
      return this._radius;
    }
  
    // Setter method for radius
    set radius(value) {
      if (value <= 0) {
        throw new Error("Radius must be a positive number");
      }
      this._radius = value;
    }
  
    // Getter method for diameter
    get diameter() {
      return this._radius * 2;
    }
  
    // Setter method for diameter
    set diameter(value) {
      this._radius = value / 2;
    }
  
    // Getter method for circumference
    get circumference() {
      return 2 * Math.PI * this._radius;
    }
  
    // Setter method for circumference
    set circumference(value) {
      this._radius = value / (2 * Math.PI);
    }
  
    // Getter method for area
    get area() {
      return Math.PI * this._radius ** 2;
    }
  
    // Setter method for area
    set area(value) {
      this._radius = Math.sqrt(value / Math.PI);
    }
  }
  
  // Example usage
  const myCircle = new Circle(5);
  console.log(myCircle.diameter); // Output: 10
  console.log(myCircle.circumference); // Output: 31.41592653589793
  console.log(myCircle.area); // Output: 78.53981633974483
  
  // Updating properties using setters
  myCircle.radius = 8;
  console.log(myCircle.diameter); // Output: 16
  