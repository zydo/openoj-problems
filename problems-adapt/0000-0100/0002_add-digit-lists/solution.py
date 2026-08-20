class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addDigitLists(self, first: ListNode | None, second: ListNode | None) -> ListNode | None:
        # Dummy head anchors the result list so the first node is not a
        # special case; tail always points at the last node built.
        dummy = ListNode(0)
        tail = dummy
        carry = 0
        # One loop condition covers all edge cases at once: lists of unequal
        # length and a leftover final carry (5 + 5 -> [0, 1]).
        while first or second or carry:
            # A list that has run out simply contributes nothing.
            total = carry
            if first:
                total += first.val
                first = first.next
            if second:
                total += second.val
                second = second.next
            # Split the column total into the new carry and the digit to append.
            carry, digit = divmod(total, 10)
            tail.next = ListNode(digit)
            tail = tail.next
        # Both inputs are exhausted and the carry is zero: the sum is complete.
        return dummy.next
