function Person(name, age) {
    this.name = name
    this.age = age
    this.stomach = []

}

Person.prototype.eat = function(...someFood){
    if(this.stomach.length < 10) {
        if(someFood.length + this.stomach.length > 10 ) {
            someFood.length = 10 - this.stomach.length
        }
        this.stomach.push(...someFood)
    } 
}

Person.prototype.poop = function(){
    this.stomach = [] 
}

Person.prototype.toString = function(){
    return `${this.name},${this.age}` 
}

person1 = new Person("Ashot", 50) 
person2 = new Person("Mxo" , 3)

person2.eat("heap")
console.log(person2)
person1.eat("tolma", "chicken", "beer", "a", "s", "e", "p", "d","j")
person1.eat("chocolate") 
person1.eat("shaurma") // impossible to add, the shurma is 11-th
console.log(person1)
person1.poop() 
console.log(person1)
console.log(person2.toString())