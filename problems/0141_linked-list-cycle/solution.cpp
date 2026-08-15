class Solution {
  private:
    struct ListNode {
        int val;
        ListNode *next;
        ListNode(int v) : val(v), next(nullptr) {}
    };

  public:
    bool hasCycle(vector<int> &values, int pos) {
        if (values.empty()) {
            return false;
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
                for (ListNode *n : nodes) {
                    delete n;
                }
                return true;
            }
        }
        for (ListNode *n : nodes) {
            delete n;
        }
        return false;
    }
};
