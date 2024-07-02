const phoneNumber = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div');

function validatePhoneNumber() {
    if (phoneNumber.value == ""){
        alert("Please provide a phone number");
    }
    else{
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

    if (phoneRegex.test(phoneNumber.value)) {
        resultsDiv.textContent = `Valid US number: ${phoneNumber.value}`;
    } else {
        resultsDiv.textContent = `Invalid US number: ${phoneNumber.value}`;
    }
}
}
function clearInput() {
    document.getElementById('user-input').value = '';
    document.getElementById('results-div').textContent = '';
    }

