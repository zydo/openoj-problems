#include <utility>
#include <vector>

// Distinct timestamps with their recordEvent counts, oldest first; countRecent drops
// everything at or before timestamp - 300 off the front and sums what
// survives — the window is (timestamp - 300, timestamp].
class RecentEventCounter {
  public:
    RecentEventCounter() {}

    void recordEvent(int timestamp) {
        if (!hits.empty() && hits.back().first == timestamp) {
            // Several hits may arrive at the same second; bumping the
            // newest count keeps one entry per distinct timestamp.
            hits.back().second++;
        } else {
            hits.push_back({timestamp, 1});
        }
    }

    int countRecent(int timestamp) {
        int cutoff = timestamp - 300;
        while (!hits.empty() && hits.front().first <= cutoff) {
            hits.erase(hits.begin());
        }
        int total = 0;
        for (const auto &recordEvent : hits) {
            total += recordEvent.second;
        }
        return total;
    }

  private:
    vector<pair<int, int>> hits;
};
