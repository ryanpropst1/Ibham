// Is the String Empty?
// Create a function that returns true if a string is empty and false otherwise.

// Examples
// isEmpty("") ➞ true

// isEmpty(" ") ➞ false

// isEmpty("a") ➞ false
// Notes
// A string containing only whitespaces " " does not count as empty.
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function isEmpty(s) {
  //return (s.length === 0 || !s.trim());
  return !s || s.length === 0;
}

// Test.assertEquals(isEmpty(""), true);
// Test.assertEquals(isEmpty(" "), false);
// Test.assertEquals(isEmpty("            "), false);
// Test.assertEquals(isEmpty("38215"), false);
// Test.assertEquals(isEmpty("afjabsdf"), false);
// Test.assertEquals(isEmpty("!?@&"), false);
