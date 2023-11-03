const NumBerOne = document.getElementById("one")
const NumBerTwo = document.getElementById("two")
const NumBerThree = document.getElementById("three")
const NumBerFour = document.getElementById("four")
const NumBerFive = document.getElementById("five")
const NumBerSix = document.getElementById("six")
const NumBerSeven = document.getElementById("seven")
const NumBerEight = document.getElementById("eight")
const NumBerNine = document.getElementById("nine")
const NumBerZero =document.getElementById("zero")
const Minus = document.getElementById("minus")
const Add = document.getElementById("plus")
const Divide = document.getElementById("divide")
const Times = document.getElementById("times")
const Equals = document.getElementById("equals")
const Reset = document.getElementById("resets")
const Screens = document.getElementById("screens")
const Points = document.getElementById("dot")



let One = 1
let Two = 2
let Three = 3
let Four = 4
let Five = 5
let Six = 6
let Seven = 7
let Eight = 8
let Nine = 9
let Zero = 0
let Dot = "."
let Subtract = "-"
let Division = "/"
let Addition = "+"
let Multiply = "*"
let Equalto = "="
let Clear = ""
let CalCulate = "+,-,/,*"


NumBerOne.addEventListener("click",()=>{
    let one = One
    screens.innerText += one
})

NumBerTwo.addEventListener("click",()=>{
    let two = Two
    screens.innerText += two
})

NumBerThree.addEventListener("click",()=>{
    let three = Three
    screens.innerText += three
})

NumBerFour.addEventListener("click",()=>{
    let four = Four
    screens.innerText += four
})

NumBerFive.addEventListener("click",()=>{
    let five = Five
    screens.innerText += five
})

NumBerSix.addEventListener("click",()=>{
    let six = Six
    screens.innerText += six
})

NumBerSeven.addEventListener("click",()=>{
    let seven = Seven
    screens.innerText += seven
})

NumBerEight.addEventListener("click",()=>{
    let eight = Eight
    screens.innerText += eight
})

NumBerNine.addEventListener("click",()=>{
    let nine = Nine
    screens.innerText += nine
})
NumBerZero.addEventListener("click",()=>{
    let zero = Zero
    screens.innerText += zero
})

Points.addEventListener("click",()=>{
    let dot = Dot
    screens.innerText += dot
})

Add.addEventListener("click",()=>{
    let adds = Addition
    screens.innerText += adds
})

Minus.addEventListener("click",()=>{
    let minus = Subtract
    screens.innerText += minus
})

Divide.addEventListener("click",()=>{
    let divide = Division
    screens.innerText += divide
})

Times.addEventListener("click",()=>{
    let times = Multiply
    screens.innerText += times
})

Reset.addEventListener("click",()=>{
    let clear = Clear
    screens.innerText = clear
})

Equals.addEventListener("click",()=>{
    if (screens.innerText === ""){
        screens.innerText = ""
    }
    else {
        let answer = eval(screens.innerText)
        screens.innerText = answer
    }

})



// let equal = Equalto
// screens.innerText = equal