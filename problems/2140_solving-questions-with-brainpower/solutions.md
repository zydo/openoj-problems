# Solutions — Solving Questions With Brainpower

## Backward Dynamic Programming

Decisions proceed left to right, and the best you can do from question `i` depends only on what happens from the next question you are allowed to face. That suggests defining `dp[i]` as the maximum points obtainable starting at question `i`, with the base case `dp[n] = 0` — nothing is left. Computing the table from right to left makes every future value available before it is needed.

The transition considers the two choices at question `i`. Skipping gives `dp[i + 1]` unchanged. Solving yields `points_i` plus `dp[i + brainpower_i + 1]`, the first question unlocked after the brainpower lockout; because `dp` is sized `n + 1`, a jump past the end safely reads the zero sentinel. Then `dp[i] = max(skip, solve)`, and the answer is `dp[0]`.

A single reverse pass fills the table with constant work per question. Only one 1-D array is stored, and no auxiliary structure is needed since the "next solvable question" is a direct index computation. The same recurrence would also work with a forward formulation, but the backward sweep keeps the lockout jump a plain array lookup.

**Complexity:** `O(n)` time, `O(n)` space.
