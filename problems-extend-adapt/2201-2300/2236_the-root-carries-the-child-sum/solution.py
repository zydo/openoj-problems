# Definition for a binary tree node is provided by the judge.
class Solution:
    def carriesChildSum(self, root: Optional[TreeNode]) -> bool:
        return root.val == root.left.val + root.right.val
