class Solution {
  public:
    int lastStoneWeight(vector<int> &stones) {
        priority_queue<int> heap(stones.begin(), stones.end());
        while (heap.size() > 1) {
            int y = heap.top();
            heap.pop();
            int x = heap.top();
            heap.pop();
            if (x != y) {
                heap.push(y - x);
            }
        }
        return heap.empty() ? 0 : heap.top();
    }
};
