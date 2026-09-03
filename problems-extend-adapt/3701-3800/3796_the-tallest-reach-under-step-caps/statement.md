# The Tallest Reach Under Step Caps

## Description

You are handed an integer n, a list of caps `restrictions`, and a list of
step limits diff of length n - 1. Build a sequence a[0], a[1], ...,
a[n - 1] that obeys all of these:

- The sequence starts at zero: a[0] = 0.
- Every element is non-negative.
- Crossing from position i to i + 1 may rise or fall by at most diff[i],
  i.e. `abs(a[i] - a[i + 1]) <= diff[i]`.
- Every cap `restrictions[i] = [idx, maxVal]` pins position idx down:
  `a[idx] <= maxVal`.

Among all sequences meeting every rule, you want the one whose largest
element is as big as possible. Return that largest element.

### Example 1

```text
Input: n = 6, restrictions = [[2,3]], diff = [1,2,1,2,1]
Output: 7
Explanation: The sequence [0,1,3,4,6,7] climbs within every step limit
and keeps a[2] = 3, respecting its cap of 3. Its peak, 7, is the largest
any valid sequence can reach.
```

### Example 2

```text
Input: n = 5, restrictions = [[1,10],[4,2]], diff = [2,1,2,1]
Output: 3
Explanation: The cap at the last position — a[4] <= 2 — drags nearby
positions down, and the sequence [0,2,3,3,2] shows a peak of 3 is both
reachable and the best possible.
```

### Example 3

```text
Input: n = 4, restrictions = [[3,9]], diff = [1,1,1]
Output: 3
Explanation: The cap of 9 at the last position is never binding, so the
step limits alone decide the shape: [0,1,2,3] peaks at 3.
```

### Constraints

- `2 <= n <= 10⁵`
- `1 <= restrictions.length <= n - 1`
- `restrictions[i].length == 2`
- `restrictions[i] = [idx, maxVal]`
- `1 <= idx < n`
- `1 <= maxVal <= 10⁶`
- `diff.length == n - 1`
- `1 <= diff[i] <= 10`
- The values of `restrictions[i][0]` are unique.

## Hints

### Hint 1

Think greedily: let every position sit as high as it possibly can.

### Hint 2

A cap at one position leaks to its neighbours — the step limits carry a
cap outward, position by position, in both directions.

### Hint 3

So each position's ceiling is the smallest of its own cap (if any) and
the ceilings propagated into it from the left and from the right.

### Hint 4

With all ceilings fixed, some sequence touches every one of them at once,
and the answer is simply the tallest ceiling.
