#include <algorithm>
#include <cstddef>
#include <vector>

// The lead can only change hands when a vote is cast, so the constructor
// reduces the whole history to one array: it walks the votes once, keeping
// running counts and the current leader, and a ballot that merely ties the
// maximum takes the lead — the most recent vote among the tied candidates.
// leaderAt(t) then only has to locate the last vote at or before t, which is a
// binary search because times is strictly increasing, and read the leader
// recorded there.
class TimelineLeaderTracker {
  public:
    TimelineLeaderTracker(std::vector<int> labels, std::vector<int> times) : times(std::move(times)) {
        // person ids are dense in [0, n), so a plain count array indexes them
        std::vector<int> counts(labels.size(), 0);
        leaders.resize(labels.size());
        int best = 0;
        int leader = 0;
        for (std::size_t i = 0; i < labels.size(); ++i) {
            // a tie at the maximum hands the lead to the caster of this very
            // ballot — the most recent vote among the tied candidates
            if (++counts[labels[i]] >= best) {
                best = counts[labels[i]];
                leader = labels[i];
            }
            leaders[i] = leader;
        }
    }

    int leaderAt(int t) {
        // upper bound: the first index past every vote at or before t, so a
        // ballot cast exactly at t counts
        std::size_t index = (std::size_t)(std::upper_bound(times.begin(), times.end(), t) - times.begin()) - 1;
        return leaders[index];
    }

  private:
    std::vector<int> times;
    std::vector<int> leaders;
};
