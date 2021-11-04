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

/***********Event buttons ***************/
btnNextOne.addEventListener("click", function(){
    addressPage.style.display = "flex";
    contactPage.style.display = "none";
})

btnNextTwo.addEventListener("click", function(){
    paymentPage.style.display = "flex";
    addressPage.style.display = "none";
})

sign.addEventListener("click", function(){
    successPage.style.display = "flex";
    paymentPage.style.display = "none";
})

previousOne.addEventListener("click", function(){
    contactPage.style.display = "flex";
    addressPage.style.display = "none";
})

previousTwo.addEventListener("click", function(){
    addressPage.style.display = "flex";
    paymentPage.style.display = "none";
})
