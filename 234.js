function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Only change code below this line
  
  for (let propertys in beagle) {
    if (beagle.hasOwnProperty(propertys)) {
      ownProps.push(propertys);
    } else {
      prototypeProps.push(propertys);
    }
  }