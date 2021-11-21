let modal_closer = document.querySelector(".close-modal-x")
let modal = document.querySelector(".m-modal")
let modal_button_open = document.querySelector(".header-menu")

modal_button_open.addEventListener("click", () => {
    modal.style.right = "0%"
})
modal_closer.addEventListener("click", () => {
    modal.style.right = "-100%"
})

const btns = document.querySelectorAll("[data-target]");
const close_btn = document.querySelectorAll(".regist-modal--header-close");
const overlay = document.querySelector("#overlay")

btns.forEach((btn) =>{
    btn.addEventListener("click" , () => {
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active")
    });
});
close_btn.forEach((btn) =>{
    btn.addEventListener("click" , () => {
        document.querySelector(btn.dataset.target).classList.remove("active");
        overlay.classList.remove ("active")
    });
});