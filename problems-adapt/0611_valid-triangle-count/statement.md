# Valid Triangle Count

## Description

You are given an integer array `sides`. Any three entries, taken as the three
side lengths of a triangle, either do or do not satisfy the triangle
inequality.

Return the number of ways to pick three entries (by position) that work as a
triangle's sides.

### Example 1

```text
Input: sides = [3,4,5,6]
Output: 4
Explanation: Every choice of three entries works:
3,4,5
3,4,6
3,5,6
4,5,6
```

### Example 2

```text
Input: sides = [0,1,1,1]
Output: 1
Explanation: Only 1,1,1 qualifies. A side of length 0 can never belong to a
triangle.
```

### Example 3

```text
Input: sides = [7,3]
Output: 0
Explanation: Fewer than three entries leave nothing to choose.
```

### Constraints

- `1 <= sides.length <= 1000`
- `0 <= sides[i] <= 1000`

## Hints

### Hint 1

Sort first. For a triplet with sides `a <= b <= c`, two of the three
inequalities come free; only `a + b > c` is left to test.

### Hint 2

Anchor the largest side with an outer index, then run two pointers across the
elements before it, gathering the pairs whose sum beats the anchor.

### Hint 3

If the two pointers' sum already exceeds the anchor at the leftmost position,
then every position between them pairs with the right pointer too — add that
whole block at once and step the right pointer down.

### Hint 4

A length of 0 can appear in the input; sorted order parks all zeros at the
front, so the outer loop can stop once the anchor itself is 0.
