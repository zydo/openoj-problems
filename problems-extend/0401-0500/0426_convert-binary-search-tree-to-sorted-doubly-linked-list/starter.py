from typing import List, Optional


# Judge-provided types (not editable here; the judge assembles their
# definitions into every submission):
#   ListNode:  .val int, .next ListNode | None
#   TreeNode:  .val int, .left / .right TreeNode | None
#   NodeWithNext:  .val int, .left (prev) / .right (next) / .parent


class Solution:
    def treeToDoublyList(self, root: Optional[TreeNode]) -> Optional[NodeWithNext]:
        raise NotImplementedError("TODO")
