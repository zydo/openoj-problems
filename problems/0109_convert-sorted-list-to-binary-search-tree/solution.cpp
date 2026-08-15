class Solution {
  public:
    TreeNode *sortedListToBST(ListNode *head) { return build(head); }

  private:
    TreeNode *build(ListNode *node) {
        if (node == nullptr) {
            return nullptr;
        }
        if (node->next == nullptr) {
            return new TreeNode(node->val);
        }
        ListNode *prev = nullptr;
        ListNode *slow = node;
        ListNode *fast = node;
        while (fast != nullptr && fast->next != nullptr) {
            prev = slow;
            slow = slow->next;
            fast = fast->next->next;
        }
        prev->next = nullptr;
        TreeNode *root = new TreeNode(slow->val);
        root->left = build(node);
        root->right = build(slow->next);
        return root;
    }
};
