class Solution {
  public:
    vector<int> findNumOfValidWords(vector<string> &words, vector<string> &puzzles) {
        unordered_map<int, int> counts;
        for (auto &w : words) {
            int m = 0;
            for (char ch : w)
                m |= 1 << (ch - 'a');
            counts[m] += 1;
        }

        vector<int> answer;
        for (auto &puzzle : puzzles) {
            int first = 1 << (puzzle[0] - 'a');
            int puzzle_mask = 0;
            for (char ch : puzzle)
                puzzle_mask |= 1 << (ch - 'a');
            int total = 0;
            int sub = puzzle_mask;
            while (sub) {
                if (sub & first) {
                    auto it = counts.find(sub);
                    if (it != counts.end())
                        total += it->second;
                }
                sub = (sub - 1) & puzzle_mask;
            }
            answer.push_back(total);
        }
        return answer;
    }
};
