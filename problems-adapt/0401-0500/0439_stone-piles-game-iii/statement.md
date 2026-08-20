# Stone Piles Game III

## Description

A row of piles of stones is described by the integer array `piles`: pile `i`
holds stones worth `piles[i]`, and the value may be negative — some piles are
a liability. Alice and Bob play, Alice moving first, until the row is gone.

On a turn the mover takes one, two, or three piles from the **front** of the
remaining row, adding their values to their score. Both start at 0.

With both playing perfectly, return `"Alice"` if Alice finishes ahead, `"Bob"`
if Bob finishes ahead, or `"Tie"` if the scores end level.

### Example 1

```text
Input: piles = [2,-1,4,8]
Output: "Bob"
Explanation: The trailing 8 is Bob's no matter what. If Alice takes one pile,
Bob sweeps -1, 4, 8 for 11; two piles give Bob 12. Alice's least bad opening
is to bank 2 - 1 + 4 = 5 and concede the 8 — losing 5 to 8.
```

### Example 2

```text
Input: piles = [3,-2,-7,5]
Output: "Alice"
Explanation: Alice takes just the 3. Bob must now damage himself: whatever he
takes, Alice comes out three ahead. In the line Bob -2, Alice -7 + 5, the
final scores are Alice 1, Bob -2.
```

### Example 3

```text
Input: piles = [-2,-2,-1,1]
Output: "Tie"
Explanation: Nobody wants to reach far into the negative row. Alice takes one
pile (-2), Bob likewise (-2), and Alice mops up -1 + 1 for 0 — the game ends
at -2 apiece.
```

### Constraints

- `1 <= piles.length <= 5 * 10^4`
- `-1000 <= piles[i] <= 1000`

## Hints

### Hint 1

The game is zero-sum, so one number suffices: walking the row from the back,
let `dp[i]` be the best achievable margin, current player's score minus the
opponent's, over the suffix that starts at pile `i`.

### Hint 2

From pile `i` the mover may swallow piles `i..j` for `j` in `i, i+1, i+2`.
Earning `take` for those, the opponent then realizes a margin of `dp[j+1]`
*against* the mover, so the candidate is `take - dp[j+1]`; `dp[i]` is the
maximum of the three.

### Hint 3

Alice opens, so `dp[0]` is her margin: its sign selects between `"Alice"`,
`"Bob"`, and `"Tie"`.
