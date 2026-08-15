class Solution {
  public:
    int minOperations(vector<int> &target, vector<int> &arr) {
        unordered_map<int, int> index;
        index.reserve(target.size() * 2);
        for (int i = 0; i < (int)target.size(); i++) {
            index[target[i]] = i;
        }
        vector<int> tails;
        tails.reserve(arr.size());
        for (int value : arr) {
            auto it = index.find(value);
            if (it == index.end())
                continue;
            int v = it->second;
            auto pos = lower_bound(tails.begin(), tails.end(), v);
            if (pos == tails.end())
                tails.push_back(v);
            else
                *pos = v;
        }
        return (int)target.size() - (int)tails.size();
    }
};
