/**
 * ENG: Callback hell refers to the situation where multiple nested callbacks 
 * make the code difficult to understand and maintain due to its deeply nested and complex structure.
 *  
 * PT: Callback hell se refere à situação onde múltiplos callbacks aninhados 
 * tornam o código difícil de entender e manter devido à sua estrutura profundamente aninhada e complexa.
*/

// ENG: Object containing different types of ingredients
// PT: Objeto contendo diferentes tipos de ingredientes
let stocks = {
    fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
    liquid: ["Water", "Ice"],
    holder: ["Cone", "Cup", "Stick"],
    toppings: ["Chocolate", "Peanuts"]
};

// ENG: Simulates an order of an item
// PT: Simula um pedido de um item
let order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} was selected!`);
        call_production();
    }, 2000);
}

// ENG: Simulates the production process
// PT: Simula o processo de produção
let production = () => {
    setTimeout(() => {
        console.log("Production has started!");
    }, 0);

    setTimeout(() => {
        console.log("The fruit has been chopped");

        setTimeout(() => {
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

            setTimeout(() => {
                console.log("The machine was started");

                setTimeout(() => {
                    console.log(`Ice cream was placed on ${stocks.holder[0]}`);

                    setTimeout(() => {
                        console.log(`${stocks.toppings[0]} was added as toppings.`);

                        setTimeout(() => {
                            console.log("Serve ice cream");
                        }, 2000);
                    }, 3000);
                }, 2000);
            }, 1000);
        }, 1000);
    }, 2000);
}

// ENG: Calls the 'order' function passing the index of the fruit (0 for Strawberry) and the production function
// PT: Chama a função 'order' passando o índice da fruta (0 para Strawberry) e a função de produção
order(0, production);
