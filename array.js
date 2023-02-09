const product = [
  { name: "laptop", price: 25400, year: 2021 },
  { name: "smartphone", price: 15000, year: 2019 },
];

// not array
const products = {
  0: 45,
  1: 08,
  2: 98,
};
console.log(products);

function compare(a, b){
  if(a == b){
    return true;
  }
  else{
    return false;
  }
}

const result = compare(15, "15");
console.log(result);


let a="hi ";
let b="there";
console.log(a+b);

