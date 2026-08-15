class Solution {
  public:
    int minOperations(vector<int> &nums, int k) {
        priority_queue<long long, vector<long long>, greater<long long>> heap(nums.begin(),
                                                                              nums.end());
        int operations = 0;
        while (heap.size() >= 2 && heap.top() < k) {
            long long x = heap.top();
            heap.pop();
            long long y = heap.top();
            heap.pop();
            heap.push(x * 2 + y);
            operations++;
        }
        return operations;
    }
};
