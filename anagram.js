/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // lowercase
let lowercase1=str1.toLowerCase();
let lowercase2=str2.toLowerCase();
// check if length are different
if(lowercase1.length!=lowercase2.length){
  return false;
}
// sort and compare
let sortedstr1=lowercase1.split('').sort().join('');
let sortedstr2=lowercase2.split('').sort().join('');
if(sortedstr1===sortedstr2){
  return true;
}
else if(str1!=str2){
  return false;
}
};

module.exports = isAnagram;
