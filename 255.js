// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookArr, bookName) {
  const newBookArr = [...bookArr];
  newBookArr.push(bookName);
  return newBookArr;
  
  // Change code above this line
}

// Change code below this line
function remove(bookArr, bookName) {
  const newBookArr = [...bookArr];
  const book_index = newBookArr.indexOf(bookName);
  if (book_index >= 0) {

    newBookArr.splice(book_index, 1);
    return newBookArr;

    // Change code above this line
    }
}