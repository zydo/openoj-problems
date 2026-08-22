# Solutions — Stone Piles Game III

## Bottom-up game DP on score difference

One signed number carries the whole game. Define `dp[i]` as the best margin —
current player's score minus the opponent's — reachable from the suffix
beginning at pile `i`. When the mover swallows piles `i..j`, collecting
`take`, the opponent steps into the suffix at `j + 1` and, playing perfectly,
banks a margin of `dp[j + 1]` against the mover; from the mover's side the
net is therefore `take - dp[j + 1]`. Maximizing over the one-, two-, and
three-pile openings fills `dp[i]`.

The table is filled from the right, `dp[n] = 0` anchoring the empty row —
whoever faces nothing scores nothing more. Each position accumulates `take`
across at most three cut points (clamped at the row's end), so a state costs
constant work and the whole scan is one pass. Processing right to left means
`dp[j + 1]` is always settled before `dp[i]` consults it, which replaces
memoized recursion with a flat array.

Alice opens, so `dp[0]` is her optimal margin and its sign names the winner.
Negative piles need no special casing: in Example 3 both players would rather
eat one `-2` than open the door to worse, and the maximization finds the
least damaging count of piles by itself — the same mechanism that lets
Alice, in Example 2, bank the 3 and leave the poisoned suffix for Bob. Rows
shorter than three piles simply clamp the inner loop, and a single pile
resolves to its own sign.

**Complexity:** `O(n)` time, `O(n)` space.
