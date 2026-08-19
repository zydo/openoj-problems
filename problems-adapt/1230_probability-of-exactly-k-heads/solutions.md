# Solutions — Probability of Exactly K Heads

## Distribution DP over the running head count

Tossing the coins one by one does not produce one outcome — it produces a
distribution over head counts, and each coin nudges that distribution only
between neighboring counts. So the whole computation fits in one array:
`dp[c]`, the probability that the coins tossed so far show exactly `c`
heads, opening at `dp[0] = 1` (zero heads before any toss is certain).

A coin whose heads probability is `p` turns `dp[c]` into
`dp[c] · (1 - p) + dp[c - 1] · p`: the tails branch of the old count `c`
plus the heads branch arriving from `c - 1`. The sweep runs from `target`
down to 1 precisely so that `dp[c - 1]` still holds the previous coin's
figure when it is read — sweeping upward would hand the same coin two
heads. The `c = 0` cell is then multiplied by `1 - p` on its own, because
staying at zero heads admits only the tails branch.

Nothing above `target` is ever stored: a count that passes `target` can
never come back, so those states are dead weight. After the last coin,
`dp[target]` is exactly the wanted probability, with every qualifying
outcome sequence accounted along its unique path through the table. The
boundary behavior costs nothing extra — `target = 0` reduces to the product
of all tails probabilities, and Example 3's identical fair coins reproduce
the binomial coefficient `C(6,2) / 2^6`.

**Complexity:** `O(n · target)` time, `O(target)` space.
