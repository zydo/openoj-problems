from typing import List


class Solution:
    def finalTally(self, tokens: List[str]) -> int:
        value = 0
        for operation in tokens:
            value += 1 if operation[1] == "+" else -1
        return value
