class Solution {
  public:
    int connectSticks(vector<int> &sticks) {
        if (sticks.size() <= 1) {
            return 0;
        }
        priority_queue<long long, vector<long long>, greater<long long>> heap(sticks.begin(),
                                                                              sticks.end());
        long long total = 0;
        while (heap.size() > 1) {
            long long combined = heap.top();
            heap.pop();
            combined += heap.top();
            heap.pop();
            total += combined;
            heap.push(combined);
        }
        return (int)total;
    }
};
