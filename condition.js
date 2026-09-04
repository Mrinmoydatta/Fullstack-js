let age=19;

// if statement
if(age>18){
    console.log("Your are eligible to vote.");
}

// if-else statement
if(age>18){
    console.log("eligible to vote");
}else{
    console.log("not eligible to vote");
}



// if-else if statement
if(age<20){
    console.log("You are a teenager.");
}else if(age>=20 && age<30){
    console.log("You are in your twenties.");
}else{
    console.log("You are older than 30.");
}


//ternary operator
(age>18)?console.log("eligible to vote"):console.log("not eligible to vote");




// switch case
let color="red";

switch(color){
    case "red":
        console.log("Color is red");
        break;
    case "blue":
        console.log("Color is blue");
        break;
    case "green":
        console.log("Color is green");
        break;
    default:
        console.log("Color is not red, blue or green");
}   



