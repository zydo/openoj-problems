from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def goodNodes(self, root: Optional[TreeNode]) -> int:
        count = 0
        stack = [(root, root.val)]
        while stack:
            node, max_so_far = stack.pop()
            if node.val >= max_so_far:
                count += 1
                max_so_far = node.val
            if node.left:
                stack.append((node.left, max_so_far))
            if node.right:
                stack.append((node.right, max_so_far))
        return count
