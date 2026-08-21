# Solutions — Best Time to Buy and Sell Stock with Transaction Fee

## State-Machine Dynamic Programming

After processing any day you are in exactly one of two states: `cash`, the best profit while holding no share, or `hold`, the best profit while holding one share. Day to day each state either persists or is improved by a transition out of the other: selling adds `price - fee` to yesterday's `hold`, buying subtracts `price` from yesterday's `cash`. The simultaneous tuple assignment evaluates both right-hand sides against the previous day's values, so the two updates never feed into each other within the same day.

`hold` starts at a sentinel of negative one billion — holding a share before the first day is impossible, so any transition through the sentinel yields a value no real strategy can reach — while `cash` starts at 0, representing doing nothing. The fee is charged exactly once per completed transaction, on the sell leg. Because both states always retain the do-nothing option, an input where the fee makes every trade unprofitable simply leaves the answer at 0; the recurrence never forces a transaction.

Correctness is an induction over the price list: every legal sequence of non-overlapping transactions is a path through these two states, and each state's value is the maximum profit achievable by any such path ending in that state. Ending with a share in hand is never better than having sold, so the final `cash` is the answer.

**Complexity:** `O(n)` time, `O(1)` space.
