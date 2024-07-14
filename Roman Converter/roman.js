const romanNumber = [
{value: 1, roman: "I"},
{value: 4, roman: "IV"},
{value: 5, roman: "V"},
{value: 9, roman: "IX",},
{value: 10, roman: "X"},
{value: 40, roman: "XL"},
{value: 50, roman: "L"},
{value: 90, roman: "XC"},
{value: 100, roman: "C"},
{value: 400, roman: "CD"},
{value: 500, roman: "D"},
{value: 900, roman: "CM"},
{value: 1000, roman: "M"}
]

const a = 5

// console.log(romanNumber[])

for(let i = 0; i<romanNumber.length-1; i++){
    if(a == romanNumber[i].value){
        console.log(romanNumber[i])
    }
}

