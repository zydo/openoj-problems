class Solution {
  public:
    int countProductBoundedSegments(vector<int> &values, int limit) {
        // Products are at least 1 (elements >= 1), so limit <= 1 admits nothing.
        if (limit <= 1) {
            return 0;
        }
        int count = 0;
        long long product = 1;
        int left = 0;
        for (int right = 0; right < (int)values.size(); right++) {
            product *= values[right];
            // Shrink from the left until [left, right] is the longest window
            // ending here with product strictly below limit.
            while (product >= limit) {
                product /= values[left];
                left++;
            }
            // Every window suffix also ends at right and has a smaller product:
            // right - left + 1 segments, each counted once by its right end.
            count += right - left + 1;
        }
        return count;
    }
};
