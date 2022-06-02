// 1. Tutorial No 33 (Ternary Operator)

// let age = "12";

// age = Number(age);

// if(isNaN(age)){
//     console.log("Input Is Not A Number");

// } else {
//     console.log(age < 18 ? "Too Young" : "Old Enough");
// }
// -------x----------x---------x---------x---------x-----

// Tutoruial no 34 (if, else , else if , switch)

// let age = 18;

// if (age < 18) {
//     console.log("You are Kid!!");
// }else if (age ==18) {
//     console.log("Welcome To Adult World")
// }else {
//     console.log("You are Old")
// }

// ---------x-------------------x--------------------------x---------x

// Tutorial no 35 (For Loop)

//  let cars = ["A", "B", "C", "D", "E"];

//  for (let i = 0; i < cars.length; i++){
//      console.log(i);
//  }

//  console.log("I am done")

// ----------------x------------------x------------------------x

// Tutorial no 36 (For In Loop)

// const person = { fname:"John", lname:"Doe", age:25 }

// for(let x in person){
//     console.log(person[x]);
// }

// let fruits = ["A","B", "C"];

// for (let fruit in fruits){
//     console.log(fruit);
// }

// -----------------------x--------------------------------x------x

// 38 Tutorial (While Loop)

// let i = 0;
// let text = "";

// while (i < 10){
//     text += "The Number is" + i;
//     i++;
// }
// console.log(text);

// ------------x--------------------------xx---------------x

// Tutorial NO 41 (Sets)

// const myCars = new Set();

// myCars.add("a");
// myCars.add("b");
// myCars.add("c");
// myCars.add("a");

// console.log(myCars);

// ---------------x-------------------x-------------------------x

// Tutorial NO 42 (Map)

// const fruits = new Map([
//     ["apples",500],
//     ["banana",300],
//     ["orange",200]
// ]);
// console.log(fruits.size);
// console.log(fruits);

// document.getElementById("demo").innerHTML = fruits.get("apples");

// fruits.get("apples");

// let text = "";
// fruits.forEach (function(value, key) {
//   text += key + ' = ' + value;
// })

// ----------------x-----------------------x------------x----------------

// tutorial no 43 (typeof operator)

// let a = "Bangladesh"
// let b = 71;

// let c = a + " " + b


// console.log(typeof c);

// function isArray(myArray){
//     console.log(myArray.constructor.toString().indexOf('Array') > -1)
// };

// isArray([1, 2, 3]);

// -----------------------x-------------------x-----------------x

// tutorial no 44

// console.log(typeof String(100+22));

// console.log(!false);
// -----------------x-----------------------x-------------------x


// let text = "I Love Bangladesh"

// let n = text.search("Bangladesh");



// let player = "I Love Virat"
// document.getElementById("demo").innerHTML = player;
// let fevourite = player.replace(/virat/i, "Dhoni");
                // Html
{/* <button onclick="myFunction()">Try it</button>
<p id="demo">Please visit Microsoft!</p> */}

// function myFunction() {
//     let text = document.getElementById("demo").innerHTML;
//     document.getElementById("demo").innerHTML =
//     text.replace(/microsoft/i,"W3Schools");
//   }

// let babyAge = 1;

// let isBirthday = true;

// if(isBirthday){
//     let babyAge = 2;
// };
// console.log(babyAge);


// tutorial 51

// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   console.log(person);
// ..................x....................x.................

// tutorial 53 (Classs)

// class Person {
//   constructor(name, year) {
//     this.name = name;
//     this.age = year;
//   }
//   play(status) {
//     console.log(`${this.name} aged ${this.age} is playing ${status}`  )
//   }
// }

// const person1 = new Person ("sakib",);
// const person2 = new Person ("tamim", 36);
 

// person1.play("well");
// person2.play("bad");

// --------------------x----------------c---------------------b-------
// tutorial no 63

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// delete person["age"];

// console.table(person);

// const person = {
//   firstName:  "John" ,
//   lastName:  " Doe",
//   id: 4453,
//   fullName: function(){
//     return this.firstName + "" + this.lastName
//   }
// };
// console.log(person.fullName());

// const samay = new Date ();
// document.getElementById("demo").innerHTML = samay;
// // s

// tutorial no 67(constructor)

// function Person(first, last, age) {

//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.fullName = function () {
//         return this.firstName + " " + this.lastName;
//     }
// }

// const sumit = new Person ("Sumit", "Saha", 35);
// const rahim = new Person ("Rahim", "Saha", 34);
// const hakim = new Person ("Hakimi", "Saha", 39);


// console.log(sumit.fullName());

// Set tutorial no 70 

// const letters = new Set(["a", "b", "c"]);
// // console.log(letters);
// const lettersIterator = letters.values();

