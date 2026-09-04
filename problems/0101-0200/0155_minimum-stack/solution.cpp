#include <algorithm>
#include <vector>

class MinimumStack {
  public:
    MinimumStack() {}

    void push(int value) {
        // Snapshot the minimum of the stack as of this push: the new value
        // combined with the minimum of the entry below.
        int minimum = entries.empty() ? value : std::min(value, entries.back().minimum);
        entries.push_back(Entry{value, minimum});
    }

    void pop() {
        // A pop restores an earlier stack state whose exposed entry already
        // holds that state's minimum — no recomputation needed.
        entries.pop_back();
    }

    int top() { return entries.back().value; }

    int minimum() {
        // The top pair alone answers both queries in O(1).
        return entries.back().minimum;
    }

  private:
    struct Entry {
        int value;
        int minimum;
    };

    std::vector<Entry> entries;
};
