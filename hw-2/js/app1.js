
const fiveDigitNumber = prompt("Enter a five-digit number:");

if (fiveDigitNumber.length !== 5 || isNaN(fiveDigitNumber)) {
    console.log("Please enter a valid five-digit number.");
} else {
    
    let divisor = 10000;
    let output = "";

    let tempNumber = parseInt(fiveDigitNumber);

    while (divisor >= 1) {
        const digit = (tempNumber / divisor) | 0; 
        tempNumber -= digit * divisor;
        divisor /= 10;
        
        output += digit;
        if (divisor >= 1) {
            output += " ";
        }
    }

    console.log("Digits of the five-digit number in the original order:", output);
}
