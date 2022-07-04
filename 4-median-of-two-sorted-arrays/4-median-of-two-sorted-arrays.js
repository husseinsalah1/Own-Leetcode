/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
var medianResult;
  var MergedArrayWithRemoveDuplicate = [...nums1, ...nums2].sort(
    (a, b) => a - b
  );
  if (MergedArrayWithRemoveDuplicate.length % 2 === 0) {
    var median_1 = MergedArrayWithRemoveDuplicate.length / 2 - 1;
    var median_2 = MergedArrayWithRemoveDuplicate.length / 2;
    medianResult =
      (MergedArrayWithRemoveDuplicate[median_1] +
        MergedArrayWithRemoveDuplicate[median_2]) /
      2;
  } else {
    var medianIndex = MergedArrayWithRemoveDuplicate.length / 2 - 0.5;
    medianResult = MergedArrayWithRemoveDuplicate[medianIndex];
  }

  return medianResult;
};