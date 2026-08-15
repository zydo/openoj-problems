class Solution {
  public:
    int minNumberOperations(vector<int> &target) {
        long long ops = target[0];
        for (size_t i = 1; i < target.size(); i++) {
            if (target[i] > target[i - 1]) {
                ops += target[i] - target[i - 1];
            }
        }
        return (int)ops;
    }
};
