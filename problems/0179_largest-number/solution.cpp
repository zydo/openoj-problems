class Solution {
  public:
    string largestNumber(vector<int> &nums) {
        vector<string> strs;
        strs.reserve(nums.size());
        for (int n : nums) {
            strs.push_back(to_string(n));
        }
        sort(strs.begin(), strs.end(),
             [](const string &a, const string &b) { return a + b > b + a; });
        string result;
        for (const string &s : strs) {
            result += s;
        }
        return result[0] == '0' ? "0" : result;
    }
};
