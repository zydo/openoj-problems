from typing import List, Optional


class Solution:
    def longestOverworkedStretch(self, hours: List[int]) -> int:
        # earliest index each prefix value has been seen; {0: -1} lets
        # blocks starting at index 0 be handled uniformly
        first = {0: -1}
        prefix = 0
        best = 0
        for i, hours_day in enumerate(hours):
            # heavy day scores +1, light day -1: an overworked block is
            # exactly a subarray whose sum is strictly positive
            prefix += 1 if hours_day > 8 else -1
            if prefix > 0:
                # the whole prefix hours[0..i] is already overworked
                best = i + 1
            elif prefix - 1 in first:
                # cut just after the earliest prefix-1: the remainder sums to
                # exactly 1, and since steps are unit-sized no longer block
                # can end at i
                best = max(best, i - first[prefix - 1])
            if prefix not in first:
                # record only the first sighting so stored indices stay leftmost
                first[prefix] = i
        return best
