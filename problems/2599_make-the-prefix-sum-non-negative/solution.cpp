class Solution {
  public:
    int makePrefSumNonNegative(vector<int> &nums) {
        priority_queue<long long, vector<long long>, greater<long long>> heap;
        long long prefix = 0;
        int ops = 0;
        for (int num : nums) {
            prefix += num;
            heap.push(num);
            while (prefix < 0) {
                prefix -= heap.top();
                heap.pop();
                ops++;
            }
        }
        return ops;
    }
};
