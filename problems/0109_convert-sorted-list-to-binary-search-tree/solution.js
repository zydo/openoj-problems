/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    function build(node) {
        if (node === null) {
            return null;
        }
        if (node.next === null) {
            return new TreeNode(node.val);
        }
        let prev = null,
            slow = node,
            fast = node;
        while (fast !== null && fast.next !== null) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = null;
        const root = new TreeNode(slow.val);
        root.left = build(node);
        root.right = build(slow.next);
        return root;
    }
    return build(head);
};
