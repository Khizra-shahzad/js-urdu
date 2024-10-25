// primitive:
           // primitive type call by value

// 7 types :string
            //number
            // boolean
            //null
            //undefined
            //symbol : kisi bhi value ko unque banane k liye sumbol use hota h
            //BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outSideTemp=null
let userEmail;

// const id=symbol('123');
// const anotherId=symbol('123');

//console.log(id===anotherId);


//Refrence type/non primitive
            //Arrays ,Objects,Function

const fruits=["bananna","apple","orange"]
let myObj={
    name:"khizra",
    age:17
}
const myFunction=function(){
    console.log("hello world");
    
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack memory(use in primitive) ,Heap memory(use in non primitive)


//stack memory
let userName="khizra2gmail.com"
let anontherName=userName

anontherName="shahzad@gmail.com"
console.log(anontherName);
 
//heap memory
let userOne={
    name:"khizra",
    email:"khizra@gamil.com"
}
let userTwo=userOne;
userOne.name="ali"
console.log(userTwo);


