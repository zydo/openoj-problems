class Solution {
  public:
    int smallestDivisor(vector<int> &nums, int threshold) {
        int hi = *max_element(nums.begin(), nums.end());
        int lo = 1;
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (total(nums, mid) <= (long long)threshold)
                hi = mid;
            else
                lo = mid + 1;
        }
        return lo;
    }

  private:
    long long total(vector<int> &nums, int divisor) {
        long long sum = 0;
        for (int x : nums) {
            sum += (x + divisor - 1LL) / divisor;
        }
        return sum;
    }
};
