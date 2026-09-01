#include <algorithm>

class ScoreTable {
  public:
    ScoreTable() {}

    void recordScore(int playerId, int score) { scores_[playerId] += score; }

    long long topScores(int count) {
        // Removing on reset (not zeroing) keeps zeros out of this sort.
        std::vector<long long> values;
        values.reserve(scores_.size());
        for (const auto &[id, score] : scores_)
            values.push_back(score);
        std::sort(values.begin(), values.end(), std::greater<long long>());
        long long sum = 0;
        for (int i = 0; i < count; ++i)
            sum += values[i];
        return sum;
    }

    void reset(int playerId) { scores_.erase(playerId); }

  private:
    std::unordered_map<int, long long> scores_;
};
