// 1. Write your functions here


// 2. Example Usage

const katzDeli = []//Beginning of the day - deli is empty = empty array

//1)Create a 'line' function, takes in array-which is katzDeli, returns a string, if nobody in line string should be "The line is currently empty."
//(for loop?)
// function line(katzDeli){
//     return " " = "The line is currently empty."
// }
function line(katzDeli){
    const line2 = ['The line is currently:']
    const names = ["1. Ada", "2. Grace", "3. Kent"]
    if(names.length = 4){
    return line2 + names}
    else{ 
        return "The line is currently empty"
    
    }
        
    }line(katzDeli)

//2)Create a new customer(newCustomer) function? or a function a new customer will use when entering the deli?
//==create a new function called takeANumber, with two parameters: one is the array katzDeli and the other
//is a string of the name joining the end of the line. 
function takeANumber (katzDeli,stringLastinLine){

    console.log()//should display person's name and place in line
}

//3type a function named nowServing. Parameter?Possibly katzDeli, 
function nowServing (katzDeli){
    console.log(line.shift())
    console.log("There is nobody waiting to be called!")
}
// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"

function labTime(arrayOfPeople,stringName){
    // array for current line of people
    // string for person joining the end of the line
}console.log(arrayOfPeople,stringName)
//think how to run or execute it (answer---call the function with the arguments)
labTime(arrayOfPeople,stringName)