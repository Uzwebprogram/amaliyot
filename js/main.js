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

let foodMarket = document.querySelector(".food-market")

function renderFood(data , father) {
    data.map(elem =>{
        let box = document.createElement("div")
        box.classList.add("Cardbox")
        let img = document.createElement("img")
        img.classList.add("cardImg")
        let title = document.createElement("h3")
        title.classList.add("cardTitle")
        let post = document.createElement("p") 
        post.classList.add("cardpost")
        let button = document.createElement("button")
        button.classList.add("cardbutton")
        button.textContent = "В корзину"
        title.textContent = elem.title
        post.textContent = elem.sum
        img.setAttribute("src" , elem.imgUrl)
        box.appendChild(img)
        box.appendChild(post)
        box.appendChild(title)
        box.appendChild(button)
        father.appendChild(box)
    })
}
renderFood(food , foodMarket)