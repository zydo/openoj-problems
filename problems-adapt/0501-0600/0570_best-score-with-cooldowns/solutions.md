# Solutions — Best Score With Cooldowns

## Backward Dynamic Programming

You meet the questions in a fixed order, and what you can still bank from
question `i` onward depends only on the next question you are free to face —
never on the path there. So define `dp[i]` as the best total starting at
question `i`, with `dp[n] = 0` standing for an empty remainder, and fill the
table from the right so every needed future entry is already written.

Each entry compares the two moves. Skipping copies the neighbor:
`dp[i + 1]`. Solving banks `points_i` plus `dp[i + cooldown_i + 1]` — the
first question after the cooldown lifts — and sizing the table `n + 1` lets
an overshoot read the zero sentinel harmlessly. Then `dp[i]` is the larger of
the two, and `dp[0]` answers the exam.

![The example exam laid out with its dp row: solving question 0 jumps over questions 1 and 2 to read dp[3] = 4, giving 6 + 4 = 10, while every other question prefers its skip value, so the table fills 4, 5, 5, 10 from right to left.](figures/solution-backward-dp.svg)

Stepping the example `[[6,2],[5,3],[5,4],[4,5]]` right to left:

1. `dp[4] = 0` — the sentinel past the last question.
2. `i = 3`: solving is worth 4 with a jump past the end, skipping gives 0, so
   `dp[3] = 4`.
3. `i = 2` and `i = 1`: both cooldowns also jump past the end, so each keeps
   its own 5 points — `dp[2] = dp[1] = 5`.
4. `i = 0`: skipping is worth `dp[1] = 5`; solving gives `6 + dp[0 + 2 + 1] =
6 + 4 = 10`, so `dp[0] = 10`.

One reverse pass fills the table in constant work per question, and the only
storage is the single 1-D array — the post-cooldown landing spot is a plain
index computation, so no auxiliary structure is needed. A forward recurrence
would work too, but the backward sweep keeps the cooldown jump a direct array
read.

**Complexity:** `O(n)` time, `O(n)` space.
