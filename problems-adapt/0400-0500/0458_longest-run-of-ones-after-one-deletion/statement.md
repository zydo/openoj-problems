# Longest Run of Ones After One Deletion

## Description

You are given a binary array `nums`. Exactly one element of your choosing
must be removed from it.

After the removal, find the longest contiguous stretch made up entirely of
`1`s and return its length. If no `1` remains, return `0`.

### Example 1

```text
Input: nums = [1,0,1,1,0,1]
Output: 3
Explanation: Removing the 0 at index 1 leaves [1,1,1,0,1], whose longest
all-ones stretch is 1,1,1.
```

### Example 2

```text
Input: nums = [1,1,0,0,1,1,1,0,1,1]
Output: 5
Explanation: Removing the 0 at index 7 welds 1,1,1 and 1,1 into a stretch
of five. The pair of zeros at indices 2 and 3 cannot be bridged — one
removal clears only one of them.
```

### Example 3

```text
Input: nums = [1,1,1,1,1]
Output: 4
Explanation: A removal is compulsory even when nothing needs fixing, so one
of the five ones is sacrificed.
```

### Constraints

- `1 <= nums.length <= 100,000`
- each `nums[i]` is `0` or `1`

## Hints

### Hint 1

Whatever you remove, the surviving ones form runs. Which single removal can
ever help? Only one that drops a `0` wedged between two runs — so the
question becomes: how long a stretch can you cover while crossing at most
one `0`?

### Hint 2

Sweep a window that never holds more than one `0`: grow the right edge,
and whenever a second `0` enters, advance the left edge until one leaves.

### Hint 3

The best window still contains its `0` (or, if the array is all ones,
nothing at all), and one removal is compulsory — so the answer is the best
window length minus one, with the all-ones array answering `n - 1`.
