class Solution {

    private static final class ListNode {

        int val;
        ListNode next;

        ListNode(int val) {
            this.val = val;
        }
    }

    public int detectCycle(int[] values, int pos) {
        if (values.length == 0) {
            return -1;
        }
        ListNode[] nodes = new ListNode[values.length];
        for (int i = 0; i < values.length; i++) {
            nodes[i] = new ListNode(values[i]);
        }
        for (int i = 0; i < nodes.length - 1; i++) {
            nodes[i].next = nodes[i + 1];
        }
        if (pos != -1) {
            nodes[nodes.length - 1].next = nodes[pos];
        }
        ListNode slow = nodes[0];
        ListNode fast = nodes[0];
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                // Phase 2: one pointer back at the head; both advance one
                // step and meet exactly at the cycle-entry node.
                ListNode finder = nodes[0];
                while (finder != slow) {
                    finder = finder.next;
                    slow = slow.next;
                }
                int index = 0;
                ListNode entry = nodes[0];
                while (entry != finder) {
                    entry = entry.next;
                    index++;
                }
                return index;
            }
        }
        return -1;
    }
}
