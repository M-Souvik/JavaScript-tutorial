// loops
// 1. for
// 2. for-of loop
// 3. for-in loop
// conditional statemnt
// 1. if
// 2. if-else
// 3. while
// 4. do-while
// LOOPS
// 1. for
// for (let i = 0; i < 5; i++) {
//    console.log("i=",i);
    
// }
// 2. for-of{for arrays and strings}
// let str = "Javascript";
//
// for(let i of str){
//     console.log("i=",i)
// }
// 3. for-in(for objects)
// let student ={
//     name: "Souvik",//keys
//     age: 19,
//     address: "Nallasopara",
//     Id: 18
// };//objects
// for(let key in student){
//     console.log(key,":",student[key])
// }
//practice q1
// for (let i = 0; i <= 100; i++) {
//     if (i%2 === 0) {
//         console.log("num =",i);
//     } else {
        
//     }
    
// }
// practice q2
// let gameNum="69"
// let guessNum=prompt("Guess the number:");
// while(guessNum !== gameNum){
//     guessNum=prompt("Wrong guess, Please try again:");
// }
// console.log("congratulations, You guessed it right!!!");
// alert("congratulations, You guessed it right!!!");
//String Methods//Strings are immutable i.e it can't be changed
// 1.
// toUppercase()
//2. toLowercase()
// let str="Souvik Mondal"
// console.log(str);

// str=str.toUpperCase();
// console.log(str);

// str=str.toLowerCase();
// console.log(str);
//3.trim()
// let str="   Souvik Mondal   ";
// console.log(str);
// console.log(str.trim());
//4. slice(startVal,endVal)(endVal is not included)
// let str="Souvik Mondal";
// console.log(str.slice(0, 7))//Souvik
//5. str1.concat(str2)
// let str1="You are genius"
// let str2=" also You are a idiot"
// console.log(str1.concat(str2));
//6.replace(searchVal,newVal)/replaceAll(searchVal,newVal)
// let str="mate";
// console.log(str.replace("m","r"));
//7.charAt(index)
// let str="Help";
// console.log(str.charAt(1));
//pratice q1
// let firstName=prompt("Please enter your first name:");
// let lastName=prompt("Please enter your Last name");
// let userName=firstName.concat(lastName);
// let num=Math.random().toPrecision(1) * 180;
// userName="@"+userName.concat(num);
// console.log("Suggested Username:\n",userName);
//ARRAYS(mutable)
// let arr = [12,23,34,45];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// arr[0]=13;//an element can be changed in array
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }
// for(let i of arr){
//     console.log(i);
// }
// practice q1
// let mark=[85,97,44,37,76,60];
// let sum=0;

// for(let i of mark){
//     sum += i
// }
// let avg=sum/mark.length;
// console.log(`The average marks is ${avg}`);
// //practice q2
// let price=[250,645,300,900,50];
// let idx=0;
// for (let i of price){
//     let offer = i/10;
//     price[idx]=price[idx]-offer;
//     console.log(`value after offer =${price[idx]}`);
//     idx++;
// }
// console.log(price);
//Array Methods
//1.Push()
// let veggie=["potatoes","tomatoes"];
// console.log(veggie);
// veggie.push("cauliflower");
// console.log(veggie);
//2.Pop
// let veggie=["potatoes","tomatoes"];
// console.log(veggie);
// veggie.pop();
// console.log(veggie.toString());
//3.concat()
// let marvelHeroes=["spiderman","ironman","thor","black panther"];
// let dcHeroes=["batman","superman"];
// let heroes=marvelHeroes.concat(dcHeroes);
// console.log(heroes);
//4. unshift()//add elemnt at the start
// marvelHeroes.unshift("black panther");
// console.log(marvelHeroes);
//5. shift()// delete element from the start
// let val=marvelHeroes.shift();
// console.log(`deleted val is ${val} \n new array is ${marvelHeroes}`);
//6. slice()
// console.log(marvelHeroes.slice(1,3));
//7. splice(startIdx,delCount,newElement)
// let arr=[1,2,3,4,5,6];
// //add
// arr.splice(2,0,101);
// //Delete
// arr.splice(3,1);
// //replace
// arr.splice(3,2,7);
// console.log(arr);
//Practice q1
// let companies=["bloomberg","microsoft","Uber","google","ibm","netflix"];
// console.log(companies);
// companies.shift();
// console.log(companies);
// companies.splice(1,1,"Ola");
// console.log(companies);
// companies.push("Amazon");
// console.log(companies);
//Functions
//definition
// function sum(a,b){
//     s=a+b;
//     console.log(s);
// }
// //calling function
// sum(3,4);
//Arrow function
// const sum =(a,b)=>{
// console.log(a+b);
// }
//practice q1

