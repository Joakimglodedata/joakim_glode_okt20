// setter opp consttanter for dei mest brukte funksjonene så eg slipper å skrive ut heile kvar gang
const sel = (selector) => document.querySelector(selector);
const cons = (selector) => console.log(selector);
// sel(cons(".flexCenterRow"))
// console.log(document.querySelector(".flexCenterRow"))
// Tar vekk form funksjoner så siden ikkje laster seg selv inn igjen
sel("#form").addEventListener('submit', function (e) {
    e.preventDefault()});

const fruitBowl = []


fruitBowl.push("Orange")
fruitBowl.push("Banana")
fruitBowl.push

//Setter opp konstanter som blir brukt videre
const shoppingItem = sel("#shoppingItem")
const pushB = sel("#pushB")
const popB = sel("#popB")
const unshiftB = sel("#unshiftB")
const shiftB = sel("#shiftB")
const displayItems = sel("#displayItems")
const restart = sel("#restart")

displayItems.textContent = fruitBowl.join(", ")


restart.addEventListener("click", function () {
    const shoppingItemValue = shoppingItem.value
    while (fruitBowl.length > 0) {
        fruitBowl.pop()
    }
})

pushB.addEventListener("click", function () {
    const shoppingItemValue = shoppingItem.value
    if (shoppingItemValue) {
        fruitBowl.push(shoppingItemValue)
        displayItems.textContent = fruitBowl.join(", ")
        shoppingItem.value = ""
        displayEmptyF ()
    } else {
        cons("Fyll med innhold")
    }
})  

popB.addEventListener("click", function () {
    fruitBowl.pop()
    displayItems.textContent = fruitBowl.join(", ")
    displayEmptyF ()
})

unshiftB.addEventListener("click", function () {
    const shoppingItemValue = shoppingItem.value
    if (shoppingItemValue) {
        fruitBowl.unshift(shoppingItemValue)
        displayItems.textContent = fruitBowl.join(", ")
        shoppingItem.value = ""
        displayEmptyF ()
    } else {
        cons("Fyll med innhold")
    }
})

shiftB.addEventListener("click", function () {
    fruitBowl.shift()
    displayItems.textContent = fruitBowl.join(", ")
    displayEmptyF ()
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const shoppingItemValue = shoppingItem.value
        if (shoppingItemValue) {
            fruitBowl.push(shoppingItemValue)
            displayItems.textContent = fruitBowl.join(", ")
            shoppingItem.value = ""
            displayEmptyF ()
        } else {
            cons("Fyll med innhold")
        }
    }
})

function displayEmptyF () { 
    const displayEmpty = sel("#displayEmpty")
    if (fruitBowl.length === 0 ) { 
        displayEmpty.textContent = "Listen er tom"
        cons("if fungerer")
    } else {
        displayEmpty.textContent = ""
        cons("else fungerer")
    }
}

displayEmptyF ()
