class Solution {
    struct Node {
        unordered_map<char, Node *> children;
        string word;
    };

  public:
    vector<string> findWords(vector<vector<string>> &board, vector<string> &words) {
        int m = (int)board.size(), n = (int)board[0].size();
        Node *root = new Node();
        for (const string &word : words) {
            Node *node = root;
            for (char ch : word) {
                auto &slot = node->children[ch];
                if (!slot)
                    slot = new Node();
                node = slot;
            }
            node->word = word;
        }

        vector<string> grid(m);
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++)
                grid[i] += board[i][j][0];
        }

        set<string> found;
        vector<vector<bool>> seen(m, vector<bool>(n, false));
        vector<pair<int, int>> dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
        function<void(int, int, Node *)> dfs = [&](int i, int j, Node *node) {
            char ch = grid[i][j];
            auto it = node->children.find(ch);
            if (it == node->children.end())
                return;
            Node *next = it->second;
            if (!next->word.empty())
                found.insert(next->word);
            seen[i][j] = true;
            for (auto &[di, dj] : dirs) {
                int ni = i + di, nj = j + dj;
                if (ni >= 0 && ni < m && nj >= 0 && nj < n && !seen[ni][nj]) {
                    dfs(ni, nj, next);
                }
            }
            seen[i][j] = false;
        };
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                dfs(i, j, root);
            }
        }
        vector<string> result(found.begin(), found.end());
        destroy(root);
        return result;
    }

  private:
    static void destroy(Node *node) {
        for (auto &[ch, child] : node->children)
            destroy(child);
        delete node;
    }
};
