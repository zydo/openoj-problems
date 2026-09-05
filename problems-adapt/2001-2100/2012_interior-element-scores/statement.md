# Interior Element Scores

## Description

Rate every interior element of a 0-indexed integer array `nums` — that is,
every `nums[i]` with `1 <= i <= nums.length - 2` — using these scores:

- **2** if `nums[i]` is strictly greater than every element before it and
  strictly less than every element after it.
- **1** if that is not the case but the element still sits strictly between
  its immediate neighbors: `nums[i - 1] < nums[i] < nums[i + 1]`.
- **0** otherwise.

Return the total of all interior scores.

### Example 1

```text
Input: nums = [2,3,4,5,6]
Output: 6
Explanation: The array rises strictly, so each of the three interior elements
beats every element to its left and loses to every element to its right. Each
scores 2, for a total of 6.
```

### Example 2

```text
Input: nums = [7,1,3,4,2]
Output: 1
Explanation: Only the element 3 at index 2 scores: 1 < 3 < 4 earns 1, because
the leading 7 spoils the every-earlier-element test. The other interior
elements fail even the neighbor test and score 0.
```

### Example 3

```text
Input: nums = [9,7,5,3]
Output: 0
Explanation: The array falls strictly, so no interior element is below its
right neighbor and nothing scores.
```

### Constraints

- `3 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

The 2-point test reduces to two numbers per index: the maximum of everything
to the left and the minimum of everything to the right.

### Hint 2

Fill those running extremes with one pass in each direction, then a single
final pass adds 2, 1, or 0 for each interior index.
