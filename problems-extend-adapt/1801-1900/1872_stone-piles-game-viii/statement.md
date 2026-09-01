# Stone Piles Game VIII

## Description

Alice and Bob play a game on a row of `n` stones, Alice moving first.
Each turn, while more than one stone remains, the player must:

- pick an integer `x > 1` and take away the leftmost `x` stones of the
  row,
- add the total value of those stones to their own score, and
- put one new stone carrying that total on the left end of the row.

Once a single stone remains, the game ends.

Both players see the whole row and play to win: Alice wants the final
score difference (Alice's score minus Bob's score) as large as
possible, Bob wants it as small as possible. Given the array `stones`,
where `stones[i]` is the value of the `i`th stone from the left, return
the difference under optimal play by both sides.

### Example 1

```text
Input: stones = [5,5]
Output: 10
Explanation: With two stones Alice's only legal move takes both of
them, scoring 5 + 5 = 10. The difference is 10 - 0 = 10.
```

### Example 2

```text
Input: stones = [1,2,-1,4]
Output: 6
Explanation: Alice takes the whole row: 1 + 2 + (-1) + 4 = 6. Ending
the game immediately is her best option; leaving stones behind would
let Bob merge the rest for himself.
```

### Example 3

```text
Input: stones = [-2,-2,1,-2]
Output: 2
Explanation:
- Alice removes the first 3 stones, adding (-2) + (-2) + 1 = -3 to her
  score, and places a stone of value -3 on the left. stones = [-3,-2].
- Bob must take both remaining stones, adding -3 + (-2) = -5 to his
  score, and places a stone of value -5 on the left. stones = [-5].
The difference is (-3) - (-5) = 2.
```

### Constraints

- `n == stones.length`
- `2 <= n <= 10^5`
- `-10^4 <= stones[i] <= 10^4`

## Hints

### Hint 1

After any sequence of turns the row is always one merged stone (equal to
some prefix sum) followed by the untouched suffix — so the only state
that matters is how many original stones are still in place.

### Hint 2

Let `f(j)` be the mover's best difference when `j` original stones
remain. A move to any `k > j` nets exactly `prefix[k]`, giving
`f(j) = max over k of (prefix[k] - f(k))`; scan `j` downwards while
keeping the running maximum and each state costs O(1).
