


function Person(firstname, lastname, age, phone){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age; 
    this.phone = phone;
}


Person.prototype.sayName = function(){
    console.log("wat is eingenlijk die this hier", this); 
    console.log("hello I am " + this.firstname);
}


let JohnPerson = new Person("john", "Gorter", 43, "0612345678");
let CorsPerson = new Person("Cors", "Gorter", 43, "0612345678");

JohnPerson.sayName = function(){
    console.log("Hi I am not .");
    this.__proto__.sayName.call(this);    // sayname(this.__proto__)

}

JohnPerson.sayName();  


console.log("hello i am "+ this.age + " years old");









?:




