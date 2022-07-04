/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
      if (x < 0) {
    return false;
  }
  var converted = x.toString();
  let newString = '';
  for (let i = converted.length - 1; i >= 0; i--) {
    newString += converted[i];
  }
  if (converted == newString) {
    return true;
  }
  return false;
};