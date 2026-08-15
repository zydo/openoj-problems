class Solution {
  public:
    int shortestSequence(vector<int> &rolls, int k) {
        unordered_set<int> seen;
        int answer = 1;
        for (int r : rolls) {
            seen.insert(r);
            if ((int)seen.size() == k) {
                answer += 1;
                seen.clear();
            }
        }
        return answer;
    }
};
