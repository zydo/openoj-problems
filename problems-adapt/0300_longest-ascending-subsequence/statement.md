# Longest Ascending Subsequence

## Description

You are given an integer array `nums`. A subsequence is what remains after
deleting any entries you like, keeping the survivors in their original order —
the survivors need not be adjacent.

Find the longest subsequence whose entries climb strictly from left to right,
and return its length.

### Example 1

```text
Input: nums = [6,1,3,9,4,2,11]
Output: 4
Explanation: Deleting 6, 9 and 2 leaves 1, 3, 4, 11 — four entries, each
larger than the one before it.
```

### Example 2

```text
Input: nums = [5,5,5]
Output: 1
Explanation: Equal does not climb. No two of these entries form a strictly
ascending pair, so one entry is the best there is.
```

### Example 3

```text
Input: nums = [12,8,15,14,9,16]
Output: 3
Explanation: 8, 14, 16 does it. Three is also reached by 8, 15, 16, but no
four entries climb.
```

### Constraints

- `1 <= nums.length <= 2500`
- `-10^4 <= nums[i] <= 10^4`

### Follow-up

Comparing every entry against every earlier entry settles it in quadratic
time. What structure would you keep to avoid those inner scans and finish in
`O(n log n)`?

## Hints

### Hint 1

Classify subsequences by where they end. If `dp[i]` is the length of the
longest climbing chain ending exactly at `nums[i]`, then `dp[i]` is one more
than the best `dp[j]` over earlier entries smaller than `nums[i]`.

### Hint 2

For the faster method, track one number per length: the smallest value that
has ever ended a climbing chain of that length. Call it `tails`.

### Hint 3

`tails` comes out sorted, which is what makes searching it fast: meet a new
entry `x` and you only need the first tail that is at least `x`.

### Hint 4

No such tail means `x` beats every ending and lengthens the best chain;
otherwise `x` takes that tail's place — same length, cheaper ending, and more
headroom for whatever comes next. The final length of `tails` is the answer.
