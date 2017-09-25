let products = [
    { name: 'Cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name: 'Banana', type: 'fruit', quantity: 10, price: 15 },
    { name: 'Celery', type: 'vegetable', quantity: 30, price: 13 },
    { name: 'Orange', type: 'fruit', quantity: 3, price: 5 },
    { name: 'Lemon', type: 'fruit', quantity: 24, price: 18 }
]

let productFound = products.find((product)=>product.name === 'Banana')
console.log(productFound)

//Use find just to look for unique items