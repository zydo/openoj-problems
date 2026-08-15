class Solution {
  public:
    vector<int> singleNumber(vector<int> &nums) {
        int total = 0;
        for (int value : nums) {
            total ^= value;
        }
        int mask = total & -total;
        int first = 0;
        for (int value : nums) {
            if (value & mask) {
                first ^= value;
            }
        }
        int second = total ^ first;
        if (first > second) {
            swap(first, second);
        }
        return {first, second};
    }
};
