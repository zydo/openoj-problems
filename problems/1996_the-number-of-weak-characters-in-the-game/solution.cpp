class Solution {
  public:
    int numberOfWeakCharacters(vector<vector<int>> &properties) {
        vector<vector<int>> props(properties);
        sort(props.begin(), props.end(), [](const vector<int> &a, const vector<int> &b) {
            if (a[0] != b[0]) {
                return a[0] > b[0];
            }
            return a[1] < b[1];
        });
        int weak = 0;
        int maxDefense = 0;
        for (const vector<int> &p : props) {
            if (p[1] < maxDefense) {
                weak++;
            } else {
                maxDefense = p[1];
            }
        }
        return weak;
    }
};
