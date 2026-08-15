class Solution {
  public:
    vector<int> twoSum(vector<int> &numbers, int target) {
        int left = 0, right = (int)numbers.size() - 1;
        while (left < right) {
            int total = numbers[left] + numbers[right];
            if (total == target)
                return {left + 1, right + 1};
            if (total < target)
                ++left;
            else
                --right;
        }
        return {};
    }
};
