# Quadruple Zero Sums

## Description

You are given four integer arrays `first`, `second`, `third`, and `fourth`,
all of the same length `n`.

Pick one position from each array and add the four chosen values. Count the
ways to do this so the total is exactly `0` — that is, return the number of
index quadruples `(i, j, k, l)` with

`first[i] + second[j] + third[k] + fourth[l] == 0`.

Different index quadruples count separately even when the values involved
read the same.

### Example 1

```text
Input: first = [2,1], second = [-3,0], third = [1,-1], fourth = [0,2]
Output: 3
Explanation: The zero-sum quadruples are:
1. (0,0,0,0) -> 2 + (-3) + 1 + 0 = 0
2. (0,0,1,1) -> 2 + (-3) + (-1) + 2 = 0
3. (1,1,1,0) -> 1 + 0 + (-1) + 0 = 0
```

### Example 2

```text
Input: first = [5], second = [-2], third = [-4], fourth = [1]
Output: 1
Explanation: With one entry per array there is a single quadruple, and
5 - 2 - 4 + 1 happens to be zero.
```

### Example 3

```text
Input: first = [1,-1], second = [1,-1], third = [1,-1], fourth = [-1,1]
Output: 6
Explanation: Each array offers one 1 and one -1, so a choice totals zero
exactly when it takes the 1 from two of the four arrays — and two arrays can
be picked in 6 ways.
```

### Constraints

- `n == first.length == second.length == third.length == fourth.length`
- `1 <= n <= 200`
- `-2^28 <= first[i], second[i], third[i], fourth[i] <= 2^28`

## Hints

### Hint 1

Trying every quadruple is `O(n^4)`. Cut the equation in half instead: the
four values sum to zero exactly when the first pair's sum cancels the second
pair's.

### Hint 2

Tabulate the sums of the first two arrays — every `first[i] + second[j]` —
in a map that records how many index pairs reach each sum. Multiplicities
matter, so a set will not do.

### Hint 3

Walk the pairs of the last two arrays; for each `third[k] + fourth[l]`, add
the tabulated count of its negation. Two quadratic passes replace the
quartic one.
