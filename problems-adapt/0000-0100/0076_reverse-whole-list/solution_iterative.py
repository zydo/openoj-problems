class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def reverseWholeList(self, head: ListNode | None) -> ListNode | None:
        # prev heads the already-reversed chain; current is the node being
        # processed. Invariant: behind prev everything is reversed, ahead of
        # current nothing has been touched.
        prev = None
        current = head
        while current:
            # Save the forward link before the flip destroys it.
            nxt = current.next
            current.next = prev
            prev = current
            current = nxt
        # current is exhausted: prev points at the original tail, the new head.
        return prev
