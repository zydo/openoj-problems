class Solution {
  public:
    int maxChunksToSorted(vector<int> &arr) {
        vector<int> ordered(arr);
        sort(ordered.begin(), ordered.end());
        unordered_map<int, int> counts;
        int balance = 0;
        int chunks = 0;
        for (size_t i = 0; i < arr.size(); i++) {
            int a = arr[i], b = ordered[i];
            balance += ++counts[a] > 0 ? 1 : -1;
            balance += --counts[b] < 0 ? 1 : -1;
            if (balance == 0)
                chunks++;
        }
        return chunks;
    }
};
