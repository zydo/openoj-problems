# Weighted End Deletions

## Description

You are given two integer arrays: `nums`, of length `n`, and `weights`, of
length `m`, with `n >= m`.

Your score starts at `0`, and you make exactly `m` deletions. Deletion `i`
(numbered from `0`) does two things:

- removes one number `x` from either end of `nums` — its current first or last
  element;
- adds `weights[i] * x` to your score.

Return the highest total score you can finish with.

### Example 1

```text
Input: nums = [-9,-8,1], weights = [4,2,-3]
Output: 15
Explanation: Every deletion takes from the right:
- Delete 1 with weight 4, adding 4 * 1 = 4.
- Delete -8 with weight 2, adding 2 * -8 = -16.
- Delete -9 with weight -3, adding -3 * -9 = 27.
The score is 4 - 16 + 27 = 15. The negative final weight is what makes
holding the negative numbers back worthwhile.
```

### Example 2

```text
Input: nums = [4,3,-2,7,-5,1], weights = [3,2,-1,-3,5]
Output: 67
Explanation: An optimal plan:
- Delete 4 from the front with weight 3, adding 12.
- Delete 3 from the front with weight 2, adding 6.
- Delete 1 from the back with weight -1, adding -1.
- Delete -5 from the back with weight -3, adding 15.
- Delete 7 from the back with weight 5, adding 35.
The score is 12 + 6 - 1 + 15 + 35 = 67. The -2 in the middle is never touched.
```

### Constraints

- `1 <= m <= 300`
- `m <= n <= 10⁵`
- `-1000 <= nums[i] <= 1000`
- `-1000 <= weights[i] <= 1000`

## Hints

### Hint 1

Deleting the end that pays more *right now* is not always right — a later,
possibly negative weight can make the other end worth waiting for.

### Hint 2

Explore every route of front/back choices, but notice that a route is fully
described by how many deletions have happened and how many of them took the
front.

### Hint 3

Memoize on that pair: deletions from the back follow from the two counts, so a
quadratic dynamic program replaces the exponential route tree.
