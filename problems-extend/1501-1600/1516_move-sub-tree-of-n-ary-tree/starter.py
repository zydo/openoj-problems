from typing import List, Optional


# Judge-provided types (not editable here; the judge assembles their
# definitions into every submission):
#   ListNode:  .val int, .next ListNode | None
#   TreeNode:  .val int, .left / .right TreeNode | None
#   Node:      .val int, .children list[Node]
#   Node:      .val int, .children list[Node]; the parameter is a node inside the aliased tree


class Solution:
    def moveSubTree(self, root: Optional[Node], p: Optional[Node], q: Optional[Node]) -> Optional[Node]:
        raise NotImplementedError("TODO")
