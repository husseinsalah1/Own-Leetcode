/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0 || s.length === 1) {
    return s.length;
  }
  var start = 0;
  var arr = [];
  var str = '';
  while (start < s.length) {
    str = s[start];
    var end = start + 1;
    while (end < s.length) {
      if (str.includes(s[end])) {
        arr[str] = str.length;
        end = end + 1;
        break;
      } else {
        str = str + s[end];
        end = end + 1;
        continue;
      }
    }
    arr[str] = str.length;
    start = start + 1;
  }

  return Object.values(arr).sort((a, b) => b - a)[0];
};