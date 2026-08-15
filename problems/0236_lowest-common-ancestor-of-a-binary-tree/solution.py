from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def lowestCommonAncestor(self, root: Optional[TreeNode], p: int, q: int) -> int:
        def find(node: Optional[TreeNode]) -> Optional[TreeNode]:
            if node is None or node.val == p or node.val == q:
                return node
            left = find(node.left)
            right = find(node.right)
            if left and right:
                return node
            return left if left else right

        return find(root).val
