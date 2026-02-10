//Random Password generator

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const LowerCase = `abcdefghijklmnopqrstuvwxyz`;
    const UpperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const Numbers = `1234567890`;
    const Symbols = `~!@#$%^&*()_+{}|:;'[]"<>?,./`;
    let allowedchar = "";
    let Password = "";

    allowedchar += includeLowerCase ? LowerCase : "";
    allowedchar += includeNumbers ? Numbers : "";
    allowedchar += includeSymbols ? Symbols : "";
    allowedchar += includeUpperCase ? UpperCase : "";
    if (length <= 0) {
        return "Please Enter at least one character";
    }
    if (allowedchar.length === 0) {
        return "Please enter at least one set of character ";
    }
    for (let index = 0; index < length; index++) {
        const Randomindex = Math.floor(Math.random() * allowedchar.length);
        Password += allowedchar[Randomindex];
    }
    return Password
}

const PasswordLength = 10;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(PasswordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
console.log(`Generated Password : ${password}`);
