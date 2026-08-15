function xorAllNums(nums1: number[], nums2: number[]): number {
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
}
