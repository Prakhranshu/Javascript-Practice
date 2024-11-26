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
    console.log("Hello, promise 1 is pending")
    setTimeout(()=>{
        //console.log("I am promise 1 in 5 sec...")
        resolve(true)
    },5000)
})

let promise2 = new Promise(function(resolve, reject){
    console.log("Hello, promise 2 is pending")
    setTimeout(()=>{
        //console.log("I am promise 2 in 5 sec...")
        reject(new Error("I am an error"))
    },5000)
})

promise1.then((value)=>{
    console.log(value)
})

// promise2.catch((error)=>{
//     console.log("Somme error occured in Promise2")
// })

promise2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log("Some error occured in Promise2",error)
});


console.log(promise1)
console.log(promise2)

console.log("Hello 1");
setTimeout(function(){
    console.log("Hello in 3secs...");
},3000)

console.log("Hello 2");

async function harry() {
    let delhiWeather = new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve("27 Deg")
            }, 2000)
    })

    let bangaloreWeather = new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve("21 Deg")
            }, 5000)
    })

    // delhiWeather.then(alert)
    // bangaloreWeather.then(alert)
    console.log("Fetching Delhi Weather Please wait ...")
    let delhiW = await delhiWeather
    console.log("Fetched Delhi Weather: " + delhiW)
    console.log("Fetching Bangalore Weather Please wait ...")
    let bangaloreW = await bangaloreWeather
    console.log("Fetched Bangalore Weather: " + bangaloreW)
    return [delhiW, bangaloreW]
}

const cherry = async () => {
    console.log("Hey I am cherry and I am waiting ")
}

const main1 = async () => {
    console.log("Welcome to weather control room")
    let a = await harry()
    let b = await cherry()

}
main1()