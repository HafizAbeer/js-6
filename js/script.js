function inputValue() {
    return document.getElementById("inputText").value
}

function showOutput(output) {
    document.getElementById("output").innerHTML = output
}

function clearOutput() {
    document.getElementById("output").innerHTML = " "
}

function roundNumber() {
    let number = inputValue()

    if (!number) {
        alert("Enter a number")
    }

    let roundedNumber = Math.round(number)

    showOutput(roundedNumber)
}

function ceilNumber() {
    let number = inputValue()

    if (!number) {
        alert("Enter a number")
    }

    let ceiledNumber = Math.ceil(number)

    showOutput(ceiledNumber)
}

function floorNumber() {
    let number = inputValue()

    if (!number) {
        alert("Enter a number")
    }

    let flooredNumber = Math.floor(number)

    showOutput(flooredNumber)
}

function generateRandomNumber() {

    let generatedNumber = Math.random()

    showOutput(generatedNumber)
}

function throwDice() {

    let randomNumber = Math.random()

    randomNumber = (randomNumber * 6) + 1

    let dice = Math.floor(randomNumber)

    showOutput(dice)
}

function generatePassword() {

    let randomString = ""

    let possibleString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*~?/\|"

    let limit = 16

    for (let i = 0; i < limit; i++) {
        let randomNumber = Math.random()

        randomString += possibleString.charAt(Math.floor(randomNumber * possibleString.length))
    }

    showOutput(randomString)
}

function convertingStings() {
    let num = "251.55"

    console.log(typeof (num))

    num = Number(num)

    console.log(typeof (num))

    showOutput(num)
}

function controlLength() {
    let num = inputValue()

    if (!num) {
        alert("Enter a number")
    }

    console.log(typeof (num))

    num = Number(num)

    console.log(typeof (num))

    num = num.toFixed(2)

    showOutput(num)

}

function calculateGST() {
    let value = prompt("Enter bill amount:")

    value = Number(value)

    let taxPercentage = prompt("Enter tax percentage:")

    let tax = (value * taxPercentage / 100)

    tax = Number(tax.toFixed(2))

    let total = value + tax

    let html = "Bill is: " + value + "<br /> Your tax is: " + tax + "<br /> Bill including tax: " + total

    showOutput(html)

}