
let container = document.querySelector(".container")
let squareMoving = document.getElementById("square_moving")
let status = document.getElementById("status")

for (let i = 0; i < 25; i++) {
    let newdiv = document.createElement("div");
    if (i == 12) {
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
