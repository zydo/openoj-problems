class Solution {
  public:
    int minStoneSum(vector<int> &piles, int k) {
        priority_queue<int> heap(piles.begin(), piles.end());
        for (int i = 0; i < k; i++) {
            int top = heap.top();
            if (top == 1)
                break;
            heap.pop();
            heap.push(top - top / 2);
        }
        long long total = 0;
        while (!heap.empty()) {
            total += heap.top();
            heap.pop();
        }
        return (int)total;
    }
};
