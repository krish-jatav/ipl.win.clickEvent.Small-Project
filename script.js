var rcb = document.querySelector("#rcb")
var csk = document.querySelector("#csk")
var mi = document.querySelector("#mi")
var final = document.querySelector("h2")


rcb.addEventListener("click", function() {
    final.innerHTML = "loading..."
    setTimeout(function() {
        final.innerHTML = "RCB🏆😲"
        final.style.color = "red"
    }, 1000)

})
csk.addEventListener("click", function() {
    final.innerHTML = "loading..."
    setTimeout(function() {
        final.innerHTML = "NO☹️"
        final.style.color = "yellow"
    }, 500)

})
mi.addEventListener("click", function() {
    final.innerHTML = "loading..."
    setTimeout(function() {
        final.innerHTML = "NO☹️"
        final.style.color = "blue"
    }, 500)

})