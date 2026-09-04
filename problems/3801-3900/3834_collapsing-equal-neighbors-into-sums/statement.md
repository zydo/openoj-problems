# Collapsing Equal Neighbors Into Sums

## Description

You are given an integer array `nums`.

Fold the array with one operation, over and over, until it cannot change
any further:

- Find the leftmost pair of neighboring elements that are equal and
  replace that pair with a single element holding their sum.

Each fold removes one element. Once no two neighboring elements are
equal, stop and return the array's final form.

### Example 1

```text
Input: nums = [4,4,1,2,2,8]
Output: [8,1,4,8]
Explanation: The leftmost equal pair is the two leading 4s; they fold
into 8 and leave [8, 1, 2, 2, 8]. The only equal pair left is the two
2s, which fold into 4 and leave [8, 1, 4, 8], where every neighboring
pair differs.
```

### Example 2

```text
Input: nums = [1,1,1]
Output: [2,1]
Explanation: The leftmost pair of 1s folds into 2, leaving [2, 1]. The
trailing 1 has no equal partner, so it stays put.
```

### Example 3

```text
Input: nums = [8,8,8,8,8]
Output: [32,8]
Explanation: Each round folds the leftmost equal pair:
[8,8,8,8,8] becomes [16,8,8,8], then [16,16,8], then [32,8]. The last
two elements differ, so the folding stops.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Sweep left to right while keeping the settled values on a stack.

### Hint 2

When the incoming value equals the stack's top, pop the top and add the
two; then keep folding leftward for as long as the running sum equals
the element now underneath it.

### Hint 3

Reading the stack from bottom to top once the sweep ends gives the
final array.
