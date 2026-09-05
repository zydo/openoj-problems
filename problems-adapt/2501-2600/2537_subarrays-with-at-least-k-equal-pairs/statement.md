# Subarrays With At Least K Equal Pairs

## Description

You are given an integer array `nums` and an integer `k`.

Two positions `i < j` inside a window form an **equal pair** when the entries
at those positions match: `arr[i] == arr[j]`.

Call a contiguous non-empty stretch of `nums` **rich** when it holds at least
`k` equal pairs. Return how many rich stretches `nums` contains.

### Example 1

```text
Input: nums = [2,2,2,2], k = 6
Output: 1
Explanation: The whole array offers C(4,2) = 6 equal pairs. Drop any element
and at most 3 pairs remain, so no shorter stretch is rich.
```

### Example 2

```text
Input: nums = [5,7,3,5,8,8,3], k = 2
Output: 4
Explanation: The rich stretches are [5,7,3,5,8,8], the whole array,
[7,3,5,8,8,3] and [3,5,8,8,3] — each holds two or more equal pairs, and every
shorter stretch holds at most one.
```

### Example 3

```text
Input: nums = [6,3,6,3,6], k = 2
Output: 3
Explanation: The two interleaved values build pairs quickly: the stretches
[6,3,6,3], [3,6,3,6] and the whole array each reach 2 pairs.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i], k <= 10^9`

## Hints

### Hint 1

Fix a window and ask where its rich-ness can come from. If a stretch is not
rich, neither is any stretch nested inside it — the pairs only drop.

### Hint 2

Track the pair count incrementally as the window slides: an entering value
picks up one pair per copy already inside; a leaving value drops one pair per
copy left behind.

### Hint 3

Sweep the right end forward. Whenever the window turns rich, so does every
longer window sharing that right end — count them all at once, then shrink
from the left until the window is lean again.

### Hint 4

A hash map of in-window counts keeps both updates constant time, which
matters because values reach 10⁹.
