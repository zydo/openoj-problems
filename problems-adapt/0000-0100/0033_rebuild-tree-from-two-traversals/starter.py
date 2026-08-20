from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def rebuildTreeFromTwoTraversals(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        raise NotImplementedError("TODO")
