class Solution {

    public long maxArea(int[] height) {
        int left = 0,
            right = height.length - 1;
        long best = 0;
        while (left < right) {
            long area =
                (long) (right - left) * Math.min(height[left], height[right]);
            if (area > best) best = area;
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return best;
    }
}
