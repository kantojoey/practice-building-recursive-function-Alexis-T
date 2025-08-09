// 1. Write a function named reverseString that takes a string as input.
// 2. The function should:
// ○ Return the string itself if it contains only one character (base case).
// ○ Use recursion to reverse the string by concatenating the last character
// of the string with the result of the recursive call on the remaining part
// of the string (recursive case).
// 3. Test the function with various string inputs to verify its correctness.
// Example Inputs and Outputs:
// reverseString("hello"); // Outputs: "olleh"
// reverseString("recursion"); // Outputs: "noisrucer"
// reverseString("a"); // Outputs: "a"
// reverseString(""); // Outputs: ""

function reverseString(word){
    let lastChar = word[word.length -1];
    let remainingChars = word.slice(0, word.length - 1)
    if (word.length <= 1){
        return word;
    }   return lastChar + reverseString(remainingChars);
}

console.log(reverseString("Alexis"));
console.log(reverseString("Onomatopoeia"));
console.log(reverseString("racecar"));
console.log(reverseString("LaCroix"));
console.log(reverseString(""));
