/* Return the length of the longest word in the provided sentence.

Your response should be a number. */

//Solution 1

function findLongestWordLength1(str) {
    let lengthLongestWord = 0;
    str.match(/\S+/g).forEach(word => {
      if (word.length > lengthLongestWord) {
        lengthLongestWord = word.length;
      }
    })
    return lengthLongestWord;
  }
  
  console.log(findLongestWordLength1("The quick brown fox jumped over the lazy dog"));


//Solution 2

function findLongestWordLength2(str) {
    const sortedArrOfWords = str
    .split(" ")
    .sort((a, b) => a.length === b.length ? 0 : a.length < b.length ? -1 : 1);
    return sortedArrOfWords[sortedArrOfWords.length - 1].length;
  }
  
  console.log(findLongestWordLength2("The quick brown fox jumped over the lazy dog"));