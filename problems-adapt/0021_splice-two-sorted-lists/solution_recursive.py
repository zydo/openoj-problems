from typing import List, Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def spliceTwoSortedLists(self, first: Optional[ListNode], second: Optional[ListNode]) -> Optional[ListNode]:
        # Base case: an empty list is already sorted, so the other list —
        # whatever remains of it — is the merged continuation as is.
        if first is None:
            return second
        if second is None:
            return first
        # The smaller head stands in front; the recursion merges what follows
        # it with the untouched other list. <= keeps first first on ties,
        # matching the iterative merge's stability.
        if first.val <= second.val:
            first.next = self.spliceTwoSortedLists(first.next, second)
            return first
        second.next = self.spliceTwoSortedLists(first, second.next)
        return second
