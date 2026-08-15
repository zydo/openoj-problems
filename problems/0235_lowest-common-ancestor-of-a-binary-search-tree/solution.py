from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def lowestCommonAncestor(self, root: Optional[TreeNode], p: int, q: int) -> int:
        node = root
        while node:
            if p < node.val and q < node.val:
                node = node.left
            elif p > node.val and q > node.val:
                node = node.right
            else:
                return node.val
        return -1
