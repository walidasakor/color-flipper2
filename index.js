const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const text= document.getElementById("color")
const btn= document.getElementById ("btn")
btn.addEventListener('click', function(){
    document.body.style.backgroundColor=colors[getRandomColor()]
    text.textContent=colors[getRandomColor()]
})

function getRandomColor(){
    return Math.floor(Math.random()*colors.length)
}