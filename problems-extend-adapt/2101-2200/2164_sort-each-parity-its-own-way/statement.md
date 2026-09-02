# Sort Each Parity Its Own Way

## Description

Given a 0-indexed integer array `nums`, rearrange its values — the slots
never change, only which values sit in them — under two rules that split the
array by index parity:

- The values living at even indices must end up in non-decreasing order
  across those even slots.
- The values living at odd indices must end up in non-increasing order
  across those odd slots.

Nothing crosses between the two classes: an even slot always ends up holding
a value that started at an even index, and likewise for odd slots.

Return `nums` after the rearrangement.

### Example 1

```text
Input: nums = [5,8,6,3,2]
Output: [2,8,5,3,6]
Explanation:
The even slots 0, 2, and 4 hold 5, 6, and 2, which sort ascending into
2, 5, 6. The odd slots 1 and 3 hold 8 and 3, which sort descending into
8, 3. Weaving the two groups back through their own slots gives
[2,8,5,3,6].
```

### Example 2

```text
Input: nums = [1,2,3,4,5,6]
Output: [1,6,3,4,5,2]
Explanation:
Even slots carry 1, 3, 5 and remain ascending; odd slots carry 2, 4, 6 and
flip to the descending 6, 4, 2.
```

### Example 3

```text
Input: nums = [7]
Output: [7]
Explanation:
A single element occupies one even slot and there are no odd slots, so
nothing can move.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

Split the array into two groups by index parity — one group holds the
even-slot values, the other the odd-slot values.

### Hint 2

Order each group by its own rule: ascending for the even group, descending
for the odd group.

### Hint 3

Write the two sorted groups back into the alternating slots they came from
to rebuild the array.
