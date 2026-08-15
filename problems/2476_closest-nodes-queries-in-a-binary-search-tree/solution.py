from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def closestNodes(
        self, root: Optional[TreeNode], queries: List[int]
    ) -> List[List[int]]:
        values = []
        stack = []
        current = root
        while current or stack:
            while current:
                stack.append(current)
                current = current.left
            current = stack.pop()
            values.append(current.val)
            current = current.right

        import bisect

        answer = []
        for query in queries:
            upper = bisect.bisect_right(values, query)
            minimum = values[upper - 1] if upper > 0 else -1
            lower = bisect.bisect_left(values, query)
            maximum = values[lower] if lower < len(values) else -1
            answer.append([minimum, maximum])
        return answer
