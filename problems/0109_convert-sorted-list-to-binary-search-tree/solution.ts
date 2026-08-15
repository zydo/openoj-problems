function sortedListToBST(head: ListNode | null): TreeNode | null {
    function build(node: ListNode | null): TreeNode | null {
        if (node === null) {
            return null;
        }
        if (node.next === null) {
            return new TreeNode(node.val);
        }
        let prev: ListNode | null = null;
        let slow: ListNode | null = node;
        let fast: ListNode | null = node;
        while (fast !== null && fast.next !== null) {
            prev = slow;
            slow = slow!.next;
            fast = fast.next.next;
        }
        prev!.next = null;
        const root = new TreeNode(slow!.val);
        root.left = build(node);
        root.right = build(slow!.next);
        return root;
    }
    return build(head);
}
