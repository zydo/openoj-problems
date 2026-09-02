class Solution:
    def findNumber(self, maskedNumber: MaskedNumber) -> int:
        # A single-bit mask shares at most one bit with n, so the reply is
        # 0 or 1: positive means bit i of n itself is set.
        number = 0
        for bit in range(30):
            if maskedNumber.commonSetBits(1 << bit) > 0:
                number |= 1 << bit
        return number
