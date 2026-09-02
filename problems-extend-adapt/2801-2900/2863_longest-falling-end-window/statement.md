# Longest Falling-End Window

## Description

An array of integers `nums` is given.

A window is a non-empty run of consecutive elements taken from `nums`.
Call such a window falling-end when the element at its left edge is
strictly larger than the element at its right edge.

Measure the longest falling-end window inside `nums` and return its
length — or `0` when no window qualifies. (Any single element's window
starts and ends on the same value, so it never qualifies.)

### Example 1

```text
Input: nums = [5,9,5,5,1]
Output: 5
Explanation: The whole array works: it opens on 5 and closes on 1, and
5 > 1. Note that a window would not qualify if its two edge values were
equal — the strict comparison matters.
```

### Example 2

```text
Input: nums = [3,7,4,8,6]
Output: 4
Explanation: The window [7,4,8,6] opens on 7 and closes on 6, which
satisfies the rule, and nothing longer does.
```

### Example 3

```text
Input: nums = [2,4,6,8]
Output: 0
Explanation: Every value rises along the array, so every window's left
edge is smaller than its right edge and none qualifies.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`

## Hints

### Hint 1

Start by pretending all the values are distinct.

### Hint 2

Tag every element with its position, producing pairs of the form
`(nums[i], i)`.

### Hint 3

Order those pairs from the largest value down.

### Hint 4

Sweep the ordered pairs while remembering `min_index`, the smallest
position encountered so far.

### Hint 5

Standing on a pair `(nums[x], x)`, the value there can close a window
that opened at `min_index`, so try `ans = max(ans, min_index - x)`.

### Hint 6

Finally, drop the distinct-values assumption by handling all pairs of
one value as a single step of the sweep.
