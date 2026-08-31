from typing import Dict


class PrefixSumMap:
    """A prefix trie whose every node on a key's path carries the prefixSum of the
    current values of all live keys passing through it.

    put() adds the key's CHANGE in value along its path -- a side map
    remembers the previous value, so overwriting a key corrects the running
    totals instead of double-counting -- and prefixSum() walks the prefix and
    returns the node's total, or 0 when the walk falls off the trie.
    """

    def __init__(self) -> None:
        self.children: Dict[str, "PrefixSumMap"] = {}
        self.score = 0
        self.values: Dict[str, int] = {}

    def put(self, key: str, val: int) -> None:
        delta = val - self.values.get(key, 0)
        self.values[key] = val
        node = self
        for char in key:
            node = node.children.setdefault(char, PrefixSumMap())
            node.score += delta

    def prefixSum(self, prefix: str) -> int:
        node = self
        for char in prefix:
            node = node.children.get(char)
            if node is None:
                return 0
        return node.score
