class Solution {
  public:
    int minPatches(vector<int> &nums, int n) {
        int patches = 0;
        size_t i = 0;
        long long reachable = 1;
        while (reachable <= n) {
            if (i < nums.size() && nums[i] <= reachable) {
                reachable += nums[i];
                i++;
            } else {
                reachable += reachable;
                patches++;
            }
        }
        return patches;
    }
};
