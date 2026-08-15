import java.util.List;

class Solution {

    public ListNode mergeKLists(List<ListNode> lists) {
        if (lists == null || lists.isEmpty()) return null;
        java.util.List<ListNode> cur = new java.util.ArrayList<>(lists);
        while (cur.size() > 1) {
            java.util.List<ListNode> next = new java.util.ArrayList<>();
            for (int i = 0; i < cur.size(); i += 2) {
                if (i + 1 < cur.size()) {
                    next.add(merge2(cur.get(i), cur.get(i + 1)));
                } else {
                    next.add(cur.get(i));
                }
            }
            cur = next;
        }
        return cur.get(0);
    }

    private ListNode merge2(ListNode a, ListNode b) {
        ListNode dummy = new ListNode(0);
        ListNode tail = dummy;
        while (a != null && b != null) {
            if (a.val <= b.val) {
                tail.next = a;
                a = a.next;
            } else {
                tail.next = b;
                b = b.next;
            }
            tail = tail.next;
        }
        tail.next = a != null ? a : b;
        return dummy.next;
    }
}
