const phoneRegex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/
// const numInput = document.getElementById("num_input").value

function isValidNumber(number){
    if(phoneRegex.test(number) == true){
        return `Valid US number: ${number}`
    } else {
        return `Invalid US number: ${number}`
    }
}

console.log(isValidNumber("1(555)555-5555"))