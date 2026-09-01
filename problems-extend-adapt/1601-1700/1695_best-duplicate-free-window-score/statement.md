# Best Duplicate-Free Window Score

## Description

You are given an array `nums` of positive integers. Pick exactly one
contiguous stretch of the array in which no value appears more than once;
scoring that stretch pays out the sum of its values.

Return the largest score any single such stretch can earn.

A stretch of `nums` is contiguous by definition: it consists of
`nums[l], nums[l + 1], ..., nums[r]` for some pair `(l, r)`.

### Example 1

```text
Input: nums = [3,1,4,1,5,9,2,6]
Output: 27
Explanation: The stretch [4,1,5,9,2,6] repeats no value and sums to 27; no
other duplicate-free stretch sums to more.
```

### Example 2

```text
Input: nums = [2,7,1,7,2,7,1]
Output: 10
Explanation: The stretch [2,7,1] is duplicate-free and sums to 10 — so is
the middle stretch [1,7,2] — and 10 is the best achievable.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁴`

## Hints

### Hint 1

Fix the right end of a stretch and grow it leftward. The moment a value
would show up twice, every longer stretch with that right end is
disqualified too — so each right end owns exactly one longest duplicate-free
stretch.

### Hint 2

Every value being positive makes that longest stretch also the
highest-scoring one for its right end. Sweep a right pointer across the
array, and whenever the incoming value is already inside the stretch, slide
the left edge forward until the clash clears, tracking the running sum as
you go.
