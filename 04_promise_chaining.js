/**
 * ENG: Chaining in promises refers to the technique of chaining multiple `then()` function
 * calls in a sequence, where each `then()` call is executed after the completion of the previous one.
 * This allows you to organize and execute a series of asynchronous operations synchronously and 
 * sequentially, making the code more readable and easier to understand.
 * 
 * PT: Encadear promessas se refere à técnica de encadear múltiplas chamadas de função `then()`
 * em uma sequência, onde cada chamada `then()` é executada após a conclusão da anterior. 
 * Isso permite que você organize e execute uma série de operações assíncronas de forma síncrona 
 * e sequencial, tornando o código mais legível e mais fácil de entender.
 * 
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
      reject('Our shop is closed.')
    }
  })
}

// ENG: Order the first item (Step 1)
// PT: Pedir o primeiro item (Passo 1)
order(2000, () => console.log(`${stocks.fruits[0]} was selected`))

  // ENG: After the first item is ordered, start production (Step 2)
  // PT: Após o primeiro item ser pedido, começar a produção (Passo 2)
  .then(() => {
    return order(0, () => console.log('Production has started'))
  })

  // ENG: After production starts, chop the fruit (Step 3)
  // PT: Após a produção começar, picar a fruta (Passo 3)
  .then(() => {
    return order(2000, () => console.log("Fruit has been chopped"))
  })

  // ENG: After the fruit is chopped, add liquids (Step 4)
  // PT: Após a fruta ser picada, adicionar líquidos (Passo 4)
  .then(() => {
    return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
  })

  // ENG: After liquids are added, start the machine (Step 5)
  // PT: Após os líquidos serem adicionados, iniciar a máquina (Passo 5)
  .then(() => {
    return order(1000, () => console.log("Start the machine"))
  })

  // ENG: After the machine starts, place ice cream on holder (Step 6)
  // PT: Após a máquina iniciar, colocar sorvete no suporte (Passo 6)
  .then(() => {
    return order(2000, () => console.log(`Ice cream placed on ${stocks.holder[1]}`))
  })

  // ENG: After ice cream is placed, add toppings (Step 7)
  // PT: Após o sorvete ser colocado, adicionar coberturas (Passo 7)
  .then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`))
  })

  // ENG: After toppings are added, serve the ice cream (Step 8)
  // PT: Após as coberturas serem adicionadas, servir o sorvete (Passo 8)
  .then(() => {
    return order(2000, () => console.log("Serve Ice Cream"))
  })
