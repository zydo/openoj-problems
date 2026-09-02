class Solution {
  public:
    vector<int> farApartPair(vector<int> &nums, int indexGap, int valueGap) {
        // The first ordered pair (i, j) clearing both thresholds is a valid
        // answer by the statement's "return any of them"; the conditions are
        // symmetric in the two indices, so scan order only picks the witness.
        for (int i = 0; i < (int)nums.size(); ++i) {
            for (int j = 0; j < (int)nums.size(); ++j) {
                if (abs(i - j) >= indexGap && abs(nums[i] - nums[j]) >= valueGap) {
                    return {i, j};
                }
            }
        }
        // Every ordered pair failed both checks, so no answer exists.
        return {-1, -1};
    }
};
