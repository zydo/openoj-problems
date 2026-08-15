class Solution {
  public:
    int subarrayBitwiseORs(vector<int> &arr) {
        unordered_set<int> seen;
        unordered_set<int> current;
        for (int x : arr) {
            unordered_set<int> nxt;
            for (int y : current) {
                nxt.insert(x | y);
            }
            nxt.insert(x);
            current = move(nxt);
            seen.insert(current.begin(), current.end());
        }
        return (int)seen.size();
    }
};
