class Solution:
    def survivesDoubleReversal(self, num: int) -> bool:
        return num == 0 or num % 10 != 0
