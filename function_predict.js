function greeting(){
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word);
//"World Hello"

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);
//Summing Numbers!
//Num1 is: 3
//Num2 is: 5
//8
//Summing Numbers!
//Num1 is: 4
//Num2 is: 7
//11

function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}
//Prints "High Five if num>=5 otherwise prints i"