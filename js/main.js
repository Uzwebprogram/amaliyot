let modal_closer = document.querySelector(".close-modal-x")
let modal = document.querySelector(".m-modal")
let modal_button_open = document.querySelector(".header-menu")

modal_button_open.addEventListener("click", () => {
    modal.style.right = "0%"
})
modal_closer.addEventListener("click", () => {
    modal.style.right = "-100%"
})