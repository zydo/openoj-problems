class Solution:
    def maxNonadjacentValueScore(self, values: list[int]) -> int:
        # Each distinct value has weight v * count[v], so the optimization
        # selects nonconsecutive weighted labels using a two-state recurrence
        # over the sorted distinct values.
        count = {}
        for v in values:
            count[v] = count.get(v, 0) + 1
        take = 0
        skip = 0
        prev_value = None
        for value in sorted(count):
            # Adjacent predecessor conflicts with its take; a gap (missing v-1)
            # makes taking v conflict with nothing, so both states carry in.
            base = skip if prev_value == value - 1 else max(take, skip)
            take, skip = base + value * count[value], max(take, skip)
            prev_value = value
        return max(take, skip)
