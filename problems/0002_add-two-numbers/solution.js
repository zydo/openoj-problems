/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0);
    let tail = dummy;
    let carry = 0;
    while (l1 !== null || l2 !== null || carry !== 0) {
        let total = carry;
        if (l1 !== null) {
            total += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            total += l2.val;
            l2 = l2.next;
        }
        carry = Math.floor(total / 10);
        tail.next = new ListNode(total % 10);
        tail = tail.next;
    }
    return dummy.next;
};
