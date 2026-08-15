from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def rob(self, root: Optional[TreeNode]) -> int:
        def best(node):
            if node is None:
                return (0, 0)
            left_rob, left_skip = best(node.left)
            right_rob, right_skip = best(node.right)
            rob_here = node.val + left_skip + right_skip
            skip_here = max(left_rob, left_skip) + max(right_rob, right_skip)
            return (rob_here, skip_here)

        return max(best(root))
