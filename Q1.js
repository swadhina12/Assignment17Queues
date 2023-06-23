//Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
function firstUniqChar(s) {
  const charFreq = {};

  // Count the frequency of each character
  for (const char of s) {
    charFreq[char] = (charFreq[char] || 0) + 1;
  }

  // Find the first non-repeating character and return its index
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charFreq[char] === 1) {
      return i;
    }
  }

  // No non-repeating character found
  return -1;
}
//Let's test it with the provided examples:

console.log(firstUniqChar("leetcode"));      // Output: 0
console.log(firstUniqChar("loveleetcode"));  // Output: 2
console.log(firstUniqChar("aabb"));           // Output: -1
