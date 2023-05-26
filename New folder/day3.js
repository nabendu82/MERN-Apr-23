//Events : EventsListeners,

// 2 ways,




// function createGreets(){
//     console.log('Hi')
// }

// function createBye(){
//     console.log('Bye')
// }


//DOM - grabbing Element - 5 methods

//grabbing a single a element - id  - document.getElementById(');
// const btn = document.getElementById('btn');


//chnage content in a element: innerHTML,




// let a =10;
// a=11

//addEvenetListner()

// btn.addEventListener('click',function(){
//     const head = document.getElementById('head');
//     head.innerHTML = 'python'
    
// })


//Conditional Statements:

// if else else if switch



// let number = 5;


// if(number == 5){
//   console.log('hi')
// }else{
//     console.log('Bye')
// }

//chamging Css Proprties - element.style.color=''

const body = document.body;


const btn = document.getElementById('btn');

btn.addEventListener('click',function(){

let colorVal = document.getElementById('inp');
let color =colorVal.value;

if(color === 'red'){
    body.style.backgroundColor='red';
  }else if(color === 'yellow'){
      body.style.backgroundColor='yellow';
  }else if(color === 'green'){
      body.style.backgroundColor='green';
  }else{
    body.style.backgroundColor='black'
  }
  
})



//browser-> event -> js basic  -> dom -> browser




