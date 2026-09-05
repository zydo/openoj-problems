# The Largest Odd One Out

## Description

An integer array `nums` of length `n` has a rigid cast. Exactly `n - 2`
of its elements are ordinary members. One of the two remaining elements
equals the sum of those ordinary members, and the last one stands apart —
it is the odd one out.

So an element qualifies as a potential odd one out when the rest of the
array can be split the right way: some `n - 2` elements (distinct
indices) whose total equals the one leftover element, leaving the
candidate itself as the value standing apart. The roles live at distinct
indices, though the values themselves may repeat.

Return the largest value in `nums` that can play the odd one out.

### Example 1

```text
Input: nums = [4,2,6,12]
Output: 12
Explanation: The ordinary members could be 4 and 2, whose sum 6 is the
next element — leaving 12 as the odd one out.
```

### Example 2

```text
Input: nums = [3,3,6,12,24]
Output: 24
Explanation: Take 3, 3, and 6 as the ordinary members: they sum to 12,
the next element matches that sum, and 24 stands apart.
```

### Example 3

```text
Input: nums = [0,-4,8,-2,10]
Output: -4
Explanation: The ordinary members 0, -2, and 10 sum to 8, which the
element 8 confirms — so -4 is the odd one out. Every other candidate
fails to split the array this way.
```

### Constraints

- `3 <= nums.length <= 10⁵`
- `-1000 <= nums[i] <= 1000`
- The input is guaranteed to contain at least one potential odd one out.

## Hints

### Hint 1

If the value standing apart were removed, what would the remaining
elements sum to?

### Hint 2

A hash map turns "does this value exist at another index?" into a
constant-time lookup.
