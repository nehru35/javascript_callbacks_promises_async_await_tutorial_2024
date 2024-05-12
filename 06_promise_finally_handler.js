/**
 * ENG: The `finally` handler in promises is a method that is called regardless of whether the 
 * promise is fulfilled or rejected. It allows you to execute cleanup code or perform actions 
 * that need to be done regardless of the outcome of the promise.
 * 
 * PT: O handler `finally` em promessas é um método que é chamado independentemente se a 
 * promessa for cumprida ou rejeitada. Isso permite que você execute código de limpeza ou 
 * realize ações que precisam ser feitas independentemente do resultado da promessa.
 */


let stocks = {
  fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid: ["Water", "Ice"],
  holder: ["Cone", "Cup", "Stick"],
  toppings: ["Chocolate", "Peanuts"]
};

let is_shop_open = true;

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
// ENG: Order the first item and wait for 2000 milliseconds
// PT: Pedir o primeiro item e aguardar 2000 milissegundos
order(2000, () => console.log(`${stocks.fruits[0]} was selected`))

// step 2
// ENG: After the first item is ordered, start production immediately
// PT: Após o primeiro item ser pedido, começar a produção imediatamente
.then(() => {
  return order(0, () => console.log('Production has started'))
})

// step 3
// ENG: After production starts, chop the fruit
// PT: Após a produção começar, picar a fruta
.then(() => {
  return order(2000, () => console.log("Fruit has been chopped"))
})

// step 4
// ENG: After the fruit is chopped, add liquids
// PT: Após a fruta ser picada, adicionar líquidos
.then(() => {
  return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
})

// step 5
// ENG: After liquids are added, start the machine
// PT: Após os líquidos serem adicionados, iniciar a máquina
.then(() => {
  return order(1000, () => console.log("Start the machine"))
})

// step 6
// ENG: After the machine starts, place ice cream on holder
// PT: Após a máquina iniciar, colocar sorvete no suporte
.then(() => {
  return order(2000, () => console.log(`Ice cream placed on ${stocks.holder[1]}`))
})

// step 7
// ENG: After ice cream is placed, add toppings
// PT: Após o sorvete ser colocado, adicionar coberturas
.then(() => {
  return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`))
})

// Step 8
// ENG: After toppings are added, serve the ice cream
// PT: Após as coberturas serem adicionadas, servir o sorvete
.then(() => {
  return order(2000, () => console.log("Serve Ice Cream"))
})

// ENG: Catch any errors that occur during the promise chain.
// PT: Capturar quaisquer erros que ocorram durante a cadeia de promessas.
.catch((error) => {
  console.log("Customer left", error)
})

// ENG: Execute this block of code regardless of whether the promises are fulfilled or rejected.
// PT: Execute este bloco de código independentemente se as promessas forem cumpridas ou rejeitadas.
.finally(() => {
  console.log('Day ended, shop is closed!');
})
