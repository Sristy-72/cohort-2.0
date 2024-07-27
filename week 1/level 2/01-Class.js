class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}
// A class definition includes a constructor method for initializing properties and other methods that define the behavior of the instances.
const dog = {
  name: "sheru",
  legcount: 4,
  speaks: "bark",
};

const cat={
  name:"mau",
  legcount:4,
  speaks:"meow"
}
//console.log("animal" + " " + dog["name"]);
//console.log("animal" +" "+cat.name)
function printstr(animal){
  console.log("animal" + " " + animal.name + " " + animal.legcount + " " + animal.speaks);
}
// console.log(printstr(dog));
// this will actually give us undefined because it in not returning anything
// instead just call it
//printstr(dog);
//printstr(cat);


// legcount,speak,name
class Animal1{
  constructor(name,legcount,speaks){
    this.name=name;
    this.legcount=legcount;
    this.speaks=speaks;
  }
  // static function are associated with the class itself
  static mytype(){
    console.log("animal")
  }
  // when we know that there will be one function that will be common in every animal 
  
  speak(){ // this function can be called on the object of the class not directlt on the class
    console.log("hi there" + " "+this.speaks)
  }
}
console.log(Animal1.mytype())
let dog1=new Animal1("sheru",4,"bark");// create object
dog1.speak();// call function on object
// console.log(dog1)



