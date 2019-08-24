
let container = document.querySelector(".container")
let squareMoving = document.getElementById("square_moving")
let status = document.getElementById("status")




let random1 = Math.floor(Math.random() * 400)
let random2 = Math.floor(Math.random() * 400)
let random3 = Math.floor(Math.random() * 400)
let random4 = Math.floor(Math.random() * 400)

for (let i = 0; i < 400 ; i++) {
    let newdiv = document.createElement("div");
    if (i == random1 || i == random2 || i == random3 || i == random4) {
    newdiv.className = "green"
    }
    else {
    newdiv.className = "red"
    }
    container.append(newdiv);
}

container.addEventListener("mouseover", (e) => {

    if (e.target == container) return false;
    e.target.classList.toggle("red")
    e.target.classList.toggle("green")

})

setInterval(() => {
    let num = document.getElementsByClassName("red").length;
    squareMoving.innerHTML = num;
    if (num <= 0) {
        status.innerHTML = "You win!"
    }
    else {
        status.innerHTML = "";
    }
}, 50);
