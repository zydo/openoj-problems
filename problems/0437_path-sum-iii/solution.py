from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        counter = {}
        counter[0] = 1

        def dfs(node, running):
            if not node:
                return 0
            running += node.val
            total = counter.get(running - targetSum, 0)
            counter[running] = counter.get(running, 0) + 1
            total += dfs(node.left, running)
            total += dfs(node.right, running)
            counter[running] -= 1
            return total

        return dfs(root, 0)
