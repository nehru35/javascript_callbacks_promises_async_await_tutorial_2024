/**
 * ENG: Promises provide a way to handle errors through the `catch()` method.
 * If an error occurs at any point in the promise chain, it will be caught by the `catch()` method
 * and appropriate error handling can be implemented.
 * 
 * PT: As promessas também fornecem uma maneira de lidar com erros através do método `catch()`.
 * Se ocorrer um erro em qualquer ponto da cadeia de promessas, ele será capturado pelo método `catch()`
 * e o tratamento de erro apropriado pode ser implementado.
*/

let stocks = {
  fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid: ["Water", "Ice"],
  holder: ["Cone", "Cup", "Stick"],
  toppings: ["Chocolate", "Peanuts"]
};

let is_shop_open = false;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
      if (is_shop_open) {
          setTimeout(() => {
              resolve(work())
          }, time)
      } else {
          // ENG: If the shop is closed, reject the promise with an error message.
          // PT: Se a loja estiver fechada, rejeite a promessa com uma mensagem de erro.
          reject('Our shop is closed.')
      }
  })
}

// step 1
order(2000,()=>console.log(`${stocks.fruits[0]} was selected`))

// step 2
.then(()=>{
return order(0,()=>console.log('Production has started'))
})

// step 3
.then(()=>{
return order(2000, ()=>console.log("Fruit has been chopped"))
})

// step 4
.then(()=>{
return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
})

// step 5
.then(()=>{
return order(1000, ()=>console.log("Start the machine"))
})

// step 6
.then(()=>{
return order(2000, ()=>console.log(`Ice cream placed on ${stocks.holder[1]}`))
})

// step 7
.then(()=>{
return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
})

// Step 8
.then(()=>{
return order(2000, ()=>console.log("Serve Ice Cream"))
})

// ENG: Catch any errors that occur during the promise chain.
// PT: Capture quaisquer erros que ocorram durante a cadeia de promessas.
.catch((error)=>{
console.log("Customer left", error)
})
