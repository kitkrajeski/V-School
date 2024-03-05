var bakery = {
    location: "Salt Lake City",
    owner: "Kit Krajeski",
    breadTypes: [
        {
            name: "sourdough",
            taste: "tangy",
            price: 3.99,
            quantity: 12
        },
        {
            name: "baguette",
            taste: "crusty",
            price: 2.49,
            quantity: 16
        },
        {
            name: "whole wheat",
            taste: "hearty",
            price: 4.99,
            quantity: 0
        }
    ],
    // this code returns the total number of loaves of bread
    getAvailableBreadTypes: function() {
        return this.breadTypes.reduce((totalQuantity, bread) => totalQuantity + bread.quantity, 0);
    },
    bakeNewBread: function(name, taste, price) {
        var newBread = {
            name,
            taste,
            price,
            quantity
        }
    }
}
bakery.isOpen = true
bakery.breadtypes