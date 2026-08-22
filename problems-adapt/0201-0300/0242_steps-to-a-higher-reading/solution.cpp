class Solution {
  public:
    vector<int> stepsUntilHigher(vector<int> &readings) {
        int n = (int)readings.size();
        vector<int> answer(n, 0);
        // Stack of positions still waiting for a higher one; their readings
        // are non-increasing bottom to top. Unanswered positions keep answer 0.
        vector<int> stack;
        stack.reserve(n);
        for (int index = 0; index < n; index++) {
            int reading = readings[index];
            // Strictly higher the current reading resolves each waiting index on top; equal
            // readings leave them waiting (strict < comparison).
            while (!stack.empty() && readings[stack.back()] < reading) {
                int previous = stack.back();
                stack.pop_back();
                answer[previous] = index - previous;
            }
            stack.push_back(index);
        }
        return answer;
    }
};
