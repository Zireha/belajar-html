const regex = /[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const input = document.getElementById("text-input")


function checkPalindrome(words){

  const original = words
  const reversed = words.split("").reverse().join("");

  console.log(original)
  if(original == reversed){
    return "palindrome";
  } else {
    return "not palindrome";
  }
};

function removeSpace(textInput){
  return textInput.replace(regex, '')
};

function obtainResult(word){
  let res = checkPalindrome(removeSpace(word))
  const resultText = `${input.value} is ${res}`;
  result.innerText = resultText;
};
checkBtn.addEventListener("click", (event) =>{
  event.preventDefault();
  obtainResult(input.value)
});