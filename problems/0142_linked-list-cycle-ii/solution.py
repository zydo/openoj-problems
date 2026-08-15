from typing import List


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def detectCycle(self, values: List[int], pos: int) -> int:
        if not values:
            return -1
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
                # Phase 2: one pointer back at the head; both advance one
                # step and meet exactly at the cycle-entry node.
                finder = nodes[0]
                while finder is not slow:
                    finder = finder.next
                    slow = slow.next
                index = 0
                entry = nodes[0]
                while entry is not finder:
                    entry = entry.next
                    index += 1
                return index
        return -1
