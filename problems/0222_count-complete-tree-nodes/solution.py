from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def _depth(self, node, left):
        depth = 0
        while node is not None:
            depth += 1
            node = node.left if left else node.right
        return depth

    def countNodes(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        left_depth = self._depth(root, True)
        right_depth = self._depth(root, False)
        if left_depth == right_depth:
            return (1 << left_depth) - 1
        return 1 + self.countNodes(root.left) + self.countNodes(root.right)
