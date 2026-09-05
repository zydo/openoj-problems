# Next Greater, Circular Array

## Description

You are given an integer array `nums` treated as circular: the entry after
`nums[nums.length - 1]` is `nums[0]`.

For every entry, find the first strictly greater value it meets when moving
right through the array, wrapping from the end back to the beginning as
needed. Report `-1` for an entry that is never passed by anything greater —
equal values never qualify, since the comparison is strict.

Return one answer per entry, in order.

### Example 1

```text
Input: nums = [3,8,2]
Output: [8,-1,3]
Explanation: After 3 comes 8, which is greater. The 8 is the largest entry,
and one full lap brings it back to itself without meeting anything greater,
so it gets -1. After 2 the array ends; the search wraps to 3, which is
greater, so the answer is 3.
```

### Example 2

```text
Input: nums = [7,4,2]
Output: [-1,7,7]
Explanation: The 4 has nothing greater to its right, but wrapping reaches 7.
For 2 the search also wraps, and the first entry it meets is the 7 at the
front — not the 4, which lies behind it.
```

### Example 3

```text
Input: nums = [5,5,5]
Output: [-1,-1,-1]
Explanation: Every lap meets only equal values, and equal never counts as
greater.
```

### Constraints

- `1 <= nums.length <= 10⁴`
- `-2147483648 <= nums[i] <= 2147483647`

## Hints

### Hint 1

A circular scan lets each entry look at most one extra lap ahead. How can you
simulate that without physically duplicating the array?

### Hint 2

Keep a stack of indices whose values form a non-increasing run; an arriving
value settles every index it pops, because it is the first strictly greater
value ahead of each of them.

### Hint 3

Push indices only while making the first lap — the second lap exists to
resolve whoever is still waiting, and unresolved indices keep the `-1` they
started with.
