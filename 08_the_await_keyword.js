/**
 * ENG: The `await` keyword in JavaScript is used within async functions to pause the execution 
 * until a Promise is resolved. It allows asynchronous code to be written in a synchronous-like 
 * style, enhancing readability and maintainability. When 'await' is used before an expression 
 * that returns a Promise, the function will pause execution until the Promise is resolved or rejected. 
 * This enables the function to wait for asynchronous operations to complete without blocking the 
 * execution of other code.
 * 
 * PT: A palavra-chave `await` em JavaScript é usada dentro de funções assíncronas para pausar a execução 
 * até que uma Promessa seja resolvida. Isso permite que o código assíncrono seja escrito de forma semelhante 
 * a síncrona, melhorando a legibilidade e a manutenção. Quando 'await' é usado antes de uma expressão que 
 * retorna uma Promessa, a função pausará a execução até que a Promessa seja resolvida ou rejeitada. 
 * Isso permite que a função aguarde a conclusão de operações assíncronas sem bloquear a execução de 
 * outro código.
 */


function toppings_choice() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // ENG: Simulate a delay before resolving the promise.
            // PT: Simula um atraso antes de resolver a promessa.
            resolve(console.log("which topping would you love?"))
        }, 3000)
    })
}

async function kitchen() {
    // ENG: Print statements A, B, and C.
    // PT: Imprimir as declarações A, B e C.
    console.log("A")
    console.log("B")
    console.log("C")

    // ENG: Wait for the toppings choice asynchronously.
    // PT: Aguardar a escolha das coberturas de forma assíncrona.
    await toppings_choice()

    // ENG: Print statements D and E after toppings choice.
    // PT: Imprimir as declarações D e E após a escolha das coberturas.
    console.log("D")
    console.log("E")
}

// ENG: Trigger the kitchen function.
// PT: Acionar a função kitchen.
kitchen();

// ENG: Print statements for other tasks being done concurrently.
// PT: Imprimir declarações para outras tarefas sendo feitas simultaneamente.
console.log("doing the dishes")
console.log("cleaning the tables")
console.log("taking orders")
