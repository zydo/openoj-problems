from math import gcd
from typing import List


class Solution:
    def lowestTermFractions(self, n: int) -> List[str]:
        return [
            f"{numer}/{denom}" for numer in range(1, n) for denom in range(numer + 1, n + 1) if gcd(numer, denom) == 1
        ]
