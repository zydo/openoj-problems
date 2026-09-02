# Stitching Array Ends

## Description

You are given an integer array `nums`.

Stitching two numbers together means writing the digits of the second
right after the digits of the first. Stitching `15` and `49`, for
instance, produces `1549`.

Start a running total at 0 and repeat the following until `nums` is
empty:

- While `nums` holds at least two elements, stitch its first element onto
  its last one, add the result to the total, and delete both endpoints.
  For `nums = [1, 2, 4, 5, 6]` the first round adds `16`.
- When a single element remains, add that element to the total and delete
  it.

Return the total once `nums` is empty.

### Example 1

```text
Input: nums = [12,3,45,6]
Output: 471
Explanation: Stitch 12 onto 6 to get 126, then stitch 3 onto 45 to get
345. The total is 126 + 345 = 471.
```

### Example 2

```text
Input: nums = [9,81,7]
Output: 178
Explanation: Stitch 9 onto 7 to get 97 and add it to the total. Only 81
remains, so it is added on its own: 97 + 81 = 178.
```

### Example 3

```text
Input: nums = [40]
Output: 40
Explanation: The array starts with a single element, so the total is just
40.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 10⁴`

## Hints

### Hint 1

A plain simulation is enough — no search or cleverness is required.

### Hint 2

Keep two positions at the two ends and walk them inward: each round
contributes first stitched onto last to the answer.

### Hint 3

When the length is odd, one element ends up alone in the middle — it
joins the total by itself rather than being stitched.
