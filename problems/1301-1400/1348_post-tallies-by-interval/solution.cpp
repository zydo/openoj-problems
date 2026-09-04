#include <algorithm>
#include <unordered_map>
#include <vector>

// Per-name sorted time lists; a query slices its window into chunks and
// counts each chunk with two binary searches.
class PostTally {
  public:
    PostTally() {}

    void recordPost(std::string name, long long time) {
        auto &list = times_[name];
        auto at = std::upper_bound(list.begin(), list.end(), time);
        list.insert(at, time);
    }

    std::vector<int> countsPerInterval(std::string span, std::string name, long long startTime, long long endTime) {
        long long chunk = chunkOf(span);
        auto it = times_.find(name);
        const std::vector<long long> empty;
        const std::vector<long long> &list = it == times_.end() ? empty : it->second;
        std::vector<int> buckets;
        for (long long lo = startTime; lo <= endTime; lo += chunk) {
            long long hi = std::min(lo + chunk - 1, endTime);
            buckets.push_back((int)(std::upper_bound(list.begin(), list.end(), hi) -
                                    std::upper_bound(list.begin(), list.end(), lo - 1)));
        }
        return buckets;
    }

  private:
    std::unordered_map<std::string, std::vector<long long>> times_;

    static long long chunkOf(const std::string &span) {
        if (span == "minute")
            return 60;
        if (span == "hour")
            return 3600;
        return 86400;
    }
};
