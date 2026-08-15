class Solution {
  public:
    bool isPossible(vector<int> &target) {
        int n = target.size();
        if (n == 1) {
            return target[0] == 1;
        }
        long long total = 0;
        priority_queue<long long> pq;
        for (int v : target) {
            total += v;
            pq.push(v);
        }
        while (true) {
            long long largest = pq.top();
            pq.pop();
            if (largest == 1) {
                return true;
            }
            long long rest = total - largest;
            if (largest <= rest) {
                return false;
            }
            long long steps = (largest - 1) / rest;
            long long prev = largest - steps * rest;
            pq.push(prev);
            total = rest + prev;
        }
    }
};
