//classes how:


// object:

//factory function:

//contstructor:




//why object:


// procedural way 


// let a = 10;


// // let b = 20;



// // const add=(a,b)=>a+b

// // console.log(add(a,b))


// //structure way objects:


// // let firstEmplpy= 'nadebdu';
// // let firstSalary = 900000;


// // function details(a,b){
// //     return a+b
// // }

// // console.log(details(firstEmplpy,firstSalary))



// // let secondEmploye= 'Hari';
// // let secondSalary = 69399;


// // function details(a,b){
// //     return a+b
// // }

// // console.log(details(secondEmploye,secondSalary))

// //propert key is repeasted, funtion repeated: Memory problem
// const Emplyee1={
//    name:'Sabri',
//    age:67,

  
//     details: function(){
//     return this.name
//    }
// }



// const Emplyee2={
//     name:'Hari',
//     age:67,
//      details: function (){
//      return this.name
//     }
//  }

 
// const Emplyee3={
//     name:'Bipus',
//     age:67,

//      details: function (){
//      return this.name
//     }
//  }




// console.log(Emplyee3.details)
// console.log(Emplyee2.details)
// console.log(Emplyee1.details)



//factory fucntion:


//sytax

// function factory(name,age){

//     return {
//         name:name,
//         age:age,

//         details:function(){
//             return this.name
//         }
//     }
// }


// const person1 =factory('Hari',67)
// const person2 =factory('Siva',67)


// console.log(person2)
// console.log(person1)



// constructor funtion:
// let b = 'l';

// console.log(b)
// let a =new String('hi');

// console.log(


// function  Person(name,age){
//   this.name = name;
//   this.age=age;
// }

// Person.prototype.details =function(){
//    return  this.name
// }

// const person1 =new Person('Hari','age');
// const person2 =new Person('Siva','age');



// console.log(person1.details())
// console.log(person2)


// console.log(person2.details())


// /class - syntaix sugar: - protype with styntaic 


//2things - repated , memory 

class Person {
  constructor(name,age){
    this.name=name;
    this.age=age

  }
  
   details(){
    return this.name
  }

  

}




//ingertance

class Emplyee extends Person{
  constructor(name,age,exp){
       super(name,age)
       this.exp = exp
  }

  greet(){
    return this.name;
  }

}


const person1 = new Emplyee('Siva',34,6)

console.log(person1.details())

