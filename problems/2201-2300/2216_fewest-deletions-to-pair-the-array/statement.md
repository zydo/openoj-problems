# Fewest Deletions to Pair the Array

## Description

Call an integer array `nums` well-paired when both of these hold:

- Its length is even.
- For every even index `i`, the partners `nums[i]` and `nums[i + 1]` are
  different values.

The empty array counts as well-paired.

You may strike out any elements you like. Each strike closes the gap: everything
to the right of the removed value slides one slot left, and everything to its
left stays put.

How few strikes are needed to leave a well-paired array?

### Example 1

```text
Input: nums = [4,4,4,4]
Output: 4
Explanation: Every element is the same, so no two partners can ever
differ; striking all four leaves the empty array, which is well-paired.
No smaller number of strikes works.
```

### Example 2

```text
Input: nums = [1,2,1,2]
Output: 0
Explanation: The array already has even length and both partner pairs —
(1,2) and (1,2) — hold different values, so nothing needs to go.
```

### Example 3

```text
Input: nums = [3,3,1,1,2]
Output: 1
Explanation: Strike one of the two leading 3s, leaving [3,1,1,2]. Its
pairs (3,1) and (1,2) both differ, so it is well-paired. One strike is
the least that achieves this.
```

### Example 4

```text
Input: nums = [7]
Output: 1
Explanation: A lone element has odd length; the only well-paired option
is the empty array.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Walk the array deciding each element's fate as you go: once the element now
occupying the current even slot is fixed, what does the next element have to
look like to be kept?

### Hint 2

An element kept into an odd slot must differ from its partner; when it
doesn't, striking it is never worse. If one element is still unpaired after
the walk, it takes a strike too.
