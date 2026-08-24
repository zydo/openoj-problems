from typing import List, Optional


# Judge-provided types (not editable here; the judge assembles their
# definitions into every submission):
#   ListNode:  .val int, .next ListNode | None
#   TreeNode:  .val int, .left / .right TreeNode | None


class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        raise NotImplementedError("TODO")
