from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def bstToGst(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        total = 0

        def reverse_inorder(current):
            nonlocal total
            if current is None:
                return
            reverse_inorder(current.right)
            total += current.val
            current.val = total
            reverse_inorder(current.left)

        reverse_inorder(root)
        return root
