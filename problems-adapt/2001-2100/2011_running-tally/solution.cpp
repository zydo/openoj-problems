class Solution {
  public:
    int finalTally(vector<string> &tokens) {
        int value = 0;
        for (const string &operation : tokens)
            value += operation[1] == '+' ? 1 : -1;
        return value;
    }
};
