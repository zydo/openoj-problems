class Solution {
  public:
    int apportion(vector<int> &scores) {
        int n = (int)scores.size();
        // A weight of one everywhere is the floor the rules allow.
        vector<int> weights(n, 1);
        // Left-to-right: satisfy the left-hand rule with the smallest
        // value that clears the position on the left.
        for (int i = 1; i < n; i++) {
            if (scores[i] > scores[i - 1]) {
                weights[i] = weights[i - 1] + 1;
            }
        }
        // Right-to-left: the mirror rule. Taking a max only raises a
        // weight, so this sweep cannot break what the first settled.
        for (int i = n - 2; i >= 0; i--) {
            if (scores[i] > scores[i + 1]) {
                weights[i] = max(weights[i], weights[i + 1] + 1);
            }
        }
        long long total = 0;
        for (int value : weights) {
            total += value;
        }
        return (int)total;
    }
};
