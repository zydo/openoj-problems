from typing import List, Optional


# Judge-provided types (not editable here; the judge assembles their
# definitions into every submission):
#   ListNode:  .val int, .next ListNode | None
#   TreeNode:  .val int, .left / .right TreeNode | None
#   NodeWithNext:  .val int, .left/.right/.next/.parent NodeWithNext | None


class Solution:
    def inorderSuccessor(self, tree: Optional[NodeWithNext], node: int) -> Optional[NodeWithNext]:
        raise NotImplementedError("TODO")
