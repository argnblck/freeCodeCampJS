const globalArray = [5, 6, 3, 2, 9];

const nonMutatingSort = arr => 
  arr
    .slice()
    .sort((a, b) => a - b);
nonMutatingSort(globalArray);