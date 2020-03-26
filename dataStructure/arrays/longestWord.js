/**
 * Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
 * If there are two or more words that are the same length, return the first word from the string with that length.
 * Ignore punctuation and assume sen will not be empty.
 * @param {string} sentences 
 * @return {string}
 */
const longestWord = sentences => {
    let word = sentences.split(' ')
    let len = 0
    let longest = ''
    for (let i = 0; i < word.length; i++) {
        word[i] = word[i].replace(/[^a-zA-Z ]/g, '')
        if (len < word[i].length) {
            longest = word[i]
            len = word[i].length
        }
    }
    return longest
}

console.log(longestWord("Hi_! abcdf I'amaa a Tomoa abcde"))