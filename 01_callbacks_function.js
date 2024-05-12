/**
 * ENG: A callback is a function passed as an argument to another function and 
 * is executed later, typically after the completion of an asynchronous operation.
 *  
 * PT: callback é uma função que é passada como argumento para outra função e 
 * é executada mais tarde, geralmente após a conclusão de uma operação assíncrona.
*/


// ENG: Definition of an object called 'stocks' containing different types of ingredients
// PT: Definição de um objeto chamado 'stocks' contendo diferentes tipos de ingredientes
let stocks = {
    fruits: ["Strawberry", "Grapes", "Banana", "Apple"], // Types of fruits
    liquid: ["Water", "Ice"], // Liquids
    holder: ["Cone", "Cup", "Stick"], // Holders
    toppings: ["Chocolate", "Peanuts"] // Toppings
};

// ENG: Definition of a function 'order' simulating an order of an item
// ENG: Receives the fruit name and a production function as arguments

// PT: Definição de uma função 'order' que simula um pedido de um item
// PT: Recebe o nome da fruta e uma função de produção como argumentos
let order = (fruit_name, call_production) => {

    // ENG: Simulates a 2-second wait before selecting the fruit
    // PT: Simula um tempo de espera de 2 segundos antes de selecionar a fruta
    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} was selected!`);
    }, 2000);

    call_production(); // ENG: Calls the production function // PT: Chama a função de produção
}

// ENG: Definition of a production function simulating the start of production
// PT: Definição de uma função de produção que simula o início da produção
let production = () => {
    // ENG: Simulates a 0-second wait before starting production
    // PT: Simula um tempo de espera de 0 segundos antes de iniciar a produção
    setTimeout(() => {
        console.log("Production has started!");
    }, 0);
}

// ENG: Calls the 'order' function passing the index of the fruit (0 for Strawberry) and the production function
// PT: Chama a função 'order' passando o índice da fruta (0 para Strawberry) e a função de produção
order(0, production);
