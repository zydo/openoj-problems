from typing import List, Optional


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def listContainsCycle(self, values: List[int], tailLink: int) -> bool:
        if not values:
            # Empty input is acyclic by convention.
            return False
        # Materialize the wire form: one node per value, then link in order.
        nodes = [ListNode(value) for value in values]
        for i in range(len(nodes) - 1):
            nodes[i].next = nodes[i + 1]
        # Close the cycle by pointing the tail at the given index.
        if tailLink != -1:
            nodes[-1].next = nodes[tailLink]
        # Walk from the head remembering every node by identity; a cycle
        # traps the walk, so the first node to come around a second time
        # proves it.
        seen = set()
        node = nodes[0]
        while node is not None:
            if node in seen:
                return True
            seen.add(node)
            node = node.next
        # The walk ran off the end of the list: no cycle.
        return False
