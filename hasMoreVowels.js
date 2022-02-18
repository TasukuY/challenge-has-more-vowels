/*
    Write a function called hasMoreVowels that takes in one argument, word. 
    When the function is called, return true if that word contains more vowels than non-vowels; 
    otherwise, return false. The word will always be a single word, without any punctuation or spaces. 
    It will contain only uppercase and/or lowercase letters.
*/

let hasMoreVowels = word => {
    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    let vowlesInWord = [];
    let consonantInWord = [];

    for(let i = 0; i < word.length; i++){
        let charToCheck = word[i];
        if(vowels.includes(charToCheck)){
            vowlesInWord.push(charToCheck);
        }else{
            consonantInWord.push(charToCheck);
        }
    }
    return vowlesInWord.length > consonantInWord.length;
}

console.log(hasMoreVowels('Aay'));