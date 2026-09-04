class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def countVisibleNodes(self, root: TreeNode | None) -> int:
        count = 0
        # each entry carries the max value along its root-to-node path
        stack = [(root, root.val)]
        while stack:
            node, max_so_far = stack.pop()
            # non-strict: a value equal to the path max is still visible; raising
            # max_so_far here means children see the true maximum of their path
            if node.val >= max_so_far:
                count += 1
                max_so_far = node.val
            if node.left:
                stack.append((node.left, max_so_far))
            if node.right:
                stack.append((node.right, max_so_far))
        return count
