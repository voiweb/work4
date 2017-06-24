let Person = require('./person')
// Write your code here
module.exports = Student(name,age,klass){
 this.klass = klass;
 Student.prototype =  new Person;
 this.introduce =  function(){
   return "My name is Tom. I am 21 years old. I am a Student. I am at Class 2.";
 }
}
