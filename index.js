
// min max
const arr = [20, 10, 40, 4, 9, 100];
let min = arr[0];
let max = arr[0];

for (let item of arr) {
    if (item < min) {
        min = item;
    }

    if (item > max){
        max = item;
    }
}
console.log(min, max)

// 2) function 
function fun(a, b) {
    return a ** b;
}
console.log(fun(5,5));



// 3) arrow 
let arrow =(a, b) => a**b;

console.log (arrow(5,2));

// do while
let i = 7;

do{
    console.log(arr[i]);
    i++;
} while(i < arr.length);

console.log(i)
