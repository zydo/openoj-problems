class Solution {
  public:
    long long minimumMoney(vector<vector<int>> &transactions) {
        long long total_lose = 0;
        long long max_cashback_losing = 0;
        long long max_cost_winning = 0;
        for (auto &t : transactions) {
            long long cost = t[0], cashback = t[1];
            if (cashback < cost) {
                total_lose += cost - cashback;
                if (cashback > max_cashback_losing)
                    max_cashback_losing = cashback;
            } else {
                if (cost > max_cost_winning)
                    max_cost_winning = cost;
            }
        }
        return total_lose + max(max_cashback_losing, max_cost_winning);
    }
};
