
let container = document.querySelector(".container")
let squareMoving = document.getElementById("square_moving")
let status = document.getElementById("status")

for (let i = 0 ; i < 25 ; i++){
    let newdiv = document.createElement("div");
    if (i == 12) newdiv.className = "rotate joker"
    container.append(newdiv);
}

container.addEventListener("mousemove", (e) => {

    if (e.target == container) return false;
    e.target.classList.toggle("rotate")

})

setInterval(() => {
    let num = document.getElementsByClassName("rotate").length;
    squareMoving.innerHTML = num;
    if (num <= 0){
        status.innerHTML = "You win!"
    }
    else{
        status.innerHTML = "";
    }
}, 50);
