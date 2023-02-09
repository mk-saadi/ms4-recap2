// addition korte gelo 0 variable er maan "0" die shuru korte hobe,

// positive/ increasing
// let sum= 0;
// for(let i= 1; i<= 5; i++){
//     sum= sum+ i;
// }

// console.log(sum);

// negative/ decreasing
// (let i= 5; i>= 1;i--)- ekhane 'i=5'-holo loop variable 
// 'i>=1'- holo loop condition, 'i--'-holo loop change

let sum1= 0;
for(let i= 5; i>= 1;i--){
    // (let i= 5)- ekhane biyog er khetre 5 theke kombe tai "i" er maan 5 deya hayeche, (i>= 1)-ekhane maan "5" theke kome 1 porjonto asbe tai "1" deya hayeche
    sum1= sum1- i;
    //(sum1= sum1+ i;)-ekhane "+" dile output 'positive' asbe
}
// console.log(sum1);

// function diye
function sum(i){
    if(i==1){
        // (i==1)-holo for loop er "i>= 1"
        return 1;
    }
    return i+ sum(i-1);
    // "i" for loop er "i= 5"
    // eikhane (i-1)-holo for loop er "i--"
}
const result= sum(5);
console.log(result)

/**
 * eita jebhabe kaaj kore
 * 5+ sum(4)
 * 5+ 4+ sum(3)
 * 5+ 4+ 3+ sum(2)
 * 5+ 4+ 3+ 2+ sum(1)
 * 5+ 4+ 3+ 2+ 1
 * 
 * eita "recursion"- kono ekta function er vitor theke sei 
 *  -function kei call kora
 */