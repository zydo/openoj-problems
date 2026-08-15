class Solution {
  public:
    long long minDamage(int power, vector<int> &damage, vector<int> &health) {
        int n = damage.size();
        vector<int> times(n);
        vector<double> ratio(n);
        vector<int> order(n);
        long long remaining = 0;
        for (int i = 0; i < n; i++) {
            order[i] = i;
            times[i] = (health[i] + power - 1) / power;
            ratio[i] = (double)damage[i] / times[i];
            remaining += damage[i];
        }
        stable_sort(order.begin(), order.end(), [&](int a, int b) { return ratio[a] > ratio[b]; });
        long long answer = 0;
        for (int i : order) {
            answer += remaining * times[i];
            remaining -= damage[i];
        }
        return answer;
    }
};
