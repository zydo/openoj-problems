from typing import List


class Solution:
    def scatterString(self, s: str, indices: List[int]) -> str:
        # indices[i] names s[i]'s destination outright, so just write each
        # character straight into its final slot.
        result = [""] * len(s)
        for i, ch in enumerate(s):
            result[indices[i]] = ch
        return "".join(result)
