class Solution {
  public:
    bool containsDuplicate(vector<int> &nums) {
        unordered_set<int> seen;
        for (int value : nums) {
            if (!seen.insert(value).second) {
                return true;
            }
        }
        return false;
    }
};