// function countVowel(str){
    
//     let count=0;
//     for(const char of str){
//         console.log(char);
//         if (char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
        
//     }
//    console.log(`There are ${count} vowels in the word`);
// }
// let str = prompt("Enter the word");
// const countVowel=(a)=>{
//     let sum=0;
//     for(const char of a){
//         console.log(char);
//     if (char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//         sum++;
//     }

// }
// console.log(`there are ${sum} vowels in word ${a}`);
// }

// countVowel(str);
// functions with arrays
// 1.forEach loop//callback function
// let arr=["yuji","goku","deku","light"];
// arr.forEach((val) => {
//     console.log(val);
    
// });
// let arr=[1,2,3,4,5];
// arr.forEach((element) => {
//     console.log(element*element);
    
// });
// 2.Map
// let num=[1,2,3,4];
// let newArr = num.map((val)=>{
//     console.log(val);
// });
// console.log(newArr);
// 3.filter
// let arr=[1,2,3,4,5,6];
// let newArr=arr.filter((val)=>{
//     return val%2===0;
// })
// console.log(newArr);
//4.Reduce
// const arr=[1,2,3,4];
// const initialValue=0;
// const sumWithInitial = arr.reduce((res,curr)=>{
//     return res + curr;
// }
// )
// console.log(sumWithInitial);
// const arr=[12,3,13,7,101];
// const initialValue=0;
// const sumWithInitial = arr.reduce((res,curr)=>{
//     return res>curr?res:curr;
// }
// )
// console.log(sumWithInitial);
//practice q1
// let marks=[90,78,89,91,80];
// let aboveNinety=marks.filter((val)=>{
//     return val>=90;
// });
// console.log(aboveNinety);
// let n=prompt("Enter the number");
// let arr=[];
// for (let i = 1; i < n; i++) {
//     arr[i-1]=i;    
// }
// console.log(arr);
// let totalSum=arr.reduce((res,curr)=>{
//     return res + curr;
// })
// console.log(totalSum);
// let totalProduct=arr.reduce((res,curr)=>{
//     return res * curr;
// })
// console.log(totalProduct);
//DOM manipulation
// 1. documnet.getElementById("IdName")
// let heading = document.getElementById("h1");
// console.dir(heading);
//2. document.getElementsByClass("ClassName")
// let heading1=document.getElementsByClassName("heading");
// console.dir(heading1);
//3.document.getElementsByTagName("Tag")
// let heading1=document.getElementsByTagName("button");
// console.dir(heading1);
//4.documnet.querySelector("className/idName/TagName");
// let heading1=document.querySelectorAll(".heading");
// console.dir(heading1);
// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// console.dir(div);
//q1
// let h2=document.querySelector("h2");
// h2.innerText=h2.innerText+" from Apna college Students";
//q2
// let div=document.querySelectorAll(".box");
// // div[0].innerText="Naruto"
// // div[1].innerText="OnePiece"
// // div[2].innerText="Bleach"
// let idx=1;
// for (i of div) {
//     i.innerText=`new unique value ${idx}`;
//     idx++;
    
