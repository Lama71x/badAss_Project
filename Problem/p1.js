// 1. Display Current Day and Time

// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday
// Current time is : 10 PM : 30 : 38

let today = new Date()
let day = today.getDay()

let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

console.log("Today the day is " + dayList[day] )


