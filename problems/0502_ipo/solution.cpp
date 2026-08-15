class Solution {
  public:
    int findMaximizedCapital(int k, int w, vector<int> &profits, vector<int> &capital) {
        int n = profits.size();
        vector<pair<long long, long long>> projects(n);
        for (int i = 0; i < n; i++)
            projects[i] = {capital[i], profits[i]};
        sort(projects.begin(), projects.end());
        priority_queue<long long> affordable;
        long long current = w;
        int index = 0;
        int limit = min((long long)k, (long long)n);
        for (int iter = 0; iter < limit; iter++) {
            while (index < n && projects[index].first <= current) {
                affordable.push(projects[index].second);
                index++;
            }
            if (affordable.empty())
                break;
            current += affordable.top();
            affordable.pop();
        }
        return (int)current;
    }
};
