function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
    function Baby(name, age, favoriteToy) {
      Person.call(this, name, age);
    this.favoriteToy = favoriteToy;
  }
  
  Baby.prototype.play = function() {
    return "Playing with " + this.favoriteToy;
  };
  
  let myBaby = new Baby("Alice", 1, "teddy bear");
  console.log(myBaby.name); 
  console.log(myBaby.age); 
  console.log(myBaby.favoriteToy); 
  console.log(myBaby.play()); 