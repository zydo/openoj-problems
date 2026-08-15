class Solution {
  public:
    int medianOfUniquenessArray(vector<int> &nums) {
        int n = nums.size();
        long long length = (long long)n * (n + 1) / 2;
        long long targetRank = (length + 1) / 2;
        int lo = 1, hi = n;
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (countAtMost(nums, mid) >= targetRank)
                hi = mid;
            else
                lo = mid + 1;
        }
        return lo;
    }

  private:
    long long countAtMost(vector<int> &nums, int x) {
        unordered_map<int, int> freq;
        freq.reserve(nums.size() * 2);
        int left = 0;
        long long result = 0;
        for (int right = 0; right < (int)nums.size(); right++) {
            freq[nums[right]]++;
            while ((int)freq.size() > x) {
                auto it = freq.find(nums[left]);
                left++;
                if (--it->second == 0)
                    freq.erase(it);
            }
            result += right - left + 1;
        }
        return result;
    }
};
