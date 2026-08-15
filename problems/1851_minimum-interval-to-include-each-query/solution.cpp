class Solution {
  public:
    vector<int> minInterval(vector<vector<int>> &intervals, vector<int> &queries) {
        vector<vector<int>> sorted = intervals;
        sort(sorted.begin(), sorted.end());
        vector<int> order((int)queries.size());
        for (int j = 0; j < (int)queries.size(); j++) {
            order[j] = j;
        }
        sort(order.begin(), order.end(), [&](int a, int b) { return queries[a] < queries[b]; });
        // Min-heap of (size, right) pairs ordered by size.
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> heap;
        vector<int> answers((int)queries.size());
        int i = 0;
        int n = (int)sorted.size();
        for (int j : order) {
            int q = queries[j];
            while (i < n && sorted[i][0] <= q) {
                heap.push({sorted[i][1] - sorted[i][0] + 1, sorted[i][1]});
                i++;
            }
            while (!heap.empty() && heap.top().second < q) {
                heap.pop();
            }
            answers[j] = heap.empty() ? -1 : heap.top().first;
        }
        return answers;
    }
};
