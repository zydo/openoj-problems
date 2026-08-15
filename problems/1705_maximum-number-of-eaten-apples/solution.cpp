class Solution {
  public:
    int eatenApples(vector<int> &apples, vector<int> &days) {
        int n = apples.size();
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> heap;
        int eaten = 0;
        for (int i = 0; i < n; i++) {
            if (apples[i] > 0) {
                heap.push({i + days[i], apples[i]});
            }
            while (!heap.empty() && heap.top().first <= i) {
                heap.pop();
            }
            if (!heap.empty()) {
                auto [rotDay, count] = heap.top();
                heap.pop();
                eaten++;
                if (count > 1) {
                    heap.push({rotDay, count - 1});
                }
            }
        }
        int day = n;
        while (!heap.empty()) {
            while (!heap.empty() && heap.top().first <= day) {
                heap.pop();
            }
            if (heap.empty()) {
                break;
            }
            auto [rotDay, count] = heap.top();
            heap.pop();
            eaten++;
            if (count > 1) {
                heap.push({rotDay, count - 1});
            }
            day++;
        }
        return eaten;
    }
};
