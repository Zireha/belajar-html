const regex = /[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const input = document.getElementById("text-input")


function checkPalindrome(words){


  let original = words.toLowerCase();
  let reversed = words.toLowerCase().split("").reverse().join("");

  console.log(original)
  if(original == reversed){
    return "a palindrome";
  } else {
    return "not a palindrome";
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

  if(input.value == ""){
    alert("Please input a value");
    return;
  }

  obtainResult(input.value)
});