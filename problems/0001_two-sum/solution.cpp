class Solution {
  public:
    vector<int> twoSum(vector<int> &nums, int target) {
        unordered_map<int, int> seen;
        for (int index = 0; index < (int)nums.size(); ++index) {
            auto found = seen.find(target - nums[index]);
            if (found != seen.end())
                return {found->second, index};
            seen[nums[index]] = index;
        }
        return {};
    }
};
