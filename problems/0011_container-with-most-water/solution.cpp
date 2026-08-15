class Solution {
  public:
    long long maxArea(vector<int> &height) {
        int left = 0, right = (int)height.size() - 1;
        long long best = 0;
        while (left < right) {
            long long area = (long long)(right - left) * min(height[left], height[right]);
            if (area > best)
                best = area;
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return best;
    }
};
