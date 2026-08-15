from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        index = {value: i for i, value in enumerate(inorder)}
        position = [0]

        def build(low, high):
            if low >= high:
                return None
            value = preorder[position[0]]
            position[0] += 1
            node = TreeNode(value)
            mid = index[value]
            node.left = build(low, mid)
            node.right = build(mid + 1, high)
            return node

        return build(0, len(inorder))
