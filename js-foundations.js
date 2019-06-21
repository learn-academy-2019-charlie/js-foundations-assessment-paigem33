// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".

var divisibleByThree = function(num){
    if(num%3 === 0){
        return `${num} is divisble by three`
    } else {
        return `${num} is not divisible by three`
    }
}
console.log(divisibleByThree(10))

// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.

const helloMe = {
    first_name: "Paige",
    last_name: "MacGregor",
    getName: function() {
        return `${this.first_name} ${this.last_name}`
    }
}
console.log(helloMe.getName())

// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

var groceryItems = ["pasta", "bananas", "cat food", "rice", "chocolate"]
getItems = (array) => {
    return `${array[0]}, ${array[2]}, ${array[4]}`
    }
console.log(getItems(groceryItems))

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.

alphabetSoup = (str) => {
    return str.split('').sort().join('')
}
console.log(alphabetSoup('learn'))

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

animalNums = (arr1,arr2) => {
    newArr =[]
    for(let i=0;i<arr1.length;i++){
        newArr.push(arr1[i] +' '+ arr2[i])
    }
    return newArr.join(', ')
}
console.log(animalNums(nums,nouns))
// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
var numbers = [1,2,3,4,5]
multiply = (arr) => {
    return arr.map(value => value * 5)
}
console.log(multiply(numbers))