// for (let a of lettersIterator){
//     console.log(a);
// }

// function bark() {
//     console.log('Woof!');
// }
// bark.animal = 'dog';

// tutorial 72(function)

// (function () {
//     console.log("i am a ");
// })();

// function myFunction(a, b) {
//     return a * b;
// }
 
// const result = myFunction(3, 4);

// console.log(result);


// tutorual 73

// function a(x, y=5) {

//     return x * y;
// }
// console.log(a(3,));  

// 74  


// This is a function constructor:
// function myFunction(arg1, arg2) {
//     this.firstName = arg1;
//     this.lastName  = arg2;
//   }
  
//   // This creates a new object
//   const myObj = new myFunction("John", "Doe");
  
//   // This will return "John"
//   myObj.firstName;



//   function myFunction(arg1, arg2) {

//     this.firstName = arg1;
//     this.lastName = arg2
//   }


//   const myObj = new myFunction("John", "Doe");

//   console.log(myObj.firstName);

// 75 call

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   // This will return "John Doe":
//   console.log(person.fullName());  


// const person = {
//      fullName: function () {
//     return this.firstName + " " + this.lastName;
//  } 
// };

// const person1 = { 
//     firstName: "John",
//     lastName: "Doe"
// };

// const person2 = {
//     firstName: "Mark",
//     lastName: "Clark"
// };

// console.log(person.fullName.call(person2));

// tutorial 78 (class)

// class Car {

//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }

//     run(speed) {
//         console.log(this.name + ' is running ' + speed);
//      }

// }

// const fgf = new Car("BMW", 1999);
// const audi = new Car("Audi", 1999);

// audi.run('100 km per hour');
 

// tutorial 79 (class inheritance)

// class Car {
//     constructor(brand) {
//         this.carname = brand
//     }
//     present() {
//         return 'I have a ' + this.carname;
//     }


// }

// class Model extends Car{
//     constructor(brand, mod) {
//         super(brand);
//         this.model = mod;
//     } 
//     show() {
//         return this.present() + ', it is a ' + this.model;
//     }
// }

// let myCar = new Model("Ford", "Master Edison");

// console.log(myCar.show());


