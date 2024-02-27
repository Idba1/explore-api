// JavaScript Object Notation (JSON)

const shop = {
    owner: "Alia",
    address: {
        street: "kochukkhet vuter goli",
        city: "Ranbir",
        country: "BD"
    },
    products: ['pencil','notebook','book','class note'],
    revenue: 5000,
    isOpen: true,
    isNew: false,
}

console.log(shop.isOpen);

const shopStringyfy = JSON.stringify(shop);
console.log(shopStringyfy);

const shopObj = JSON.parse(shopStringyfy);
console.log(shopObj);