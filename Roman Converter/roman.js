const convertBtn = document.getElementById("convert-btn")
const inputNumber = document.getElementById('number')
const body = document.getElementById("main")
const outText = document.getElementById("output")
const outContainer = document.getElementById("output-container")
function integerToRoman(number) {

    if (number >= 1000) {
        return "M" + integerToRoman(number - 1000);
    }
    if (number >= 900) {
        return "CM" + integerToRoman(number - 900);
    }
    if (number >= 500) {
        return "D" + integerToRoman(number - 500);
    }
    if (number >= 400) {
        return "CD" + integerToRoman(number - 400);
    }
    if (number >= 100) {
        return "C" + integerToRoman(number - 100);
    }
    if (number >= 90) {
        return "XC" + integerToRoman(number - 90);
    }
    if (number >= 50) {
        return "L" + integerToRoman(number - 50);
    }
    if (number >= 40) {
        return "XL" + integerToRoman(number - 40);
    }
    if (number >= 10) {
        return "X" + integerToRoman(number - 10);
    }
    if (number >= 9) {
        return "IX" + integerToRoman(number - 9);
    }
    if (number >= 5) {
        return "V" + integerToRoman(number - 5);
    }
    if (number >= 4) {
        return "IV" + integerToRoman(number - 4);
    }
    if (number >= 1) {
        return "I" + integerToRoman(number - 1);
    }

    return "";
}

function update(alertText) {
    outContainer.classList.add('block')
    outContainer.classList.remove('hidden')
    outText.innerText = alertText;
    inputNumber.value = ""
}

convertBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let number = parseInt(inputNumber.value)

    if (number >= 4000) {
        update("Please enter a number less than or equal to 3999")
        return
    } else
        if (number <= 0) {
            update("Please enter a number greater than or equal to 1")
            return
        } else
            if (!number) {
                update("Please enter a valid number")
                return
            }

    let result = integerToRoman(number)

    outContainer.classList.add('block')
    outContainer.classList.remove('hidden')
    outText.innerText = result
})

