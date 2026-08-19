from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def cutHeights(self, root: Optional[TreeNode], queries: List[int]) -> List[int]:
        raise NotImplementedError("TODO")
