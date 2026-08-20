class Solution {
  public:
    vector<int> canonicalWinningPermutation(vector<int> &available, vector<int> &opponents) {
        vector<int> values(available);
        sort(values.begin(), values.end());
        int size = values.size();
        vector<int> tree(size + 1, 0);

        auto update = [&](int index, int delta) {
            for (; index <= size; index += index & -index) {
                tree[index] += delta;
            }
        };
        auto prefixCount = [&](int index) {
            int total = 0;
            for (; index > 0; index -= index & -index) {
                total += tree[index];
            }
            return total;
        };
        auto kthSmallest = [&](int k) {
            int index = 0;
            int remaining = k;
            int step = 1;
            while (step < size) {
                step <<= 1;
            }
            while (step > 0) {
                int next = index + step;
                if (next <= size && tree[next] < remaining) {
                    index = next;
                    remaining -= tree[next];
                }
                step >>= 1;
            }
            return index + 1;
        };
        auto upperBound = [&](int value) {
            return (int)(upper_bound(values.begin(), values.end(), value) - values.begin());
        };

        for (int rank = 1; rank <= size; rank++) {
            update(rank, 1);
        }

        vector<int> result;
        result.reserve(opponents.size());
        for (int value : opponents) {
            int lessOrEqual = prefixCount(upperBound(value));
            int rank = kthSmallest(lessOrEqual + 1);
            if (rank > size) {
                rank = kthSmallest(1);
            }
            update(rank, -1);
            result.push_back(values[rank - 1]);
        }
        return result;
    }
};
