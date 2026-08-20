class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def minimumTreeMonitors(self, root: TreeNode | None) -> int:
        monitors = 0

        def dfs(node):
            # States: 0 = uncovered, 1 = has a monitor, 2 = covered.
            if node is None:
                # Null reports covered so leaves start uncovered and push
                # the first monitor one level up.
                return 2
            left = dfs(node.left)
            right = dfs(node.right)
            if left == 0 or right == 0:
                # An uncovered child forces a monitor here — the parent of
                # an uncovered node is always the best placement.
                nonlocal monitors
                monitors += 1
                return 1
            if left == 1 or right == 1:
                return 2
            return 0

        # The root has no parent above it to supply coverage.
        if dfs(root) == 0:
            monitors += 1
        return monitors
