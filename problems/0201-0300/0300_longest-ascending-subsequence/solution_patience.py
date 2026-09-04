from bisect import bisect_left


class Solution:
    def longestAscendingLength(self, nums: list[int]) -> int:
        # tails[k] = smallest value ending an ascending subsequence of
        # length k+1; it stays sorted, which licenses the binary search.
        tails = []
        for x in nums:
            # bisect_left finds the first tail >= x: an equal value
            # overwrites its own tail, enforcing strict increase.
            i = bisect_left(tails, x)
            if i == len(tails):
                # Bigger than every tail: x extends the best subsequence.
                tails.append(x)
            else:
                # Same length, cheaper ending — more room to extend later.
                tails[i] = x
        # tails itself need not be a real subsequence; only its length is.
        return len(tails)
