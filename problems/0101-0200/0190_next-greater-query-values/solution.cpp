class Solution {
  public:
    vector<int> nextGreaterForQueries(vector<int> &queries, vector<int> &nums) {
        // One scan of nums answers every query: the stack holds values
        // still waiting for their next greater element.
        unordered_map<int, int> nextGreater;
        vector<int> stack;
        for (int value : nums) {
            // The current value is the FIRST greater value to the right of
            // each popped element (anything closer would have popped them
            // already); each element is pushed once, popped at most once.
            while (!stack.empty() && stack.back() < value) {
                nextGreater[stack.back()] = value;
                stack.pop_back();
            }
            stack.push_back(value);
        }
        // Whatever survives on the stack has nothing greater to its right.
        for (int value : stack) {
            nextGreater[value] = -1;
        }
        // Values are unique and queries is a subset of nums, so every
        // lookup hits.
        vector<int> result;
        result.reserve(queries.size());
        for (int value : queries) {
            result.push_back(nextGreater[value]);
        }
        return result;
    }
};
