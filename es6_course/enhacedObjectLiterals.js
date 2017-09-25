function createBookShop(inventory) {
    return {
        inventory: inventory,
        inventoryValue: function() {

        },
        priceForTitle: function () {

        }
    }
}

const inventory = [
    { title: 'Harry', price: 10 },
    { title: 'Harry 2', price: 15 },
    { title: 'Harry 3', price: 20 },
]

const bookShop = createBookShop(inventory)