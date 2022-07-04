/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var arr = [];
  var sub = '';
  if (s.length === 1) {
    return 1;
  }
  for (var i = 0; i < s.length; i++) {
    sub = s[i];
    for (var j = i + 1; j < s.length; j++) {
      if (sub.includes(s[j])) {
        arr[sub] = sub.length;
        sub = '';
        break;
      } else {
        sub = sub + s[j];
        continue;
      }
    }
    arr[sub] = sub.length;
  }
  arr[sub] = sub.length;

  return Object.values(arr).sort((a, b) => b - a)[0];

};