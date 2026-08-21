class Solution:
    def roundsUntilNonDecreasing(self, nums: list[int]) -> int:
        # dp[i] = step at which nums[i] is removed (0 = never removed).
        st = []  # pairs (value, step)
        ans = 0
        for x in nums:
            cur = 0
            while st and st[-1][0] <= x:
                popped = st.pop()[1]
                if popped > cur:
                    cur = popped
            if st:
                cur += 1
            else:
                cur = 0
            st.append((x, cur))
            if cur > ans:
                ans = cur
        return ans
