class Solution {
  public:
    int maxFrequency(vector<int> &nums, int k) {
        vector<int> arr = nums;
        sort(arr.begin(), arr.end());
        long long best = 1;
        int left = 0;
        long long windowSum = 0;
        for (int right = 0; right < (int)arr.size(); right++) {
            long long value = arr[right];
            windowSum += value;
            while ((long long)(right - left + 1) * value - windowSum > k) {
                windowSum -= arr[left];
                left++;
            }
            best = max(best, (long long)(right - left + 1));
        }
        return (int)best;
    }
};
