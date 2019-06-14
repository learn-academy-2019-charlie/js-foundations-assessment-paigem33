# Javascript Foundations Assessments

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.

Numbers, strings, and booleans are primitive data types. Arrays are not primitive data types.

2. What's the difference between =, ==, and === in JavaScript?

A single = means assignment, while == mean comparison of value but not data type, and === means an even more strict comparison of value and data type. 

3. What is the difference between an array's index and length?

Each item in an array has an index start, and the array's length as a whole is made up of how many indexes it has. 

4. What are the three parts of a for loop?

Setting a variable to act as each index on the array, setting how many times the loop will run, and telling the variable what to do at the end of the loop.

5. What is a function's declaration, argument, and call?

A function declaration is just what it means to create a function, the arguments are what is passed into the function to manipulate, and the call it how you tell the function to run.

6. What are the three main steps in saving work to github?

First you have to have a repository set up, either cloned from an existing repo or made on your computer, and then you run git add . to add your files and changes to the repository, then you run git commit -m "" to commit your changes, and then you run git push to push your committed changes to github.

7. What is the terminal command to move directories?

You can cd followed by the directory you want, or you can do cd .. to move up one level

8. Do you have a suggestion for a Check In question?



9. What was your favorite topic this week?



10. What was your "A-ha!" moment this week?



### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
```
Undefined, because it not telling the function to pull in the 'outside' via the arguments, and the log is called before the 'inside' therefore it will not log it. 

Google: In JavaScript, variables are "hoisted" to the top of the function. That is, unlike some other languages (such as C), a variable declared within a function is within scope throughout the function. 

2. What is JSON? How does it relate to javascript objects?

Javascript object notation, it is very similar to javascript objects with its syntax and meaning.

Google: JSON is short for JavaScript Object Notation, and is a way to store information in an organized, easy-to-access manner. In a nutshell, it gives us a human-readable collection of data that we can access in a really logical manner.

3. Describe a closure, what is it good for and how do you recognize one?

It sounds familar, but I cannot think of what it it is. 

Google: A closure is the combination of a function and the lexical environment within which that function was declared.

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
