/************ Pages **************/
const contactPage = document.querySelector(".contact-page")
const addressPage = document.querySelector(".address-page")
const paymentPage = document.querySelector(".payment-page")
const successPage = document.querySelector(".success-page")

/********** Back button**************/
const previousOne = document.querySelector(".previous")
const previousTwo = document.querySelector(".previous-2")

/********** Next buttons *****************/
const btnNextOne = document.querySelector(".next-1")
const btnNextTwo = document.querySelector(".next-2")

/********** Sign button ******************/
const sign = document.querySelector(".sign")

/********** Form ******************/
const formElement = document.querySelector(".form")
const nameElem = document.querySelector(".name")
const fullNameElem = document.querySelector(".fullname")
const emailElem = document.querySelector(".email")
const passwordElem = document.querySelector(".password")
const password2Elem = document.querySelector(".password2")

let validate = {
    "exists": (v) => v.length != 0,
    "email": (v) => validateEmail(v),
    "password": (v1, v2) => v1 == v2 && parseInt(v1).length > 5,
}

let elems = [contactPage, addressPage, paymentPage, successPage];
let state = 0

let validations = [
    () => validate["exists"](nameElem.value) && validate["exists"](fullNameElem.value) && validate['email'](emailElem.value) && validate['password'](passwordElem.value, password2Elem.value)
]

function next() {
    if (!validations[state]()) {
        alert("invalido")
        return
    }

    if (state < 4) {
        state++;
    }

    showElem(state);
}

function prev() {
    if (state > 0) {
        state--;
    }
    showElem(state);
}

function showElem(state) {
    for (let i in elems) {
        if (i == state) {
            elems[i].style.display = "flex";
            continue
        }
        elems[i].style.display = "none";
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/***********Event buttons ***************/
// btnNextOne.addEventListener("click", function(){
//     addressPage.style.display = "flex";
//     contactPage.style.display = "none";
// })

// btnNextTwo.addEventListener("click", function(){
//     paymentPage.style.display = "flex";
//     addressPage.style.display = "none";
// })

// sign.addEventListener("click", function(){
//     successPage.style.display = "flex";
//     paymentPage.style.display = "none";
// })

// previousOne.addEventListener("click", function(){
//     contactPage.style.display = "flex";
//     addressPage.style.display = "none";
// })

// previousTwo.addEventListener("click", function(){
//     addressPage.style.display = "flex";
//     paymentPage.style.display = "none";
// })
