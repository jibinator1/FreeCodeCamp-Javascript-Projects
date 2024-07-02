const userInput =  document.getElementById("number");
const output =  document.getElementById("output");

function romanToInteger() {
    let number = userInput.value; 
    if (userInput.value == ""){
        output.textContent = "Please enter a valid number";
    }
    else if(userInput.value < 0){
        output.textContent = "Please enter a number greater than or equal to 1";
    }
    else if (userInput.value > 3999){
        output.textContent = "Please enter a number less than or equal to 3999";
    }
    else{
        let result = "";
        number = number.toString();
        number = number.replace(/^0+/, '');
        number = number.split('');
        if (number.length == 3) {
            number[3] = number[2];
            number[2] = number[1];
            number[1] = number[0];
            number[0] = "0";
        }

        if (number.length == 2) {
            number[2] = number[0];
            number[3] = number[1];
            number[1] =  "0";
            number[0] = "0";
        }

        if (number.length == 1) {
            number[3] = number[0];
            number[2] = "0";
            number[1] =  "0";
            number[0] = "0";
        }
        
        const thousands = Number(number[0]);
        const hundreds = Number(number[1]);
        const tens = Number(number[2]);
        const ones = Number(number[3]);
        console.log(thousands);
        console.log(hundreds);
        console.log(tens);
        console.log(ones);

        for (let i = 0; i < thousands; i++) { 
            result +="M";
        }


        if (hundreds == 9){
            result +="CM"
        }
        else if(hundreds == 5 || hundreds == 6||hundreds == 7||hundreds == 8){
            result +="D";
            for (let i = 5; i < hundreds; i++) {
                result +="C";
            }
        }
        else if(hundreds == 4){
            result +="CD";
        }
        else if(hundreds == 1||hundreds ==2||hundreds == 3){
            for (let i = 0; i < hundreds; i++) {
                result +="C";
            }
        }


        if (tens == 9){
            result +="XC";
        }
        else if(tens == 5 || tens == 6||tens == 7||tens == 8){
            result +="L";
            for (let i = 5; i < tens; i++) {
                result +="X";
            }
        }
        else if(tens == 4){
        result +="XL";
        }
        else if(tens == 1 || tens == 2||tens == 3){
            for (let i = 0; i < tens; i++) {
                result +="X";
            }
        }


        if (ones == 9){
            result +="IX";
        }
        else if(ones == 5 || ones == 6||ones == 7||ones == 8){
            result +="V";
            if(ones == 6||ones == 7||ones == 8){
                for (let i = 5; i < ones; i++) {
                    result +="I";
                }
            }
        }
        else if(ones == 4){
            result +="IV";
        }
        else if(ones == 1 || ones == 2||ones == 3){
            for (let i = 0; i < ones; i++) {
                result +="I";
            }
        }
        output.textContent = `${result}`;
    }
}