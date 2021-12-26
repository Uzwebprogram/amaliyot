let modal_closer = document.querySelector(".close-modal-x")
let modal = document.querySelector(".m-modal")
let modal_button_open = document.querySelector(".header-menu")



modal_closer.addEventListener("click" , () =>{
    modal.style.right = "-100%"
})
modal_button_open.addEventListener("click", () => {
    modal.style.right = "0%"
})
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
        let imagebox = document.createElement("i")
        let imageboxred = document.createElement("i")
        imagebox.setAttribute("class", "fa-regular fa-heart")
        imageboxred.style.cursor = "pointer"
        imagebox.style.cursor = "pointer"
        imagebox.addEventListener("click" , (e)=>{
            let id = e.target.dataset.uuid
            imageboxred.setAttribute("class" , "fa-solid fa-heart")
            imageboxred.style.color = "red"
            imagebox.style.display = "none"
            imageboxred.style.display = "block"
            imageboxred.style.width = "24px"
            imageboxred.style.height = "24px"
            if(imageboxred.style.color == 'red' ) {
                console.log(box);
                // window.localStorage.setItem("tokenBox" , JSON.stringify(father.box))
            }else if (imageboxred.style.display  == "none") {
                // window.localStorage.removeItem("tokenBox")
                remove(box);
            }
        })
        imageboxred.addEventListener("click" , ()=>{
            imagebox.style.display = "block"
            imageboxred.style.display = "none"
            imagebox.style.width = "24px"
            imagebox.style.height = "24px"

        })
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
        box.appendChild(imagebox)
        box.appendChild(imageboxred)
        box.appendChild(img)
        box.appendChild(post)
        box.appendChild(title)
        box.appendChild(button)

        father.appendChild(box)
    })
}
renderFood(food , foodMarket)