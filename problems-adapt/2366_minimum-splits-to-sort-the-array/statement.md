# Minimum Splits to Sort the Array

## Description

You are given an integer array `nums`. One split picks a single element of
the array and replaces it by two positive integers whose sum equals it, so
the array grows by one with every split.

For instance, splitting the 7 in `[2,7,4]` into 3 and 4 produces the array
`[2,3,4,4]`.

Return the fewest splits needed to make the array non-decreasing from left
to right.

### Example 1

```text
Input: nums = [2,7,4]
Output: 1
Explanation: Split the 7 into 3 and 4, giving [2,3,4,4], which never
decreases. No single split can do better, since [2,7,4] itself decreases.
```

### Example 2

```text
Input: nums = [4,5,5,9]
Output: 0
Explanation: The array is already non-decreasing, so nothing needs
splitting.
```

### Example 3

```text
Input: nums = [11,3,9,6]
Output: 4
Explanation: Split the 9 into 4 and 5 to get [11,3,4,5,6]. The 11 now sits
before a cap of 3, and four pieces fit it: 2, 3, 3, 3, giving
[2,3,3,3,3,4,5,6]. That is 1 + 3 = 4 splits.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Splitting never makes a number larger. Is there ever a reason to split the
final element?

### Hint 2

Scan from the right, carrying the largest value the next element may take.
An element above that cap must fall into pieces — into how few?

### Hint 3

Once the number of pieces is fixed, how should the value be spread across
them so the elements further left keep as much room as possible?
