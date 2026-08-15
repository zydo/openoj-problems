class Solution {
  private:
    struct ListNode {
        int val;
        ListNode *next;
        ListNode(int v) : val(v), next(nullptr) {}
    };

  public:
    int detectCycle(vector<int> &values, int pos) {
        if (values.empty()) {
            return -1;
        }
        vector<ListNode *> nodes;
        nodes.reserve(values.size());
        for (int v : values) {
            nodes.push_back(new ListNode(v));
        }
        for (size_t i = 0; i + 1 < nodes.size(); i++) {
            nodes[i]->next = nodes[i + 1];
        }
        if (pos != -1) {
            nodes.back()->next = nodes[pos];
        }
        ListNode *slow = nodes[0];
        ListNode *fast = nodes[0];
        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
            if (slow == fast) {
                // Phase 2: one pointer back at the head; both advance one
                // step and meet exactly at the cycle-entry node.
                ListNode *finder = nodes[0];
                while (finder != slow) {
                    finder = finder->next;
                    slow = slow->next;
                }
                int index = 0;
                ListNode *entry = nodes[0];
                while (entry != finder) {
                    entry = entry->next;
                    index++;
                }
                for (ListNode *n : nodes) {
                    delete n;
                }
                return index;
            }
        }
        for (ListNode *n : nodes) {
            delete n;
        }
        return -1;
    }
};
