class Solution {
  public:
    int minimumDeviation(vector<int> &nums) {
        priority_queue<int> heap;
        int currentMin = INT_MAX;
        for (int v : nums) {
            int m = v % 2 == 1 ? v * 2 : v;
            heap.push(m);
            currentMin = min(currentMin, m);
        }
        int best = heap.top() - currentMin;
        while (heap.top() % 2 == 0) {
            int half = heap.top() / 2;
            heap.pop();
            heap.push(half);
            currentMin = min(currentMin, half);
            best = min(best, heap.top() - currentMin);
        }
        return best;
    }
};
