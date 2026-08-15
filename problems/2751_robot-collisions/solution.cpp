class Solution {
  public:
    vector<int> survivedRobotsHealths(vector<int> &positions, vector<int> &healths,
                                      string directions) {
        int n = positions.size();
        vector<int> h(healths.begin(), healths.end());
        vector<int> order(n);
        for (int i = 0; i < n; i++) {
            order[i] = i;
        }
        sort(order.begin(), order.end(), [&](int a, int b) { return positions[a] < positions[b]; });
        vector<int> stack;
        for (int idx : order) {
            if (directions[idx] == 'R') {
                stack.push_back(idx);
            } else {
                bool alive = true;
                while (!stack.empty() && directions[stack.back()] == 'R') {
                    int top = stack.back();
                    if (h[top] < h[idx]) {
                        h[idx] -= 1;
                        stack.pop_back();
                    } else if (h[top] > h[idx]) {
                        h[top] -= 1;
                        alive = false;
                        break;
                    } else {
                        stack.pop_back();
                        alive = false;
                        break;
                    }
                }
                if (alive) {
                    stack.push_back(idx);
                }
            }
        }
        vector<bool> survivor(n, false);
        for (int idx : stack) {
            survivor[idx] = true;
        }
        vector<int> result;
        for (int i = 0; i < n; i++) {
            if (survivor[i]) {
                result.push_back(h[i]);
            }
        }
        return result;
    }
};
