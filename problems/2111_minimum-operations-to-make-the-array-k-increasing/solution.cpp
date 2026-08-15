class Solution {
  public:
    int kIncreasing(vector<int> &arr, int k) {
        int operations = 0;
        for (int start = 0; start < k; start++) {
            vector<int> sub;
            for (int i = start; i < (int)arr.size(); i += k) {
                sub.push_back(arr[i]);
            }
            operations += (int)sub.size() - longestNondecreasing(sub);
        }
        return operations;
    }

  private:
    int longestNondecreasing(vector<int> &seq) {
        vector<int> tails;
        for (int value : seq) {
            auto it = upper_bound(tails.begin(), tails.end(), value);
            if (it == tails.end()) {
                tails.push_back(value);
            } else {
                *it = value;
            }
        }
        return (int)tails.size();
    }
};
