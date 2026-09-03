# Strong XOR Segments

## Description

You are given an integer array `nums` and a non-negative threshold `k`.

A segment is any run of consecutive elements `nums[i..j]`. Its XOR is
the bitwise XOR of every element it contains.

Count how many segments have an XOR of `k` or more, and return that
count.

### Example 1

```text
Input: nums = [4,1,5,2], k = 3
Output: 6
Explanation: The qualifying segments are [4], [4,1], [1,5], [1,5,2],
[5], and [5,2], with XORs 4, 5, 4, 6, 5, and 7 respectively — each is
at least 3.
```

### Example 2

```text
Input: nums = [1,2,3,4], k = 10
Output: 0
Explanation: Even the strongest segment, [3,4], XORs to only 7, so no
segment reaches 10.
```

### Example 3

```text
Input: nums = [6,6,6,6], k = 5
Output: 6
Explanation: The four single-element segments and the two length-3
segments each XOR to 6; mixing adjacent equal values in any even-length
segment collapses the XOR to 0.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁹`
- `0 <= k <= 10⁹`

## Hints

### Hint 1

Track running prefix XORs; the XOR of one segment is the XOR of the
two prefix values at its ends.

### Hint 2

Sweep the right endpoint left to right and, at each step, ask how many
earlier prefixes differ from the current one by at least `k`.

### Hint 3

Keep the past prefixes in a 30-level binary trie with per-node counts;
one descent answers the question for the current endpoint in a fixed
number of steps.
