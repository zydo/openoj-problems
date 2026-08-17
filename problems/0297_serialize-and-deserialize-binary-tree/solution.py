from collections import deque
from typing import Deque, List, Optional

MARKER = 100001


class _Node:
    __slots__ = ("val", "left", "right")

    def __init__(self, val: int) -> None:
        self.val = val
        self.left: Optional["_Node"] = None
        self.right: Optional["_Node"] = None


class Codec:
    """Level-order tree codec.

    `serialize` rebuilds the tree from the marker array, then walks it in
    level order emitting one token per slot ("null" for a missing child),
    trimming trailing nulls. `deserialize` is the mirror image: split the
    tokens, rebuild the tree with a queue (null slots fill a child position
    without joining the queue), and walk it back to the marker array. Both
    directions are iterative, so deep trees are safe.
    """

    def serialize(self, root: List[int]) -> str:
        tree = self._build(root)
        tokens: List[str] = []
        queue: Deque[Optional[_Node]] = deque([tree])
        while queue:
            node = queue.popleft()
            if node is None:
                tokens.append("null")
                continue
            tokens.append(str(node.val))
            queue.append(node.left)
            queue.append(node.right)
        while tokens and tokens[-1] == "null":
            tokens.pop()
        return ",".join(tokens)

    def deserialize(self, data: str) -> List[int]:
        if data == "":
            return []
        tokens = data.split(",")
        root = _Node(int(tokens[0]))
        queue: Deque[_Node] = deque([root])
        index = 1
        while queue and index < len(tokens):
            node = queue.popleft()
            if index < len(tokens):
                token = tokens[index]
                index += 1
                if token != "null":
                    node.left = _Node(int(token))
                    queue.append(node.left)
            if index < len(tokens):
                token = tokens[index]
                index += 1
                if token != "null":
                    node.right = _Node(int(token))
                    queue.append(node.right)
        return self._level(root)

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

    @staticmethod
    def _level(root: _Node) -> List[int]:
        out: List[int] = []
        queue: Deque[Optional[_Node]] = deque([root])
        while queue:
            node = queue.popleft()
            if node is None:
                out.append(MARKER)
                continue
            out.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
        while out and out[-1] == MARKER:
            out.pop()
        return out
