const regex = /[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const input = document.getElementById("text-input")


function checkPalindrome(words){

  const original = words
  const reversed = words.split("").reverse().join("");

  console.log(original)
  if(original == reversed){
    return "is palindrome";
  } else {
    return "is not palindrome";
  }
};

function removeSpace(textInput){
  return textInput.replace(regex, '')
};

function obtainResult(word){
  return checkPalindrome(removeSpace(word))
};

let palindromeResult = checkBtn.addEventListener("click", obtainResult(input.value))
result.innerHTML = `${input.value} is ${palindromeResult}`