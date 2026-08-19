# Solutions — Fewest Palindrome Removals

## Interval dynamic programming

A deletion splices the survivors together, and that splicing is what makes
the problem decomposable: the price of emptying a stretch of the array
depends solely on the values in that stretch. So the table is indexed by
stretch — `dp[i][j]`, the fewest moves that clear `arr[i..j]` — with the
shortest stretches settled first: a lone element costs 1, and a pair costs
1 when the two values match and 2 otherwise.

Longer stretches combine three kinds of step. Whatever the optimal schedule,
some move consumes the first element, so `1 + dp[i + 1][j]` is always an
available bound. Every boundary `k` offers a division of labour,
`dp[i][k] + dp[k + 1][j]`: clearing the two sides separately is legitimate
because neither side's moves ever reach across a boundary both respect.
And when the stretch opens and closes with the same value, the pair can be
charged zero extra moves — clear the interior for `dp[i + 1][j - 1]`, leave
the matched ends sitting as the outermost survivors, and remove them
together in the final move.

The licence for that last step deserves its own sentence: given any
schedule for the stretch, the move that takes `arr[i]` can be rewritten to
take `arr[j]` as well, since stripping a matched pair from the flanks of a
palindrome leaves a palindrome — so pairing equal ends never falls behind
any alternative. Filling by increasing length makes every referenced
sub-stretch final before it is read, and `dp[0][n - 1]` is the answer.
Example 2 is the pairing at work — [4,8,4] goes first and swallows both 4s
in one move — while Example 3 shows the fallback: with nothing to pair the
6 or the 7 with, three separate moves is simply the price.

**Complexity:** `O(n³)` time, `O(n²)` space.
