/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    const merge = function (a, b) {
        const dummy = new ListNode(0);
        let tail = dummy;
        while (a !== null && b !== null) {
            if (a.val <= b.val) {
                tail.next = a;
                a = a.next;
            } else {
                tail.next = b;
                b = b.next;
            }
            tail = tail.next;
        }
        tail.next = a !== null ? a : b;
        return dummy.next;
    };

    if (head === null || head.next === null) {
        return head;
    }
    let slow = head;
    let fast = head.next;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    const mid = slow.next;
    slow.next = null;
    const left = sortList(head);
    const right = sortList(mid);
    return merge(left, right);
};
