function selectionSortRecursive(arr) {
    const sort = []
   
    function helper(array, sortedArray) {
    if (array.length === 0) {
      return sortedArray
    }

    const min = Math.min(...array)
    const idx = array.indexOf(min)

    sortedArray.push(min)
    array.splice(idx, 1)

    return helper(array, sortedArray)

   }

   return helper(arr, sort)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
