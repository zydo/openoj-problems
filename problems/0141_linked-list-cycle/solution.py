from typing import List, Optional


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def hasCycle(self, values: List[int], pos: int) -> bool:
        if not values:
            return False
        nodes = [ListNode(value) for value in values]
        for i in range(len(nodes) - 1):
            nodes[i].next = nodes[i + 1]
        if pos != -1:
            nodes[-1].next = nodes[pos]
        slow = nodes[0]
        fast = nodes[0]
        while fast is not None and fast.next is not None:
            slow = slow.next
            fast = fast.next.next
            if slow is fast:
                return True
        return False
