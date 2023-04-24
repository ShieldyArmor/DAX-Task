function hasJsonStructure(str) {
    if (typeof str !== 'string') return false;
    try {
        const result = JSON.parse(str);
        const type = Object.prototype.toString.call(result);
        return type === '[object Object]' 
            || type === '[object Array]';
    } catch (err) {
        return false;
    }
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  
let bodyCont = document.getElementById("bodyCont")

let numberField = document.getElementById("numberField")
let numberTime = document.getElementById("numberTime")

let nameInput = document.getElementById("nameInput")
let nameList = document.getElementById("nameList")

let numberInput = document.getElementById("numberInput")

if (hasJsonStructure(localStorage.getItem("names")) == false) {
    localStorage.setItem("names", "[]")
    }

let nameArray = JSON.parse(localStorage.getItem("names"))

nameArray.forEach(e => {
    nameList.innerHTML += `<li>${e}</li>`
});

console.log(hasJsonStructure(localStorage.getItem("names")));

// console.log(Array.isArray(JSON.parse(localStorage.getItem("names"))));

function playPipe() {
let audio = new Audio("/media/jixaw-metal-pipe-falling-sound.mp3")
audio.play()
}



// console.log(localStorage.getItem("names"));
// console.log(localStorage.getItem("names") == null);

async function addName() {

    if (nameInput.value == "") {
        console.log("You must input your name, dummy!");
    }
    else {
        console.log(`Welcome! Hope everything is going well, ${nameInput.value}!`);
    
    
        let tempNameArray = JSON.parse(localStorage.getItem("names"))
    
        console.log("Starting array: "+tempNameArray);

        tempNameArray.push(nameInput.value)

        console.log("Ending array: "+tempNameArray);

        localStorage.setItem("names", JSON.stringify(tempNameArray))


        nameList.innerHTML = ""
        tempNameArray.forEach(e => {
            nameList.innerHTML += `<li>${e}</li>`
        });


        let i = 0;

        while (i == 0) {
            await sleep(1000)
            let now = new Date()
                if (now.getSeconds() == 0) {
                    await sleep(1000)
                    if (numberInput.value = localStorage.getItem("rNumber")) {
                            setBg()
                            playPipe()
                            await sleep(500)
                            window.alert("THIS IS YOUR NEW LUCKY COLOR")
                        console.log("you guessed correctly!")
                        i++
                    }
                    else {
                        console.log(`You guessed ${numberInput.value}, but the new number was ${localStorage.getItem("rNumber")}, sorry!`)
                        i++
                    }
                }
                else {
                    console.log("waiting for minute to pass");
                }
        }
    }

}

let rMath;

if (localStorage.getItem("rNumber") == null || localStorage.getItem("rNumber") == "") {
    rMath = Math.floor(Math.random() * 10) + 1;
    numberField.innerText = rMath
}
else {
    rMath = localStorage.getItem("rNumber")
    numberField.innerText = rMath
}
    


doTime()

let dateInterval = window.setInterval(doTime, 1000)

function doTime() {
    
    let now = new Date()
    console.log(now.getSeconds() == 0)
    if (now.getSeconds() == 0) {
        let rMath = Math.floor(Math.random() * 10) + 1;
        numberField.innerText = rMath
        localStorage.setItem("rNumber", rMath)
    }
    numberTime.innerText = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
}

async function setBg() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    bodyCont.style.backgroundColor = "#" + randomColor;
  }