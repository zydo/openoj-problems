function addDigitLists(
    first: ListNode | null,
    second: ListNode | null,
): ListNode | null {
    // Dummy head anchors the result list so the first node is not a
    // special case; tail always points at the last node built.
    const dummy = new ListNode(0);
    let tail = dummy;
    let carry = 0;
    // One loop condition covers all edge cases at once: lists of unequal
    // length and a leftover final carry (5 + 5 -> [0, 1]).
    while (first !== null || second !== null || carry !== 0) {
        // A list that has run out simply contributes nothing.
        let total = carry;
        if (first !== null) {
            total += first.val;
            first = first.next;
        }
        if (second !== null) {
            total += second.val;
            second = second.next;
        }
        // Split the column total into the new carry and the digit to append.
        carry = Math.floor(total / 10);
        tail.next = new ListNode(total % 10);
        tail = tail.next;
    }
    // Both inputs are exhausted and the carry is zero: the sum is complete.
    return dummy.next;
}
