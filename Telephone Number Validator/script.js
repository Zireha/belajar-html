const phoneRegex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/
const numInput = document.getElementById("user-input")
const checkBtn = document.getElementById("check-btn")
const outputContainer = document.getElementById("results-div")
const clearBtn = document.getElementById("clear-btn") // Diperbaiki dari getElementById9

function isValidNumber(number) {
    if (phoneRegex.test(number)) {
        return `Valid US number: ${number}`
    } else {
        return `Invalid US number: ${number}`
    }
}

function appendResult(num) {
    const element = document.createElement("p");
    element.textContent = isValidNumber(num);
    outputContainer.appendChild(element)
}

checkBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (numInput.value === "") {
        alert("Please provide a phone number");
    } else {
        appendResult(numInput.value)
        numInput.value = ""
    }
})

clearBtn.addEventListener('click', (e) => {
    outputContainer.textContent = ""
})
