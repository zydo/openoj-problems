class Solution {
  public:
    vector<long long> maximumSegmentSum(vector<int> &nums, vector<int> &removeQueries) {
        int n = (int)nums.size();
        vector<int> parent(n);
        iota(parent.begin(), parent.end(), 0);
        vector<long long> ssum(n, 0);
        vector<char> active(n, 0);

        auto find = [&](int x) {
            while (parent[x] != x) {
                parent[x] = parent[parent[x]];
                x = parent[x];
            }
            return x;
        };

        vector<long long> answer;
        answer.reserve(n);
        answer.push_back(0);
        long long best = 0;
        for (int qi = (int)removeQueries.size() - 1; qi >= 1; qi--) {
            int i = removeQueries[qi];
            active[i] = 1;
            ssum[i] = nums[i];
            for (int j : {i - 1, i + 1}) {
                if (j >= 0 && j < n && active[j]) {
                    int a = find(i), b = find(j);
                    if (a != b) {
                        parent[a] = b;
                        ssum[b] += ssum[a];
                    }
                }
            }
            best = max(best, ssum[find(i)]);
            answer.push_back(best);
        }
        reverse(answer.begin(), answer.end());
        return answer;
    }
};
