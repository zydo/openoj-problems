import sys
# The list can hold 5000 nodes, past CPython's default recursion limit.
sys.setrecursionlimit(10_000)


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def reverseWholeList(self, head: ListNode | None) -> ListNode | None:
        # A missing head or a last node is already reversed: it is its own
        # new head and terminates the recursion.
        if head is None or head.next is None:
            return head
        # Reverse the tail first: the recursion returns the head of the
        # already-reversed remainder.
        new_head = self.reverseWholeList(head.next)
        # head trails that reversed chain; point its own successor back at
        # it, then sever head's forward link so it becomes the tail.
        head.next.next = head
        head.next = None
        return new_head
