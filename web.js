


const menubutton = document.querySelector(".menubtn")
const navlinks = document.querySelector(".nav-links")

menubutton.addEventListener("click", () => {
    navlinks.classList.toggle("mobile-menu")
})
