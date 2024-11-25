class Parent {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name); // Call the parent constructor
        this.age = age;
    }

    showAge() {
        console.log(`I am ${this.age} years old`);
    }
}

const child = new Child("Alice", 30);

child.greet();   // Output: Hello, I am Alice
child.showAge(); // Output: I am 30 years ol d

function Test(){
    document.getElementById("Prakhar").innerHTML = "Hello, I am Prakhar of Test Func";
    document.getElementById("Prakhar").style.fontSize = "50px";
    //document.getElementById('Prakhar').style.color = 'green';
    document.getElementById('btn1').addEventListener("click",function(){
        alert("Hello, I am Prakhar");
    })
}
Test();

let promise1 = new Promise(function(resolve, reject){
    console.log("Hello, I am Prakhar of promise 1")
    setTimeout(()=>{
        console.log("I am promise 1 in 5 sec...")
        resolve(true)
    },5000)
})

let promise2 = new Promise(function(resolve, reject){
    console.log("Hello, I am Prakhar of promise 2")
    setTimeout(()=>{
        console.log("I am promise 2 in 5 sec...")
        reject(new Error("I am an error"))
    },5000)
})

console.log(promise1)
console.log(promise2)

console.log("Hello 1");
setTimeout(function(){
    console.log("Hello in 3secs...");
},3000)

console.log("Hello 2");