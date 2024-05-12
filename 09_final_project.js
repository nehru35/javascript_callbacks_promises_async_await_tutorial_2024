/**
 * ENG: This script simulates a kitchen workflow using asynchronous functions and promises.
 * PT: Este script simula um fluxo de trabalho de cozinha usando funções assíncronas e promessas.
 */

// ENG: Object containing stocks of ingredients.
// PT: Objeto contendo os estoques de ingredientes.
let stocks = {
    fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
    liquid: ["Water", "Ice"],
    holder: ["Cone", "Cup", "Stick"],
    toppings: ["Chocolate", "Peanuts"]
};

// ENG: Variable to determine if the shop is open.
// PT: Variável para determinar se a loja está aberta.
let is_shop_open = true;

// ENG: Function to simulate time delay.
// PT: Função para simular atraso no tempo.
function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log("Shop is closed"));
        }
    });
}

// ENG: Async function representing the kitchen workflow.
// PT: Função assíncrona representando o fluxo de trabalho da cozinha.
async function kitchen() {
    try {
        // ENG: Select the first fruit after a delay of 2 seconds.
        // PT: Selecionar a primeira fruta após um atraso de 2 segundos.
        await time(2000);
        console.log(`${stocks.fruits[0]} was selected`);

        // ENG: Start production after a delay of 0 seconds.
        // PT: Iniciar a produção após um atraso de 0 segundos.
        await time(0);
        console.log("production has started");

        // ENG: Chop the fruit after a delay of 2 seconds.
        // PT: Picar a fruta após um atraso de 2 segundos.
        await time(2000);
        console.log("fruit has been chopped");

        // ENG: Add liquid after a delay of 1 second.
        // PT: Adicionar líquido após um atraso de 1 segundo.
        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

        // ENG: Start the machine after a delay of 1 second.
        // PT: Iniciar a máquina após um atraso de 1 segundo.
        await time(1000);
        console.log("start the machine");

        // ENG: Place ice cream on a holder after a delay of 2 seconds.
        // PT: Colocar sorvete em um suporte após um atraso de 2 segundos.
        await time(2000);
        console.log(`ice cream placed on ${stocks.holder[1]}`);

        // ENG: Add toppings after a delay of 3 seconds.
        // PT: Adicionar coberturas após um atraso de 3 segundos.
        await time(3000);
        console.log(`${stocks.toppings[0]} as toppings`);

        // ENG: Serve ice cream after a delay of 2 seconds.
        // PT: Servir sorvete após um atraso de 2 segundos.
        await time(2000);
        console.log("Serve Ice Cream");
    } catch (error) {
        // ENG: Handle customer leaving if the shop is closed.
        // PT: Lidar com o cliente saindo se a loja estiver fechada.
        console.log("Customer left");
    } finally {
        // ENG: Print message indicating the end of the day and shop closure.
        // PT: Imprimir mensagem indicando o fim do dia e o fechamento da loja.
        console.log("Day ended, the shop is closed!");
    }
}

// ENG: Call the kitchen function to start the workflow.
// PT: Chamar a função da cozinha para iniciar o fluxo de trabalho.
kitchen();
