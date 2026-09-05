# Split On The Tightest Gap

## Description

You are given an integer array `nums`. Divide its values into two
groups, `nums1` and `nums2`, so that every element lands in exactly
one group and neither group is empty.

A division is scored as `|max(nums1) - min(nums2)|` — the distance
between the largest element kept in the first group and the smallest
element handed to the second.

Return the smallest score any division can achieve.

### Example 1

```text
Input: nums = [6,3,8,1]
Output: 2
Explanation: Put 1 alone in nums1 and everything else in nums2, so
nums1 = [1] and nums2 = [3,8,6]. The score is |1 - 3| = 2, and no
division can do better.
```

### Example 2

```text
Input: nums = [5,5,7]
Output: 0
Explanation: One copy of 5 goes to nums1 and the rest to nums2, e.g.
nums1 = [5] and nums2 = [5,7]. Both boundary values are 5, so the
score is |5 - 5| = 0.
```

### Example 3

```text
Input: nums = [12,4,19]
Output: 7
Explanation: Cutting between 4 and 12 gives nums1 = [4] and
nums2 = [12,19], scoring |4 - 12| = 8. Cutting between 12 and 19
gives nums1 = [4,12] and nums2 = [19], scoring |12 - 19| = 7, and no
division scores below that.
```

### Constraints

- `2 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Only the two boundary values matter: the largest element assigned to
`nums1` and the smallest assigned to `nums2`. Everything else can sit
anywhere.

### Hint 2

Rank the values from smallest to largest. In that order, the two
boundary values of the best division are neighbors.

### Hint 3

Scan the sorted array once and take the narrowest distance between
neighbors — cutting right after the left member of that pair realizes
it.
