const numbers= [45, 65, 35, 95, 355, 9841];

// simple for loop
for(let i=0; i< numbers.length; i++){
    const number= numbers[i];
    // console.log(number);
}

// for of loop
for(const number of numbers){
    // console.log(number);
}

// 3
const goods= [
    {id: 1, name: "Walton Smartphone", price: "See Detail"},
    {id: 2, name: "Redmi Earphone", price: "See Detail"},
    {id: 3, name: "Samsung Smartphone", price: "See Detail"},
    {id: 4, name: "Apple Smartphone", price: "See Detail"},
    {id: 5, name: "Apple Smartphone", price: "See Detail"},
    {id: 6, name: "Samsung Laptop", price: "See Detail"},
    {id: 7, name: " Apple Smartwatch", price: "See Detail"},
    {id: 8, name: "Walton Charger", price: "See Detail"},
    {id: 9, name: "Asus Laptop", price: "See Detail"},
    {id: 10, name: "Realme Smartphone", price: "See Detail"}
]

// for(const good of goods){
//     console.log(good);
// }


// 4
function searchGoods(goods, search){
    const searched= [];
    for(const good of goods){
        if(good.name.toLowerCase().includes(search.toLowerCase())){
            searched.push(good);
        }
    }
    return searched;
}

const result= searchGoods(goods, "laptop");
console.log(result)