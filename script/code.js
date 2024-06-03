function convert() {
    let input = document.querySelector('[input]').value * 60
    document.querySelector('[display]').value = input
}

//---------------------------------------------------------------------------
function calcTriangle() {
    let area = document.querySelector('[base]').value * (+document.querySelector('[height]').value / 2)
    document.querySelector('[display1]').value = area
}

// --------------------------------------------------------------------------
let arrAddUp = [2, 5, 63, 5, 82, 27, 93, 34]

console.log(arrAddUp.reduce((c, n) =>
    c + n))

//----------------------------------------------------------------------------
function ageToDays() {
    let days = document.querySelector('[age]').value * 365
    document.querySelector('[display2]').value = days + " days"
}

//----------------------------------------------------------------------------
function minMax() {
    let arrMInMax = [3, 7, 88, 3, 7, 33, 78, 3, 228]
    console.log(Math.min(...arrMInMax))
    console.log(Math.max(...arrMInMax))
}
minMax()

//----------------------------------------------------------------------------
function interest() { //compounded interest
    let P = 10000
    let i = 10 / 100
    let n = 2

    let interest = (P * (1 + i) ** n).toFixed(2)
    console.log(interest)
}
interest()

//----------------------------------------------------------------------------
function countingTruthy() {
    let arrTruth = [true, true, false, true, false, true, false, false, false, true]
    let count = 0
    console.log(arrTruth)

    for (let i = 0; i < arrTruth.length; i++) {
        if (arrTruth[i] === true) {
            count += 1
        }
    }
    console.log(count)
}
countingTruthy()

//----------------------------------------------------------------------------
let f = 0

function nextNum() {
    let arrNext = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    document.querySelector('[display3]').value = arrNext[f]
    f += 1
    if (f == arrNext.length + 1) {
        f = 0
        document.querySelector('[display3]').value = "No more numbers"
    }
}

//----------------------------------------------------------------------------

const hex2RBG = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return {r, g, b}
}
console.log(hex2RBG("#A34F76"))