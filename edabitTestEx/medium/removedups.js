// Remove Duplicates from an Array
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

// Examples
// removeDups([1, 0, 1, 0]) ➞ [1, 0]

// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

// removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
// Notes
// Tests contain arrays with both strings and numbers.
// Tests are case sensitive.
// Test.assertSimilar(removeDups(["John", "Taylor", "John"]), ["John", "Taylor"]);
// Test.assertSimilar(removeDups(["John", "Taylor", "John", "john"]), [
//   "John",
//   "Taylor",
//   "john"
// ]);
// Test.assertSimilar(
//   removeDups([
//     "javascript",
//     "python",
//     "python",
//     "ruby",
//     "javascript",
//     "c",
//     "ruby"
//   ]),
//   ["javascript", "python", "ruby", "c"]
// );
// Test.assertSimilar(removeDups([1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5]), [
//   1,
//   2,
//   3,
//   5,
//   6,
//   7
// ]);
// Test.assertSimilar(removeDups(["#", "#", "%", "&", "#", "$", "&"]), [
//   "#",
//   "%",
//   "&",
//   "$"
// ]);
// Test.assertSimilar(removeDups([3, "Apple", 3, "Orange", "Apple"]), [
//   3,
//   "Apple",
//   "Orange"
// ]);
