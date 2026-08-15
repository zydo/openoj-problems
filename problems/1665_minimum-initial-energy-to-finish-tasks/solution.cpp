class Solution {
  public:
    long long minimumEffort(vector<vector<int>> &tasks) {
        sort(tasks.begin(), tasks.end(), [](const vector<int> &a, const vector<int> &b) {
            return (b[1] - b[0]) < (a[1] - a[0]);
        });
        long long spent = 0;
        long long answer = 0;
        for (auto &task : tasks) {
            answer = max(answer, spent + task[1]);
            spent += task[0];
        }
        return answer;
    }
};
