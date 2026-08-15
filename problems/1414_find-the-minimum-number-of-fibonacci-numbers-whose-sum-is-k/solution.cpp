class Solution {
  public:
    int findMinFibonacciNumbers(int k) {
        vector<long long> fibs = {1, 1};
        while (fibs.back() + fibs[fibs.size() - 2] <= k) {
            fibs.push_back(fibs.back() + fibs[fibs.size() - 2]);
        }
        int count = 0;
        long long remaining = k;
        int index = static_cast<int>(fibs.size()) - 1;
        while (remaining > 0) {
            while (fibs[index] > remaining) {
                index--;
            }
            remaining -= fibs[index];
            count++;
        }
        return count;
    }
};
