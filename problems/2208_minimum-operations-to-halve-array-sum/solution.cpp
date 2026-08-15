class Solution {
  public:
    int halveArray(vector<int> &nums) {
        priority_queue<double> pq;
        double total = 0;
        for (int x : nums) {
            pq.push((double)x);
            total += x;
        }
        double target = total / 2.0;
        int ops = 0;
        while (target > 0) {
            double largest = pq.top();
            pq.pop();
            double half = largest / 2.0;
            target -= half;
            pq.push(half);
            ops++;
        }
        return ops;
    }
};
