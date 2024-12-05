const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const incBtn = document.getElementById("increase");
const decBtn = document.getElementById("decrease");
const sizes = document.getElementById("size");
const colorPalette = document.getElementById("color");
const clear = document.getElementById("clear");

let size = 10
let isPressed = false
let color = "black"
let x 
let y

canvas.addEventListener("mousedown", (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY

})
canvas.addEventListener("mouseup", (e) => {
    isPressed = false

    x = undefined
    y = undefined

})

canvas.addEventListener("mousemove", (e) => {

    if(isPressed === true) {
        const x2 = e.offsetX
        const y2 = e.offsetY


        drawCirlce(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }

})

function drawCirlce(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function updateSizeOnScreen() {
    sizes.innerText = size
}

colorPalette.addEventListener("change", (e) => {
    color = e.target.value
})

incBtn.addEventListener("click", () => {
    size += 5

    if(size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})
decBtn.addEventListener("click", () => {
    size -= 5

    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})


clear.addEventListener("click", () => ctx.clearRect(0, 0, canvas.width, canvas.height))
