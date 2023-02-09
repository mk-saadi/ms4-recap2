function add(num1, num2){
    console.log(arguments);
    return num1* num2;
}
const result= add(38, 56, 68, 32, 955, 1565);
console.log(result)