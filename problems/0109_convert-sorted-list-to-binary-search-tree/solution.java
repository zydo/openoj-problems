class Solution {

    public TreeNode sortedListToBST(ListNode head) {
        return build(head);
    }

    private TreeNode build(ListNode node) {
        if (node == null) {
            return null;
        }
        if (node.next == null) {
            return new TreeNode(node.val);
        }
        ListNode prev = null,
            slow = node,
            fast = node;
        while (fast != null && fast.next != null) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = null;
        TreeNode root = new TreeNode(slow.val);
        root.left = build(node);
        root.right = build(slow.next);
        return root;
    }
}
