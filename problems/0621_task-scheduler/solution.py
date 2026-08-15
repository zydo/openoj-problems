from typing import List, Optional
from collections import Counter


class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        counts = Counter(tasks)
        max_freq = max(counts.values())
        num_max = sum(1 for v in counts.values() if v == max_freq)
        return max(len(tasks), (max_freq - 1) * (n + 1) + num_max)
