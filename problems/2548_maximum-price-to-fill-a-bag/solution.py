from typing import List, Optional


class Solution:
    def maxPrice(self, items: List[List[int]], capacity: int) -> float:
        total_weight = sum(w for _, w in items)
        if total_weight < capacity:
            return -1.0
        ordered = sorted(items, key=lambda item: item[0] / item[1], reverse=True)
        price = 0.0
        remaining = capacity
        for p, w in ordered:
            if remaining <= 0:
                break
            if w <= remaining:
                price += p
                remaining -= w
            else:
                price += p * (remaining / w)
                remaining = 0
        return price
