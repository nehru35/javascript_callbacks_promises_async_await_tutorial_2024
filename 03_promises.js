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

// ENG: The 'order' function simulates placing an order.
// ENG: It returns a promise that resolves if the shop is open and rejects if the shop is closed.
// ENG: The 'time' argument represents the time it takes for the order to be processed,
// ENG: and the 'work' argument represents the task to be executed after the order is processed.

// PT: A função 'order' simula fazer um pedido.
// PT: Ela retorna uma promessa que resolve se a loja estiver aberta e rejeita se a loja estiver fechada.
// PT: O argumento 'time' representa o tempo que leva para o pedido ser processado,
// PT: e o argumento 'work' representa a tarefa a ser executada após o processamento do pedido.
order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
    .then(() => {
        console.log('Order placed successfully!');
    })
    .catch((error) => {
        console.log('Order failed:', error);
    });
