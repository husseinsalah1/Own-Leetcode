/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var symbols = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  var start = 0;
  var end = 0;
  const length = s.length;
  var sum = 0;
  while (start < length) {
    end = start + 1;
    console.log({ start: s[start], end: s[end], length });
    if (!s[end]) {
      sum = sum + symbols[s[start]];
    } else if (symbols[s[start]] >= symbols[s[end]]) {
      sum = sum + symbols[s[start]];
    } else {
      const subtract = symbols[s[end]] - symbols[s[start]];
      sum = sum + subtract;
      start = end;
    }
    start++;
  }
  return sum;
};