module.exports = function toReadable (number) {
    let stringNumber = number.toString();
    return [...stringNumber].reduce((acc, currentDigit, index, array) => {
        const hundredPlace = array.length - index === 3;
        const decimalPlace = array.length - index === 2;
        const unitPlace = array.length - index === 1;
        const previousDigit = array[index-1];
        if (hundredPlace) return [...acc, hundredDigit(currentDigit)];

        if (decimalPlace && currentDigit !== "0" && currentDigit !== "1") {
            return [...acc, decimalDigit[currentDigit]];
        }

        if (unitPlace && previousDigit === "1") {
            return [...acc, decimal1Digit[currentDigit]];
        }

        if (unitPlace && currentDigit !== "0" || array.length === 1) {
            return [...acc, unitDigit[currentDigit]];
        }

        if (unitPlace && currentDigit === "0") {
            return [...acc];
        }
        else {
            return acc;
        }

    }, []).join(" ");
}



const unitDigit = {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
};

const decimal1Digit = {
    "0": "ten",
    "1": "eleven",
    "2": "twelve",
    "3": "thirteen",
    "4": "fourteen",
    "5": "fifteen",
    "6": "sixteen",
    "7": "seventeen",
    "8": "eighteen",
    "9": "nineteen",
};

const decimalDigit = {
    "0": "",
    "1": "",
    "2": "twenty",
    "3": "thirty",
    "4": "forty",
    "5": "fifty",
    "6": "sixty",
    "7": "seventy",
    "8": "eighty",
    "9": "ninety",
};

function hundredDigit (digit) {
    return `${unitDigit[digit]} hundred`;
}
