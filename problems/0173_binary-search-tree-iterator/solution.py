from collections import deque
from typing import Deque, List, Optional

MARKER = -1


class _Node:
    __slots__ = ("val", "left", "right")

    def __init__(self, val: int) -> None:
        self.val = val
        self.left: Optional["_Node"] = None
        self.right: Optional["_Node"] = None


class BSTIterator:
    """Lazy in-order traversal of a BST via a left-spine stack.

    The constructor rebuilds the tree from the level-order array (a queue
    walk), then pushes the left spine of the root; the stack top is always
    the smallest unvisited node. `next` pops it and pushes the left spine of
    its right child, so each node enters and leaves the stack exactly once
    and the stack never holds more than one root-to-node path — O(h) memory.
    """

    def __init__(self, root: List[int]) -> None:
        self.stack: List[_Node] = []
        self._push_spine(self._build(root))

    @staticmethod
    def _build(level: List[int]) -> Optional[_Node]:
        if not level:
            return None
        root = _Node(level[0])
        queue: Deque[_Node] = deque([root])
        index = 1
        while queue and index < len(level):
            node = queue.popleft()
            if index < len(level):
                value = level[index]
                index += 1
                if value != MARKER:
                    node.left = _Node(value)
                    queue.append(node.left)
            if index < len(level):
                value = level[index]
                index += 1
                if value != MARKER:
                    node.right = _Node(value)
                    queue.append(node.right)
        return root

    def _push_spine(self, node: Optional[_Node]) -> None:
        while node is not None:
            self.stack.append(node)
            node = node.left

    def next(self) -> int:
        node = self.stack.pop()
        self._push_spine(node.right)
        return node.val

    def hasNext(self) -> bool:  # noqa: N802 — LeetCode API
        return bool(self.stack)
