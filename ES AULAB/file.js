function isPalindrome(str) {
  
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();


    let reversedStr = cleanedStr.split('').reverse().join('');


    return cleanedStr === reversedStr;
}

// Esempio di utilizzo
let input = "i topi, non avevano nipoti";
console.log(isPalindrome(input));  




