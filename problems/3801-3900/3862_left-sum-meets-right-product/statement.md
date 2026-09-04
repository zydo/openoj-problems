# Where The Left Sum Meets The Right Product

## Description

Read an integer array `nums` from left to right and pick out a special
position: index `i` qualifies when the total of everything before it equals
the product of everything after it. Both sides are strict — the element at
`i` itself takes part in neither.

An empty left side counts as a sum of `0`, and an empty right side counts as
a product of `1`.

Give the lowest index that qualifies. When no position evens out this way,
give `-1`.

### Example 1

```text
Input: nums = [6,1,3,7]
Output: 2
Explanation:
At index 2 the elements before it add up to 6 + 1 = 7, and the single
element after it multiplies to 7. The two sides agree, and no earlier index
does, so the answer is 2.
```

### Example 2

```text
Input: nums = [7,3,9,2,5]
Output: 2
Explanation:
At index 2 the left side sums to 7 + 3 = 10 and the right side multiplies
to 2 * 5 = 10. Indices 0 and 1 do not balance, so the answer is 2.
```

### Example 3

```text
Input: nums = [1,2,3]
Output: -1
Explanation:
Index 0 compares a left sum of 0 against a right product of 6, index 1
compares 1 against 3, and index 2 compares 3 against the empty right
product 1. Nothing matches, so the answer is -1.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

A running total from the left gives every index's left-side sum in constant
time.

### Hint 2

Prepare right-side products in one backward pass. They can explode past any
fixed-width integer, but only exact matches matter — a product that already
exceeds the array's total sum can never come back down to a possible left
sum, so it may safely be clamped.

### Hint 3

Walk the array and report the first index whose stored left sum equals its
stored right product; if the walk finishes without a match, the answer is
`-1`.
