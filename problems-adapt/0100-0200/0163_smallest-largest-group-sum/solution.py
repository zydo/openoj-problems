class Solution:
    def smallestLargestGroupSum(self, nums: list[int], k: int) -> int:
        best = [float("inf")]
        groups = [0] * k

        def backtrack(i, cur_max):
            # bound pruning: the running max only grows, so this branch
            # can no longer beat the best complete distribution
            if cur_max >= best[0]:
                return
            # all items placed: the running max is this leaf's cost
            if i == len(nums):
                best[0] = cur_max
                return
            tried = set()
            for j in range(k):
                # symmetry: groups holding equal totals are interchangeable,
                # so try each distinct total only once
                if groups[j] in tried:
                    continue
                tried.add(groups[j])
                groups[j] += nums[i]
                backtrack(i + 1, max(cur_max, groups[j]))
                groups[j] -= nums[i]

        backtrack(0, 0)
        return best[0]
