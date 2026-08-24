class Solution {
public:
    vector<string> wordFrequency(string content) {
        // One counter per distinct word; >> drops leading/trailing
        // separators and never yields an empty word.
        unordered_map<string, int> counts;
        istringstream words(content);
        string word;
        while (words >> word) {
            counts[word]++;
        }
        vector<pair<string, int>> ranked(counts.begin(), counts.end());
        // Descending frequency, lexicographic word as the tiebreaker.
        sort(ranked.begin(), ranked.end(), [](const pair<string, int> &a, const pair<string, int> &b) {
            if (a.second != b.second) {
                return a.second > b.second;
            }
            return a.first < b.first;
        });
        vector<string> lines;
        lines.reserve(ranked.size());
        for (const pair<string, int> &entry : ranked) {
            lines.push_back(entry.first + " " + to_string(entry.second));
        }
        return lines;
    }
};
