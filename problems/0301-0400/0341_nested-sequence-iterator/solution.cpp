#include <vector>

class NestedSequenceIterator {
  public:
    NestedSequenceIterator(NestedInteger nestedList) {
        for (const NestedInteger &item : nestedList.getList())
            walk(item);
        cursor = 0;
    }

    int nextValue() { return values[cursor++]; }

    bool hasMore() { return cursor < values.size(); }

  private:
    void walk(const NestedInteger &node) {
        if (node.isInteger()) {
            values.push_back(static_cast<int>(node.getInteger()));
            return;
        }
        for (const NestedInteger &child : node.getList())
            walk(child);
    }

    std::vector<int> values;
    size_t cursor = 0;
};