// }
//5.getAttribute
// let box=document.querySelector("div div");
// console.log(box);
// let box1=box.getAttribute("class");
// console.log(box1);
// let name=box.getAttribute("name");
// console.log(name);
//6.setAttribute
// let box=document.querySelector(".box");
// let js=document.querySelector("body");
// console.log(box.setAttribute("class","Js"))
//7.node.style
// box.style.backgroundColor='green';
// js.style.backgroundColor='royalblue';
// let button1=document.createElement("button");
// button1.innerText="Sign In";
// let para=document.querySelector(".box");
// para.append(button1);
// para.prepend(button1);
// para.before(button1);
// para.after(button1);
// let div=document.createElement("div");
// div.className="div1";
// div.innerText="Hello Guys"
// div.style.boxSizing='border-box';
// div.style.height='100px';
// div.style.width='100px';
// div.style.border='10px';
// div.style.borderColor='blue';
// div.style.backgroundColor='red';
// para.after(div);
// let Js=document.querySelector(".hello");
// Js.remove();
//practice q1
// let newBtn=document.createElement("button");
// newBtn.innerText="Click Me!"
// newBtn.style.backgroundColor='red';
// newBtn.style.color='white';
// let body=document.querySelector("body");
// body.append(newBtn);
// //q2
// let para=document.querySelector(".para");
// para.classList.add("nwPara");
// let btn=document.createElement("button");
// btn.innerHTML="<i>Click Me!</i>";
// body.append(btn);
// btn.onclick=(e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     alert("Maza aaya na Ab gaand Mara");
//     console.log("Ullu Ban Gya");
// }
// // btn.ondblclick=()=>{
// //     alert("Gaand Mara!");
// //     console.log("Ullu Ban Gya");
// // }
// btn.onmouseover=()=>{

   
// }
// btn.addEventListener("mouseover",()=>{
//     alert("Nothing");
// })
// btn.addEventListener("click",()=>{
//     alert("You are Great");
// })
//Dark Toggle Btn
// let toggleButton=document.createElement("button");
// toggleButton.innerText="Dark Mode"
// toggleButton.idName="toggleButton"
// toggleButton.style.backgroundColor="royalblue";
// toggleButton.style.color="white";
// toggleButton.style.borderLeft="10px"
// toggleButton.style.borderTop="10px"
// toggleButton.style.borderRadius="5px"

// toggleButton.style.borderColor="black";


// let body= document.querySelector("body");
// body.append(toggleButton);
// let backColor="light";
// let para=document.createElement("p");
// para.innerText="Welcome Guys"
// body.after(para);
// toggleButton.addEventListener("click",()=>{
//     if(backColor==="light"){
//       backColor="dark";
//       body.style.backgroundColor='black';
//       para.style.color='white';
//       toggleButton.style.borderColor="white";
//       toggleButton.innerText="Light Mode"
//     }else{
//       backColor="light"
//       body.style.backgroundColor='white';
//       para.style.color='black';
//       toggleButton.style.borderColor="black";
//       toggleButton.innerText="Dark Mode";
//     }
//     console.log(backColor);
// })
// Objects and Classes
// const employee={
//     calcTax(){
//         console.log("tax is 10%");
//     }
// }
// const dePartment={
//     dName(){
//         console.log("This Is Web Dev Sector");
//     }
// }
// const Souvik={
//     salary:100000,
// };
//Protoype
// Souvik.__proto__1=employee;
// console.log(Souvik.calcTax());

// Souvik.__proto__=dePartment
// console.log(Souvik.dName());
//Class is a blueprint of the task to be done
// class ToyotaCar{
//     constructor(model,mileage){
//         console.log("Creating a new Car");
//         this.model=model;
//         this.mileage=mileage;
//         //this.objectName=argumentName
//     }
//     start(){
//         console.log("Start the Car");
//     }
//     stop(){
//         console.log("Stop the Car");
//     }
// }

// //Creating a Object
// let fortuner=new ToyotaCar("legendario",110);
// console.log(fortuner);
//Inheritence in Js
// class Parent{
//     hello(){
//         console.log("Hello Guys");
//     }
// }

// class Child extends Parent{
//     welcome(){
//         console.log("Welcome to JavaScript")    
//     }
// }
// let child=new Child();
// class Person{
//     constructor(name){
//         this.personName=name;
//     }
//     eat(){
//         console.log("Eat");
//     }
//     sleep(){
//         console.log("Sleep");
//     }
//     work(){
//         console.log("Repeat");
//     }
// }
// class SoftwareEngineer extends Person{
//     constructor(name,domain){
//         super(name);//used to invoke parent class constructor(must be used)
//         this.domainName=domain;
//     }
//     work(){
//         super.eat();
//         super.sleep();
//         console.log("Building a App or any Website");
//         super.work();
//     }
// }
// let softwareEngineer=new SoftwareEngineer("Souvik","Web Developer");
// console.log(softwareEngineer);
// console.log(softwareEngineer.eat());
// console.log(softwareEngineer.work());
//when two same function are declared in parent and child class
//then the child will always follow the function which is declared inside it.
//q1
// let Data={
//     name: "Souvik"
// }
// class User{
//     constructor(name,email){
//         this.name=name;
//         this.emailId=email;
//     }
//     viewData(){
//         console.log(Data);
//     }
// }
// //q2
// class Admin extends User{
//     editData(){
//        Data.name="Admin"
//     }
// }
// let Student1=new User("Souvik","sm6984767@gmail.com");
// let Teacher1=new User();
// let admin=new Admin();
//try-catch block
// let a=5;
// let b=10;
// console.log("a=",a);
// console.log("b=",b);
// console.log("a+b=",a+b);
// try{
// console.log("a+b=",a+c);
// }catch(err){
// console.log(err);
// }

