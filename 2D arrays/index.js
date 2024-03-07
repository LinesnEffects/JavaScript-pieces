
// 2D = An array of arrays

let fruits = ["apples", "oranges", "bananas"]
let vegetables = ["carrots", "onions", "potaotes"]
let meats = ["eggs", "chicken", "fish"]

let groceryList = [fruits, vegetables, meats]

groceryList[2][1] = "pork" 
// to change the value of an element
// inside an array inside another array

for(let list of groceryList){
    for(let food of list){
        console.log(food)
    }
}
 

