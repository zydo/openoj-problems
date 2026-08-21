#include <utility>
#include <vector>

class PriceSpanTracker {
  public:
    PriceSpanTracker() = default;

    int record(int price) {
        int span = 1;
        while (!stack.empty() && stack.back().first <= price) {
            span += stack.back().second;
            stack.pop_back();
        }
        stack.emplace_back(price, span);
        return span;
    }

  private:
    std::vector<std::pair<int, int>> stack;
};
