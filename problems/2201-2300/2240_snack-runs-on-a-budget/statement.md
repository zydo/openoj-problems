# Snack Runs on a Budget

## Description

You walk into a corner shop holding `total` coins. Two things are for sale:
bags of chips at `cost1` coins apiece and sodas at `cost2` coins apiece.
You may buy any number of each — including none — as long as the combined
price stays within your budget, and leftover coins are fine.

Two runs count as different when the number of chip bags or the number of
sodas differs. How many distinct runs are possible?

### Example 1

```text
Input: total = 15, cost1 = 4, cost2 = 6
Output: 8
Explanation: With 0 chips there is room for 0, 1, or 2 sodas; with 1 chip,
0 or 1 soda; with 2 chips, 0 or 1 soda; with 3 chips, nothing more fits.
That is 3 + 2 + 2 + 1 = 8 runs.
```

### Example 2

```text
Input: total = 9, cost1 = 10, cost2 = 7
Output: 2
Explanation: Chips cost more than the whole budget, so every run buys zero
of them; the soda, at 7, still allows a run with none or a run with one.
```

### Example 3

```text
Input: total = 50, cost1 = 7, cost2 = 3
Output: 73
Explanation: Enumerating every affordable (chips, sodas) pair gives 73
distinct runs.
```

### Constraints

- `1 <= total, cost1, cost2 <= 10⁶`
- The answer fits in a 64-bit integer.

### Hint 1

Decide the chip count first; the budget that remains then fixes how many
sodas could ride along.

### Hint 2

For each chip count `k`, the leftover money covers `leftover / cost2 + 1`
soda counts, from zero up to the maximum. Add that up over every
affordable `k`.
