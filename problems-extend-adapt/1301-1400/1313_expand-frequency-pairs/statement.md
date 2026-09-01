# Expand Frequency Pairs

## Description

An integer list has been compressed with a simple run-length scheme: the
list is read as consecutive `[freq, val]` pairs, and each pair stands for
`freq` consecutive copies of the value `val`.

Given the compressed list `nums` — where the pair at even/odd positions
`2*i` and `2*i + 1` is `[nums[2*i], nums[2*i + 1]]` — expand every pair
and join the expansions from left to right. Return the resulting list.

### Example 1

```text
Input: nums = [2,5,4,7]
Output: [5,5,7,7,7,7]
Explanation: The pair [2,5] expands to two copies of 5, and the pair
[4,7] expands to four copies of 7. Joined: [5,5] + [7,7,7,7].
```

### Example 2

```text
Input: nums = [1,3,3,2,2,6]
Output: [3,2,2,2,6,6]
Explanation: The three pairs are [1,3], [3,2], and [2,6], expanding to
[3], [2,2,2], and [6,6] respectively.
```

### Example 3

```text
Input: nums = [5,1]
Output: [1,1,1,1,1]
Explanation: A single pair [5,1] yields the value 1 five times.
```

### Constraints

- `2 <= nums.length <= 100`
- `nums.length` is even
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

Step through `nums` two positions at a time so each step reads one
`[freq, val]` pair, and append `val` to the output `freq` times.
