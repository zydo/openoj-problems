from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def bstFromPreorder(self, preorder: List[int]) -> Optional[TreeNode]:
        index = 0

        def build(low, high):
            nonlocal index
            if index == len(preorder):
                return None
            value = preorder[index]
            if value < low or value > high:
                return None
            index += 1
            node = TreeNode(value)
            node.left = build(low, value - 1)
            node.right = build(value + 1, high)
            return node

        return build(float("-inf"), float("inf"))
