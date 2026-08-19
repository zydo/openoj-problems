# Cheapest Closing Hour

## Description

A shop has kept a visit log for `n` straight hours. The log is the string
`customers`, one character per hour: `'Y'` marks an hour in which somebody
came in, `'N'` marks an hour in which nobody did.

The owner must choose a closing hour `j` with `0 <= j <= n`. Closing at hour
`j` means the shop stands open through hours `0` to `j - 1` and is shut from
hour `j` onward — hour `j` itself is spent closed.

Whatever the choice, two kinds of hour cost one penalty point each:

- an open hour in which nobody came in;
- a shut hour in which somebody did.

Return the earliest closing hour that keeps the penalty as low as it can be.

### Example 1

```text
Input: customers = "YNYN"
Output: 1
Explanation:
- j = 0 costs 2: two 'Y' hours happen while the shop is shut.
- j = 1 costs 1: hour 0 was open and busy, the later 'Y' is shut.
- j = 2 costs 2: the quiet hour 1 is now open, hour 0 is fine.
- j = 3 costs 1: hour 1 quiet-and-open, hour 2 busy-and-shut.
- j = 4 costs 2: both quiet hours are open.
Hours 1 and 3 tie at cost 1, so the earlier one, 1, is returned.
```

### Example 2

```text
Input: customers = "NNYNN"
Output: 0
Explanation: Staying open never pays: hour 2's single visit sits among four
quiet hours, and every positive closing hour leaves at least as much penalty
as simply never opening. Closing at hour 0 costs 1 and is the earliest choice.
```

### Example 3

```text
Input: customers = "NYYY"
Output: 4
Explanation: One quiet hour first, then constant business. Each hour the shop
stays shut through a 'Y' costs the same point that quiet hour 0 costs when
open, so pushing the closing hour to the very end — j = 4, penalty 1 — wins.
```

### Constraints

- `1 <= customers.length <= 10⁵`
- `customers` contains only the characters `'Y'` and `'N'`.

## Hints

### Hint 1

Write the cost of closing at `j` as two counts: `'N'` hours among
`customers[:j]` plus `'Y'` hours among `customers[j:]`.

### Hint 2

Advancing `j` by one reclassifies a single hour, so both counts can be carried
along incrementally. Evaluate every `j` in constant time and keep the first
strict minimum you see.
