const userInput =  document.getElementById("text-input");
const result =  document.getElementById("result");
function checkPalindrome() {
    if (userInput.value == ""){
        alert("Please input a value");
    }
    let textCheck = "";
    let text = userInput.value;
    text = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    for (let i = text.length - 1; i >= 0; i--) {
        textCheck+=text[i];

    }
    
    if (text == textCheck) {
        result.textContent = `${userInput.value} is a palindrome`;
    }
    else{
        result.textContent = `${userInput.value} is not a palindrome`;
    }
}