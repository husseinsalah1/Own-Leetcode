/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
var medianResult;
  var MergedArray = [...nums1, ...nums2].sort(
    (a, b) => a - b
  );
  if (MergedArray.length % 2 === 0) {
    var median_1 = MergedArray.length / 2 - 1;
    var median_2 = MergedArray.length / 2;
    medianResult =
      (MergedArray[median_1] +
        MergedArray[median_2]) /
      2;
  } else {
    var medianIndex = MergedArray.length / 2 - 0.5;
    medianResult = MergedArray[medianIndex];
  }

  return medianResult;
};