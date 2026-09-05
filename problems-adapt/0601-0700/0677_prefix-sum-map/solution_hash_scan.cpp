#include <string>
#include <unordered_map>

// A plain key -> value hash map: no nodes, no per-put maintenance. put()
// stores the pair and stops -- the map carries no structure beyond the
// pairs themselves -- and prefixSum() pays for that at query time,
// scanning every stored key and summing the values of those that start
// with the prefix.
class PrefixSumMap {
  public:
    PrefixSumMap() {}

    void put(string key, int val) { values[key] = val; }

    int prefixSum(string prefix) {
        long long total = 0;
        for (const auto &entry : values) {
            if (entry.first.compare(0, prefix.size(), prefix) == 0) {
                total += entry.second;
            }
        }
        return (int)total;
    }

  private:
    unordered_map<string, int> values;
};
