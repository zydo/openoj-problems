class Solution {
  public:
    long long largestWaterArea(vector<int> &heights) {
        // Start with the widest possible container, one pointer at each end.
        int left = 0, right = (int)heights.size() - 1;
        long long best = 0;
        while (left < right) {
            // Area = width x the shorter wall: water above it would spill.
            long long area = (long long)(right - left) * min(heights[left], heights[right]);
            if (area > best)
                best = area;
            // Moving the taller wall inward can never help -- the area stays
            // capped by the shorter wall while the width falls -- so the
            // shorter wall's current pair is the best it can ever be part of
            // and it is safe to discard. Ties move right, equally correct.
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return best;
    }
};
