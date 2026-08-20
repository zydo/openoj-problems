from bisect import bisect_right
class Solution:
    def canonicalWinningPermutation(self, available: list[int], opponents: list[int]) -> list[int]:
        # Greedy: for each opponents[i] (left to right) assign the smallest unused
        # available value strictly greater than opponents[i], or the smallest unused
        # value. A Fenwick tree over the sorted values gives order statistics.
        values = sorted(available)
        size = len(values)

        tree = [0] * (size + 1)

        def update(index: int, delta: int) -> None:
            while index <= size:
                tree[index] += delta
                index += index & -index

        def prefix_count(index: int) -> int:
            total = 0
            while index > 0:
                total += tree[index]
                index -= index & -index
            return total

        def kth_smallest(k: int) -> int:
            # 1-indexed k-th smallest remaining value.
            index = 0
            remaining = k
            step = 1 << (size.bit_length())
            while step:
                nxt = index + step
                if nxt <= size and tree[nxt] < remaining:
                    index = nxt
                    remaining -= tree[nxt]
                step >>= 1
            return index + 1

        for rank in range(1, size + 1):
            update(rank, 1)

        result = []
        for value in opponents:
            # number of remaining values <= value
            less_or_equal = prefix_count(bisect_right(values, value))
            rank = kth_smallest(less_or_equal + 1)
            if rank > size:  # nothing strictly greater remains: use the smallest
                rank = kth_smallest(1)
            update(rank, -1)
            result.append(values[rank - 1])
        return result
