class Solution {
  public:
    double maxPrice(vector<vector<int>> &items, int capacity) {
        long long totalWeight = 0;
        for (auto &item : items)
            totalWeight += item[1];
        if (totalWeight < capacity)
            return -1.0;
        // Stable sort by price-per-weight ratio, descending.
        stable_sort(items.begin(), items.end(), [](const vector<int> &a, const vector<int> &b) {
            return (double)a[0] / a[1] > (double)b[0] / b[1];
        });
        double price = 0.0;
        long long remaining = capacity;
        for (auto &item : items) {
            if (remaining <= 0)
                break;
            int p = item[0], w = item[1];
            if (w <= remaining) {
                price += p;
                remaining -= w;
            } else {
                price += p * ((double)remaining / w);
                remaining = 0;
            }
        }
        return price;
    }
};