// 81 callBack

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myCalculator(num1, num2, callBack) {
//     let sum = num1 + num2;

//     if(callBack)
//     callBack(sum); 
//   }
  
// myCalculator(5, 5, myDisplayer);
// //   myDisplayer(result);

// 82 asyncronous behevior


// console.log('line 1');
// setTimeout(function() {
//     console.log('line 2')
// },0);
// console.log('line 3');
// console.log('line 4');


// tutorial no 83(callBack pattern)

// const paymentSuccess = true;

// // const marks = 70;

// const marks = 90;

// function enroll(callback) {
//     console.log('Course enrollment is in process');

//     setTimeout(function() {
//         if(paymentSuccess) {
//             callback();
//         }else {
//             console.log("Payment Faild!");
//         }

//     }, 2000);
// }

// function progress(callback) {
//     console.log("Course on Progress....!");

//     setTimeout(function() {
//         if(marks >= 80){
//             callback();
//         }else {
//             console.log("You Coudn't get the cirtificate");
//         }

//     }, 3000);
        
    
// }

// function getCirtificate() {
//     console.log("Preparing your cirtificate");

//     setTimeout(function() {
//         console.log("Congrats! You got the cirtificate");
//     }, 1000);
// }

// enroll(function() {
//     progress(getCirtificate)
// });

// tutorial 84 (Promise)

// const man = true;

// console.log("Task 1");

// const promise = new Promise(function(resolve, reject){
    
//     setTimeout(function() {
//         if(man) {
//             resolve("Task 2");
//         }else {
//             reject("Faild");
//         }
    
//     }, 2000);
// });

// promise
//         .then(function(value){
//             console.log(value);
//         })
//         .catch(function(err){
//             console.log(err);
//         });
// console.log("Task 3");

// -----------------------------


// const paymentSuccess = true;

// const marks = 90;


// function enroll() {
//     console.log('Course enrollment is in process');

//     const promise = new Promise(function(resolve, reject){
//         setTimeout(function() {
//             if(paymentSuccess) {
//                 resolve();
//             }else {
//                 reject("Payment Faild!");
//             }
    
//         }, 2000);
//     })
//     return promise;
// }

// function progress() {
//     console.log("Course on Progress....!");

//   const promise = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         if(marks >= 80){
//             resolve();
//         }else {
//             reject("You Coudn't get the cirtificate");
//         }

//     }, 3000);
//   })
        
//     return promise;
// }

// function getCirtificate() {
//     console.log("Preparing your cirtificate");

   
//     const promise = new Promise(function(resolve){
//         setTimeout(function() {
//                     resolve("Congrats! You got the cirtificate");
//                 }, 1000);
//     })
//     return promise;
// }
// enroll()
//         .then(progress)
//         .then(getCirtificate)
//         .then(function(value){
//             console.log(value)
//         })
//         .catch(function(err){
//             console.log(err);
//         })
// ------------------end promise---------------------

// async function Course() {
    
//        try {
//         await enroll();
//         await progress();
//         const message = await getCirtificate();
//         console.log(message);
//        }catch(err){
//         console.log(err);
//        }
    
// }
// Course();
// -----------------------async-await---------------
// 87 DOM

// const p = document.getElementById("demo").innerHTML = "Hllo World";


// 91 js dom forms

// function validateForm() {
//     const form = document.forms['myForm'];
//     const value = form['fname'].value;
    
//     if(value === ''){
//         alert("You must have put some value");
//         return false;
//     }
   
// }

// function myFunction() {
//    let x = document.getElementById("nam").value;

// let text;
// if(isNaN(x) || x < 1 || x > 10){
//     text = "input is not valid"
// }else {
//     text = "Input ok"
// }
// document.getElementById("demo").innerHTML = text;
// }


// 92 css

// function styling() {
//     const p = document.getElementById("demo");
//     p.style.color = "red";
//     p.style.fontSize = "30px";

    
// }

// function myMove() {

//     const animate = document.getElementById('animate');
//     let pos = 0;


//     const interval = setInterval(frame, 5);

//     function frame() {
//         if(pos < 350){
//         pos++;
//         animate.style.top = pos + 'px';    
//         animate.style.left = pos + 'px';    
//     }else{
//         clearInterval(interval)};
//     }
// }

// const button = document.getElementById('button');

// button.onclick = function(){
//     console.log('hello');
// }

// tutorial 95 

// function myFunction() {
//     console.log('hello world');
// }



// const button = document.getElementById("button");

// button.addEventListener("click",myFunction);
// button.addEventListener("mouseover",function() {
//     console.log('dfdfdf')
// });


// 102 (Bom tutorial )
// let myWindow; 

// const width = document.getElementById('width');
// const height = document.getElementById('height');


// width.innerHTML = "Window inner width is: " + window.innerWidth;
// height.innerHTML = "Window inner height is: " + window.innerHeight;

// function openWindow() {
//     myWindow = window.open('https://google.com', '_self')
// }

// function closeWindow() {
//     myWindow = window.close();
// }

// window location


// function openWindow() {
//     window.location.assign('http://google.com')
// }


// const confirm = document.getElementById('confirm');

// function openWindow() {
//     let txt;
//     if(window.confirm("Press")){
//         txt = "You Press Ok!!"
//     }else {
//         txt = "You Press Cancel"

//     }
//     confirm.innerHTML = txt;
// }

// const prompt = document.getElementById('prompt');
// function closeWindow() {
//     let person = window.prompt('Please enter your name:', 'Harry Poter')
//     let txt;

//     if(person === null || person === "") {
//         txt = "User Cancelled the prompt"
//     }else {
//         txt = 'Hello' + person + "!How are You?"
//     }
//     prompt.innerHTML = txt;
// }



// cookie  

// function setCookie(cname, cvalue, exdays){
//     const d = new Date();
//     d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//     let expires = "expires=" + d.toUTCString();

//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"

// }

// function getCookie(cname) {
//     let name = cname + "=";
//     let ca = document.cookie.split(";");
//     for (let i = 0; i < ca.length; i++) {
//         let c = ca[i];

//         while(c.charAt(0) === " ") {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) === 0) {
//             return c.substring(name.length);
//         }
//     } 
//     return "";
// }

// function validation(){
//     const inputObj = document.getElementById('id1');

//     if(inputObj.validity.rangeOverflow) {
//         inputObj.setCustomValidity("You made a range overflow")
//     }
//     else {
//         inputObj.setCustomValidity("You made a range underflow")
//     }

//     if(!inputObj.checkValidity()) {
//         document.getElementById('demo').innerHTML = inputObj.validationMessage;
//     }
// }
let w;

function startWorker() {
    if(typeof Worker !== 'undefined') {
        if(typeof w == 'undefined'){
            w = new Worker("worker.js");

            w.onmessage = function(event) {
                document.getElementById('demo').innerHTML = event.data
            }; 
        }
    }else {
        alert("Your browser don't support Worker Api")
    }
}

function stopWorker() {
    if(typeof Worker !== 'undefined'){
        w.terminate();
        w.undifined;
    }else {
        alert("Your browser don't support Worker Api")
    }
}
document.getElementById('demo');
function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }else {
        demo.innerHTML("GeoLocation is not availavail in your device");
    }
}

function showPosition(position){
    demo.innerHTML = "Latitude:" + position.coords.latitude + '<br/>longitude:' + position.coords.longitude;
}
