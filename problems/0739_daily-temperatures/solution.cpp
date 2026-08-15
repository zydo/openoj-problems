class Solution {
  public:
    vector<int> dailyTemperatures(vector<int> &temperatures) {
        int n = (int)temperatures.size();
        vector<int> answer(n, 0);
        vector<int> stack;
        stack.reserve(n);
        for (int day = 0; day < n; day++) {
            int temp = temperatures[day];
            while (!stack.empty() && temperatures[stack.back()] < temp) {
                int previous = stack.back();
                stack.pop_back();
                answer[previous] = day - previous;
            }
            stack.push_back(day);
        }
        return answer;
    }
};
