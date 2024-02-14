const conta = {
    email: "asdokasod@gmail.com",
    name: "Moises",
    balance: 2000.00,
    password: 123456
}

export const api = new Promise(resolve => {
    setTimeout(() => {
        resolve(conta)
    }, 1000)
})