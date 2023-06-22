

// function creator(data,callback){
//     // console.log(arguments)
//    let data1 = 'hi' //
//    return data(data1)
    
// }


// function displayer(data){
//     //dependebt -data
//     // display - UI
//     console.log('greet '+ data)
// }


// creator(displayer,1)

//callbacks - passing a funcitona a srugument to anither funtion


// addEventListener('',function(){

// })

//producing/ - time consuming code


//consuming code/ - depenetenr code



//function

//prodcuine
// const mypromise = new Promise((resolve,reject)=>{
//     //error handling;
//    const data = fetch('https://fakestoreapi.com/products');

   
// // throw error
//    resolve(data)

// })


// //consuming
// mypromise
// .then(
// (res)=>res.json(),
// ()=>console.log('error')
// ) //100;
// .then((result)=>
//  result.forEach(function(value){
//     console.log(value.title)
//  })
// )


// async - try catch;

function displayUI(items){
  const conatiner = document.querySelector('#container')
   
 items.forEach((item) => {
      const {title, image ,price}=item;
  

      const newTitle = title.slice(0,20)
      
conatiner.innerHTML +=
`
<div class='inner-cart'>
<h1>${newTitle}</h1>
<img src=${image} alt='img'>
<h5>${price}</h5>
<button>Buy Now</button>
</div>
`
 });

  
}





const fetchData =async function(){

   try{
      const data =await fetch('https://fakestoreapi.com/products')
      const res = await data.json();
     
      displayUI(res)
      console.log(res)
   }catch{
    console.log('I am facing error')
   }
  
}

fetchData()



// fetch('https://fakestoreapi.com/products/categories')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

// console.log('10')


//fucntion

// try{
//     fetch('https://fakestoreapi.com/products/1')
//     .then(res=>res.json())
//     .then(json=>console.log(json))
// }catch{

// }

