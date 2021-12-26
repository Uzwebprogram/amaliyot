//! registratisy login start 

let modal_registratisia = document.querySelector(".regist-modal--body-regist")
let modal_enter = document.querySelector(".regist-modal-enter")
let modal_enterClose = document.querySelector(".regist-modal--header-close-enter")
let next = document.querySelector(".regist-modal--body-next")
let modals = document.querySelector(".regist-modal")
let next_regist = document.querySelector(".regist-modal--body-next-enter")

modal_enterClose.addEventListener("click", ()=>{
    modal_enter.style.display = "none"
    modals.style.display = "block"
})
next.addEventListener("click", ()=>{
    modal_enter.style.display = "block"
    modals.style.display = "none"
})
next_regist.addEventListener("click" , ()=>{
    modal_enter.style.display = "none"
    modals.style.display = "block"
})
const btns = document.querySelectorAll("[data-target]");
const close_btn = document.querySelectorAll(".regist-modal--header-close");
const overlay = document.querySelector("#overlay")

// ! registratsiya login end

// ! back end api start

let regist_email = document.querySelector(".regist-modal--body-email")
let regist_password = document.querySelector(".regist-modal--body-paswoord")
let regsit_error = document.querySelector(".error-data")
let regist_button = document.querySelector(".regist-modal--body-regist")


regist_button.addEventListener("click" , ()=>{
    if (window.localStorage.getItem(regist_email.value ) ) {
        regsit_error.style.display = "block"

    }else{
        window.localStorage.setItem(regist_email.value , regist_password.value) 
        regist_email.value = ""
        regist_password.value = ""
        modals.style.display = "none"
        modal_enter.style.display = "block"
    }

})

let login_email = document.querySelector(".regist-modal--body-email-enter")
let login_paswoord = document.querySelector(".regist-modal--body-paswoord-enter")
let login_password_edit = document.querySelector(".regist-modal--body-padding-enter")
let login_button = document.querySelector(".regist-modal--body-regist-enter")
let login_error = document.querySelector(".error-data-login")
let login_class = document.querySelector(".modal-super-login")

let login_name = document.querySelector(".close-modal-x--button")
let regist_open_button = document.querySelector(".modal-super-login-button")
let imguser = document.querySelector(".img-user")

let imguserwork = document.querySelector(".userimg")
let userloginwork = document.querySelector(".userlogin-heading")
regist_open_button.addEventListener("click", () => {
    login_class.style.display = "none"
    overlay.style.display = "none"
    login_name.textContent = login_email.value
    imguser.style.display = "flex"
    userloginwork.textContent = login_email.value
    imguserwork.style.display = "flex"
})
login_button.addEventListener("click" ,() =>{
    if (window.localStorage.getItem(login_email.value)&& window.localStorage.getItem(login_email.value) == login_paswoord.value) {
        login_class.style.display  = "block"
        modal_enter.style.display = "none"
        modals.style.display = "none"
    }else{
        login_error.style.display = "block"
    }
})
// ! back end api end