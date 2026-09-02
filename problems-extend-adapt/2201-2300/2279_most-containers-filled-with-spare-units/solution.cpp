class Solution {
  public:
    int mostFilledContainers(vector<int> &capacity, vector<int> &contents, int spare) {
        int n = capacity.size();
        vector<long long> needs(n);
        for (int i = 0; i < n; i++) {
            needs[i] = (long long)capacity[i] - contents[i];
        }
        sort(needs.begin(), needs.end());
        long long remaining = spare;
        int full = 0;
        for (int i = 0; i < n && needs[i] <= remaining; i++) {
            remaining -= needs[i];
            full++;
        }
        return full;
    }
};
