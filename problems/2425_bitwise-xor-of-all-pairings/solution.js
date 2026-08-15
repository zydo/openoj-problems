/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
    let answer = 0;
    if (nums2.length % 2 === 1) {
        for (const value of nums1) {
            answer ^= value;
        }
    }
    if (nums1.length % 2 === 1) {
        for (const value of nums2) {
            answer ^= value;
        }
    }
    return answer;
};
