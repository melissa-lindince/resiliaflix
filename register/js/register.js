var btnNext = document.querySelector(".next-1")
var slidePage = document.querySelector(".form")

btnNext.addEventListener("click", function(){

slidePage.style.marginLeft = "-100%"
})

var nextTwo = document.querySelector(".next-2")

nextTwo.addEventListener("click", function(){

slidePage.style.marginLeft = "-200%";
})

var previous = document.querySelector(".previous")
previous.addEventListener("click", function(){

slidePage.style.marginLeft = "1%"
})

var previousTwo = document.querySelector(".previous-2")
previousTwo.addEventListener("click", function(){

slidePage.style.marginLeft = "-100%"

})

var sign = document.querySelector(".sign")
sign.addEventListener("click", function(){
slidePage.style.marginLeft = "-300%"

})



