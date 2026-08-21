class Solution {
  public:
    double minimumProportionalGroupCost(vector<int> &units, vector<int> &minimumPayments, int groupCount) {
        int n = units.size();
        vector<pair<int, int>> workers(n); // (minimumPayments, units)
        for (int i = 0; i < n; i++) {
            workers[i] = {minimumPayments[i], units[i]};
        }
        stable_sort(workers.begin(), workers.end(), [](const pair<int, int> &a, const pair<int, int> &b) {
            return (double)a.first / a.second < (double)b.first / b.second;
        });

        priority_queue<int> heap; // max-heap of chosen qualities
        long long totalQuality = 0;
        double best = numeric_limits<double>::infinity();
        for (auto &[w, q] : workers) {
            heap.push(q);
            totalQuality += q;
            if ((int)heap.size() > groupCount) {
                totalQuality -= heap.top();
                heap.pop();
            }
            if ((int)heap.size() == groupCount) {
                double cost = totalQuality * ((double)w / q);
                if (cost < best) {
                    best = cost;
                }
            }
        }
        return best;
    }
};
