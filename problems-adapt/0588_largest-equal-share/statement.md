# Largest Equal Share

## Description

You are given an integer array `piles`, where `piles[i]` is the number of
tokens in the i-th pile, and an integer `k`.

Each pile may be cut into any number of sub-piles of whatever sizes you like,
but tokens from different piles can never be combined. Every one of the `k`
children must receive exactly the same number of tokens, and a child's whole
share has to come out of a single pile. Piles or parts of piles may be left
undistributed.

Return the largest number of tokens a child can receive. When even one token
apiece is impossible, the answer is `0`.

### Example 1

```text
Input: piles = [6,9,4], k = 4
Output: 4
Explanation: Cut the first pile into 4 and 2, the second into 4, 4 and 1, and
leave the third whole — its size is exactly 4. That yields four shares of 4.
Handing out 5 apiece is impossible: the piles cover only two shares of 5.
```

### Example 2

```text
Input: piles = [3,3], k = 7
Output: 0
Explanation: Six tokens cannot reach seven children, so no positive share is
feasible and every child goes without.
```

### Example 3

```text
Input: piles = [10,10,10], k = 9
Output: 3
Explanation: Splitting every pile 3 + 3 + 3 + 1 gives nine shares of 3. A
share of 4 is out of reach: each pile covers only two of them, six in all.
```

### Constraints

- `1 <= piles.length <= 10⁵`
- `1 <= piles[i] <= 10⁷`
- `1 <= k <= 10¹²`

## Hints

### Hint 1

Fix a candidate share `s` and look at one pile of size `p`: how many children
can that pile satisfy on its own?

### Hint 2

If every child can be given `s` tokens, the same is true for any smaller share.
That monotonicity turns "what is the best share?" into a boundary between
feasible and infeasible candidates.

### Hint 3

Walk a candidate `s` through binary search over `[0, max(piles)]`, testing each
candidate with one linear pass.
