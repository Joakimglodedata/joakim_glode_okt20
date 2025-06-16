// setter opp consttanter for dei mest brukte funksjonene så eg slipper å skrive ut heile kvar gang
const sel = (selector) => document.querySelector(selector);
// Ser at å sette opp console.log på denne måten får javascript til å gjøre alle consol kommandoer på denne linjen, plagsomt men levbart
const cons = (selector) => console.log(selector);

// Tar vekk form funksjoner så nettsiden ikkje laster seg selv inn igjen
sel("#form").addEventListener('submit', function (e) {
    e.preventDefault()});

const fruitBowl = []
cons(fruitBowl.length)



//Setter opp konstanter som blir brukt videre
const shoppingItem = sel("#shoppingItem")
const pushB = sel("#pushB")
const popB = sel("#popB")
const unshiftB = sel("#unshiftB")
const shiftB = sel("#shiftB")
const displayItems = sel("#displayItems")
const restart = sel("#restart")
const displayEmpty = sel("#displayEmpty")


restart.addEventListener("click", function () {
// Blir kvitt siste elementet fra fruitBowl arrayen og kjører så lenge den har ein lengde over 0
// Har ingen failsafe for å hindre uendelige loops, men ser ikkje korleis det kan hende her så bare håper eg har rett :)
    while (fruitBowl.length > 0) {
        fruitBowl.pop()
        cons(fruitBowl.length)
        displayEmptyF ()
    }
})

pushB.addEventListener("click", function () {
    const shoppingItemValue = shoppingItem.value
    if (shoppingItemValue) {
        fruitBowl.push(shoppingItemValue)
        shoppingItem.value = ""
        displayEmptyF ()
    } else {
        cons("Fyll med innhold")
    }
})  

popB.addEventListener("click", function () {
    fruitBowl.pop()
    displayEmptyF ()
})

unshiftB.addEventListener("click", function () {
    const shoppingItemValue = shoppingItem.value
    if (shoppingItemValue) {
        fruitBowl.unshift(shoppingItemValue)
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

// Med å ta vekk form funksjoner tok eg også vekk evnen til å presse enter, gjør det samme som push knappen men blir aktivert av å presse enter
// Blir aktivert av kvart knappetrykk, sjekker om trykket var enter og om textfeltet er i bruk før den endrer noe
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && document.activeElement === shoppingItem) {
        const shoppingItemValue = shoppingItem.value
        if (shoppingItemValue) {
            fruitBowl.push(shoppingItemValue)
            shoppingItem.value = ""
            displayEmptyF ()
        } else {
            cons("Fyll med innhold")
        }
    }
})

// Oppdaterer displayItems og sjekker om fruitBowl er tom for å endre verdien til displayEmpty
function displayEmptyF () { 
    displayItems.textContent = fruitBowl.join(", ")
    if (fruitBowl.length === 0 ) { 
        displayEmpty.textContent = "Listen er tom"
        cons("if fungerer")
    } else {
        displayEmpty.textContent = ""
        cons("else fungerer")
    }
}

fruitBowl.push("Orange")
fruitBowl.push("Banana")

displayEmptyF ()
