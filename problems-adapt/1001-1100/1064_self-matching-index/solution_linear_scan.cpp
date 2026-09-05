class Solution {
  public:
    int selfMatchIndex(vector<int> &arr) {
        for (int i = 0; i < (int)arr.size(); i++) {
            if (arr[i] == i) {
                return i;
            }
        }
        return -1;
    }
};
