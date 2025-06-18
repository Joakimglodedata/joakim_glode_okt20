// setter opp consttanter for dei mest brukte funksjonene så eg slipper å skrive ut heile kvar gang
const sel = (selector) => document.querySelector(selector);
// Ser at å sette opp console.log på denne måten får javascript til å gjøre alle consol kommandoer på denne linjen, plagsomt men levbart
const cons = (selector) => console.log(selector);

// Tar vekk form funksjoner så nettsiden ikkje laster seg selv inn igjen
sel("#form").addEventListener('submit', function (e) {
    e.preventDefault()});

const shoppingList = []
cons(shoppingList.length)


//Setter opp konstanter for html elementer med id
const shoppingItem = sel("#shoppingItem")
const pushB = sel("#pushB")
const popB = sel("#popB")
const unshiftB = sel("#unshiftB")
const shiftB = sel("#shiftB")
const displayItems = sel("#displayItems")
const restart = sel("#restart")
const displayEmpty = sel("#displayEmpty")
const up = sel("#up")
const deleter = sel("#deleter")
const down = sel("#down")
const displayContainer = sel("#displayContainer")


restart.addEventListener("click", function () {
// Blir kvitt siste elementet fra shoppingList arrayen og kjører så lenge den har ein lengde over 0
// Har ingen failsafe for å hindre uendelige loops, men ser ikkje korleis det kan hende her så bare håper eg har rett :)
    while (shoppingList.length > 0) {
        shoppingList.pop()
        cons(shoppingList.length)
        displayEmptyF ()
    }
})


// 
// 

// Hovedknapper
// Neste 4 knappene fungerer ganske likt så forklarer kun denne. 
pushB.addEventListener("click", function () { // Eventlistener som lytter etter klikk på elementet før det kjører ein funksjon
    const shoppingItemValue = shoppingItem.value
    // Kjører kun om shoppingItem har verdi i seg
    if (shoppingItemValue) {
        shoppingList.push(shoppingItemValue) // Dytter ShoppingItem verdien inn i ShoppingList arrayen
        shoppingItem.value = "" // Reseter verdien til Shoppingitem
        displayEmptyF () // Kjører ein funksjon ansvarlig for display oppdatering
    } else {
        cons("Fyll med innhold") // Feilmelding 
    }
})  

popB.addEventListener("click", function () {
    shoppingList.pop()
    displayEmptyF ()
})

unshiftB.addEventListener("click", function () {
    const shoppingItemValue = shoppingItem.value
    if (shoppingItemValue) {
        shoppingList.unshift(shoppingItemValue)
        shoppingItem.value = ""
        displayEmptyF ()
    } else {
        cons("Fyll med innhold")
    }
})

shiftB.addEventListener("click", function () {
    shoppingList.shift()
    displayEmptyF ()
})

// Med å ta vekk form funksjoner tok eg også vekk evnen til å presse enter, gjør det samme som push knappen men blir aktivert av å presse enter
// Blir aktivert av kvart knappetrykk, sjekker om trykket var enter og om textfeltet er i bruk før den endrer noe
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && document.activeElement === shoppingItem) {
        const shoppingItemValue = shoppingItem.value
        if (shoppingItemValue) {
            shoppingList.push(shoppingItemValue)
            shoppingItem.value = ""
            displayEmptyF ()
        } else {
            cons("Fyll med innhold")
        }
    }
})

// Oppdaterer displayItems og sjekker om shoppingList er tom for å endre verdien til displayEmpty
function displayEmptyF () { 
    displayItems.textContent = shoppingList.join(", ")
    if (shoppingList.length === 0 ) { 
        displayEmpty.textContent = "Listen er tom"
    } else {
        displayEmpty.textContent = ""
    }
}


// 
// 


// Selector 
let selectorId = 0 // Nummer som blir brukt for utvalg av å slette spesifikke element i shoppingList

up.addEventListener("click", function () {
    if (!sel(".highlighted")) { // Kjører kun om ingen elementer allerede er utvalgt 
        selectorId = shoppingList.length - 1 // Setter Id så det samsvarer med siste elementet i shoppingList
        selectorHighlighter () // Funksjon som er ansvarlig for å synligjøre kva som er utvalgt
    }
    else if (selectorId > 0) { // Kjører kun om Id er over 0 og senker verdien med 1  
        selectorId--
        selectorHighlighter ()
    }
})

down.addEventListener("click", function () {
    if (!sel(".highlighted")) {
        selectorId = 0 // Setter Id så det samsvarer med første elementet i shoppingList
        selectorHighlighter ()
    } else if (selectorId < shoppingList.length - 1) { // Kjører kun om Id er 
        selectorId++
        selectorHighlighter ()
    }
})

deleter.addEventListener("click", function () {
    if (sel(".highlighted")) { // Sjekker om noe er synlig utvalgt så man ikkje kan slette ting uten at det er tydelig kva man sletter
        shoppingList.splice(selectorId, 1) // Bruker selectorId og fjerner samsvarende element fra shoppingList
        displayEmptyF ()
        selectorController ()
    }
})

function selectorController () {
    if (selectorId > shoppingList.length - 1) { // Passer på at selectorId forhåpentligvis aldri blir meir en 1 høgere en shoppingListlength 
        selectorId--
    }
}

function selectorHighlighter () {
        const text = displayItems.textContent;
        const wrappedText = text.replace( // Bruker .replace for å erstate deler av teksten med den samme teksten + ein span rundt seg
        shoppingList[selectorId], // Teksten som blir bytta ut er valgt ut med selectorId og samsvarende tekst i shoppingList 
        `<span class="highlighted">${shoppingList[selectorId]}</span>` // highlighted classen på <span> er det som gjør at vi kan sjå teksten som selectorId samsvarer med
        );
        displayItems.innerHTML = wrappedText; // Eit stort problem med denne løsningen er at den highlighter den første tilsvarende teksten, ikkje nødvendigvis teksten som faktisk blir sletta i arrayen
        // Ein mye bedre løsning ville vore å bruke .forEach eller loop for å lage eit nytt element for kvar indeks i arrayen istedet for eit tekst element, men eg likte utfordringen av å lage ein highilghter for ein blokk av tekst siden det var eit nytt problem å løse

}



// gjør testing lettare 
shoppingList.push("Melk")
shoppingList.push("Appelsin juice")
shoppingList.push("Appelsin")
// shoppingList.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias nesciunt labore eveniet qui necessitatibus eius eligendi velit! Delectus tempore, numquam dolores eveniet minus repudiandae tempora laudantium repellendus in maiores.")
shoppingList.push("Eg elsker banana")
shoppingList.push("Banana")
shoppingList.push("Banana")

displayEmptyF ()
// selectorHighlighter ()
