# Best Triple Product

## Description

Given an integer array `nums`, choose any three of its elements so that
their product is as large as possible, and return that product.

### Example 1

```text
Input: nums = [5,-2,9,3]
Output: 135
```

### Example 2

```text
Input: nums = [-8,-6,-4,-2]
Output: -48
```

### Example 3

```text
Input: nums = [7,7,7,1]
Output: 343
```

### Constraints

- `3 <= nums.length <= 10⁴`
- `-1000 <= nums[i] <= 1000`

## Hints

### Hint 1

The best triple is not always the three biggest numbers — a pair of large
negative numbers multiplies into a large positive.

### Hint 2

Only two candidate triples are ever worth comparing: the three largest
values, and the largest value paired with the two smallest.

### Hint 3

You don't need a full sort to find those five extreme values — a single
pass that tracks the top three and bottom two seen so far is enough.