// console.log("a+b=",a+b);
// console.log("a+b=",a+b);
// console.log("a+b=",a+b);
//Callbacks,Promises and Async-wait
//Callbacks
// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,functn){
// functn(a,b);
// }
// calculator(4,5,sum);
//Callback hell
//Occurs when there is too much nesting in the code
// function getData(dataId,getNextData) {
//     setTimeout(() => {
//         console.log("data",dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
    
// }
// getData(1,getData(2))//will give error instead we will use
//Nested Callback===Callback hell
//Pyramid of doom
// getData(1,()=>{
//     console.log("Getting data");
//     getData(2,()=>{
//         console.log("Getting data");
//         getData(3,()=>{
//             console.log("Getting data");
//             getData(4);//Callback
//         });//Callback
//     });//Callback
// });
//To solve Callback hell,Promises is Used
//Promises
//Its has three state pending,fulfilled[resolved] and rejected.
// let promise1=new Promise((resolve, reject) => {
//     console.log("i am promise");
//     // resolve("Succesfully executed")
//     reject("Unsuccessful");
//     //Callbacks provided by js
// });

// function getData(dataId,getNextData) {
// return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("data",dataId);
//         resolve("success")
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// })    
// }
// console.log(getData(123));

// function getPromise() {
//     return new Promise((resolve,reject)=>{
//         console.log("Executing Promise");
//         // reject("Execution Failed")
//         resolve("success")
//     })
// }
// let promise=getPromise();
// promise.then((res)=>{
//     console.log(`${res}!!!`);//if promise is resolved
// })
// promise.catch((err)=>{
//     console.log(`${err}`);//if promise is rejected
// })
// const asynchFunct1=(dataId)=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("Success")
//         }, 5000);
//     })
// };
//promise chaining
// asynchFunct1(1).then(()=>{
//     return asynchFunct1(2);
// }).then(()=>{
//         return asynchFunct1(3);
//     }).then((res)=>{
//         console.log(res)
//     })
// const asynchFunct2=()=>{
//     return new Promise((resolve, reject) => {
//         console.log("data2");
//         resolve("Success")
//     })
// };

//Promise Chaining
// console.log("Fetching data");
// asynchFunct1().then((res)=>{
//     console.log(res)
//     console.log("Fetching next data");
//     asynchFunct2().then((res)=>{
//         console.log(res);
//     })
//     // asynchFunct2().catch((err)=>{
//     //     console.log(err)
//     // })

// })
// asynchFunct1().catch((err)=>{
//     console.log(err);
// })
//Async-await
//async-Always returns a promise
// async function hello() {
//     console.log("hello")
// }
// hello();
// //await-pauses the execution of its surrounding functn until promise is settled
// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve("success")
//         }, 2000);
//     })
// } 
// async function getData(){
//     await api();
//     await api();

// }
// function getData(dataId) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("success");
//         }, 2000);
//     });
// }
//IIFE(Immeadiately invoked function)(for Async-await only)
//to invoke funxtion without automatically
// (async function (){
//     console.log("getting Data....");
//     await getData(1);
//     console.log("getting Data....");
//     await getData(2);
//     console.log("getting Data....");
//     await getData(3);
// })();
//fetch Data from API
const URL='https://animechan.xyz/api/random';
const Quote=document.querySelector(".quote")
const characterName=document.querySelector(".character")
const AnimeName=document.querySelector(".anime")
// const getAnimeInfo = async()=>{
//     console.log("getting Data.....")
//     let response=await fetch(URL);

//     console.log(response);
//     console.log(response.status);
//     let data=await response.json();
//     console.log(data);
//     console.log(data.quote);
//     console.log(data.anime);
//     console.log(data.character);
//     Quote.innerText=data.quote;
//     characterName.innerText=data.character;
//     AnimeName.innerText=data.anime;


// };
function getAnimeInfo(){
    fetch(URL)
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    console.log(data.quote);
    console.log(data.anime);
    console.log(data.character);
    Quote.innerText=data.quote;
    characterName.innerText=data.character;
    AnimeName.innerText=data.anime;
    })
}



