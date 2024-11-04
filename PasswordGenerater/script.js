function generatePassword(length, includeChar, includeNumeric, includeSpecial) {
    const charCodes = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numeric: '0123456789',
        special: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    };

    let characterSet = '';
    if (includeChar) {
        characterSet += charCodes.lowercase + charCodes.uppercase;
    }
    if (includeNumeric) {
        characterSet += charCodes.numeric;
    }
    if (includeSpecial) {
        characterSet += charCodes.special;
    }

    if (characterSet.length === 0) {
        return 'Please select at least one character type.';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    return password;
}

// Get references to elements
const passwordInput = document.getElementById('password');
const lengthInput = document.getElementById('length');
const charCheckbox = document.getElementById('char');
const numericCheckbox = document.getElementById('numeric');
const specialCheckbox = document.getElementById('special');
const generateBtn = document.getElementById('generate');

// Event listener for the generate button
generateBtn.addEventListener('click', () => {
    const length = parseInt(lengthInput.value);
    const includeChar = charCheckbox.checked;
    const includeNumeric = numericCheckbox.checked;
    const includeSpecial = specialCheckbox.checked;

    const password = generatePassword(length, includeChar, includeNumeric, includeSpecial);
    passwordInput.value = password;
});