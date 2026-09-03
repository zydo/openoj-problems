# Nearest One-Two Pair

## Description

An array nums holds nothing but the values 0, 1, and 2.

Call a pair of positions (i, j) matching when nums[i] == 1 and nums[j] == 2.

Among every matching pair, find the smallest possible value of abs(i - j).
When the array contains no matching pair at all, return -1.

### Example 1

```text
Input: nums = [0,2,0,1,0,2,0,1]
Output: 2
Explanation:
The value 1 sits at indices 3 and 7, the value 2 at indices 1 and 5.
Pairing the 1 at index 3 with the 2 at index 5 gives abs(3 - 5) = 2,
and no matching pair lands closer than that, so the answer is 2.
```

### Example 2

```text
Input: nums = [1,1,0,0]
Output: -1
Explanation: The array never contains a 2, so no pair matches.
```

### Example 3

```text
Input: nums = [2,1,2,0,1]
Output: 1
Explanation: The 1 at index 1 sits right next to the 2 at index 2.
```

### Constraints

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 2`

## Hints

### Hint 1

The array is tiny — comparing every 1 position against every 2 position
is already fast enough.

### Hint 2

A single left-to-right pass suffices: remember where the most recent 1 and
the most recent 2 were, and test the current element against the opposite
bookmark.
