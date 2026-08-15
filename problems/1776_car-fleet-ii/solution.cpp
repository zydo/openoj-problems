class Solution {
  public:
    vector<double> getCollisionTimes(vector<vector<int>> &cars) {
        int n = cars.size();
        vector<double> answer(n, -1.0);
        vector<int> stackVec;
        for (int i = n - 1; i >= 0; i--) {
            int position = cars[i][0], speed = cars[i][1];
            while (!stackVec.empty() && speed <= cars[stackVec.back()][1]) {
                stackVec.pop_back();
            }
            while (!stackVec.empty()) {
                int j = stackVec.back();
                double t = (double)(cars[j][0] - position) / (double)(speed - cars[j][1]);
                if (answer[j] > 0 && t >= answer[j]) {
                    stackVec.pop_back();
                } else {
                    answer[i] = t;
                    break;
                }
            }
            stackVec.push_back(i);
        }
        return answer;
    }
};
