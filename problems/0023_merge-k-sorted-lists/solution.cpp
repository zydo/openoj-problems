class Solution {
  public:
    ListNode *mergeKLists(vector<ListNode *> &lists) {
        vector<ListNode *> cur(lists.begin(), lists.end());
        if (cur.empty())
            return nullptr;
        while (cur.size() > 1) {
            vector<ListNode *> next;
            for (size_t i = 0; i < cur.size(); i += 2) {
                if (i + 1 < cur.size()) {
                    next.push_back(merge2(cur[i], cur[i + 1]));
                } else {
                    next.push_back(cur[i]);
                }
            }
            cur = next;
        }
        return cur[0];
    }

  private:
    ListNode *merge2(ListNode *a, ListNode *b) {
        ListNode dummy(0);
        ListNode *tail = &dummy;
        while (a && b) {
            if (a->val <= b->val) {
                tail->next = a;
                a = a->next;
            } else {
                tail->next = b;
                b = b->next;
            }
            tail = tail->next;
        }
        tail->next = a ? a : b;
        return dummy.next;
    }
};
