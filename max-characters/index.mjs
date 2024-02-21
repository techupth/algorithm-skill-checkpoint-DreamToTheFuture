// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {

    const charCount = {};

    for (const letter of str) {
        charCount[letter] = (charCount[letter] || 0) +1;
    }

    // charCount

    let maxChar = '';
    let maxCount = 0;

    for (const key in charCount) {
        if (charCount[key] > maxCount) {
            maxCount = charCount[key];
            maxChar = key;
        }
    }

    return maxChar
};



console.log(getMaxCharacters("abcccccccd"));
console.log(getMaxCharacters("apple 1231111"));