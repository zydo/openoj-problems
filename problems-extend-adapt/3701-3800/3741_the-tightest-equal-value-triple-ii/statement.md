# The Tightest Equal-Value Triple II

## Description

You are given an integer array `nums` of length `n`.

Call a triple of indices `(i, j, k)` matching when the three indices are
distinct and `nums[i] == nums[j] == nums[k]`. A matching triple's span is
`abs(i - j) + abs(j - k) + abs(k - i)`, where `abs(x)` denotes the
absolute value of `x`.

Return the smallest span any matching triple can have, or `-1` when no
value in the array occupies three distinct indices.

### Example 1

```text
Input: nums = [2,5,2,1,2]
Output: 8
Explanation: The value 2 occupies indices 0, 2 and 4, so the tightest
matching triple spans abs(0 - 2) + abs(2 - 4) + abs(4 - 0) = 2 + 2 + 4
= 8.
```

### Example 2

```text
Input: nums = [2,3,2,3,3,2]
Output: 6
Explanation: Two values repeat often enough to build a matching triple.
The 2s reach from index 0 to index 5 for a span of 10, while the 3s sit
at 1, 3 and 4, spanning abs(1 - 3) + abs(3 - 4) + abs(4 - 1) = 2 + 1 +
3 = 6 — the winner.
```

### Example 3

```text
Input: nums = [1,2,2,3]
Output: -1
Explanation: No value occurs at three distinct indices, so no matching
triple exists and the answer is -1.
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `1 <= nums[i] <= n`

## Hints

### Hint 1

However the three indices are ordered, the three pairwise gaps fold into
twice the gap between the outermost indices: the span is always
`2 * (max(i, j, k) - min(i, j, k))`.

### Hint 2

Collect the positions of every distinct value in one left-to-right sweep;
each list comes out sorted automatically. A value needs at least three
occurrences before it can take part in a matching triple at all.

### Hint 3

Inside a sorted position list, some triple of consecutive entries is
always optimal — widening a window past three neighbors never shrinks the
distance between its ends. Scan every window of three adjacent entries,
keep the smallest `list[end] - list[start]`, and double it.
