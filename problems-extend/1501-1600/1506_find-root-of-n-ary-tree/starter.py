from typing import List, Optional


# Judge-provided types (not editable here; the judge assembles their
# definitions into every submission):
#   ListNode:  .val int, .next ListNode | None
#   TreeNode:  .val int, .left / .right TreeNode | None
#   Node:      .val int, .children list[Node]
#   Node:      .val int, .children list[Node]; the tree arrives as its node list


class Solution:
    def findRoot(self, tree: List[Node]) -> Optional[Node]:
        raise NotImplementedError("TODO")
