console.log("Hello World")

const navList = document.getElementById("nav-list")
const menuToggle = document.getElementById("hamburger-menu")

console.log(navList)
console.log(menuToggle)

let isEnabled = false

menuToggle.addEventListener("click", function () {
    // console.log("Clicked")
    if (!isEnabled) {
        navList.classList.add("enabled")
        isEnabled = true
    } else{
        navList.classList.remove("enabled")
        isEnabled = false
    }
})