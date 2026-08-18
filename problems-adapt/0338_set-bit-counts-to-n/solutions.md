# Solutions — Set-Bit Counts to N

One linear recurrence that reaches back into the output it is building,
and one baseline that popcounts each value in isolation — the follow-up's
`O(n)` target set against the `O(n log n)` easy road.

## dp_lowest_bit

Every `i >= 1` has a strictly smaller sibling whose count is already known: `i & (i - 1)` clears `i`'s lowest set bit, and removing one set bit lowers the count by exactly one, so slot `i & (i - 1)` holds the count of everything except that bit. Writing the recurrence as `ans[i] = ans[i & (i - 1)] + 1` and filling slots in ascending order means the needed value is always present — `i & (i - 1) < i` for every `i >= 1` — so the whole array comes out of one pass holding a single AND, one lookup, and one increment per slot.

The recurrence needs no even/odd case split, because the cleared bit is always the lowest set one, whatever its position. Take `i = 11` (binary 1011): `11 & 10 = 10` (1010), and `10 & 9 = 8` (1000), and `8 & 7 = 0` — so `ans[8] = ans[0] + 1 = 1`, `ans[10] = 2`, and `ans[11] = 3`, which matches 1011 having three 1s. The only edge case is `n = 0`: `ans[0] = 0` stands alone and the loop never runs.

**Complexity:** `O(n)` time, `O(n)` space for the output array (`O(1)` extra).

## kernighan

The direct baseline: derive every count from scratch using Brian Kernighan's identity. One AND, `value & (value - 1)`, strips the lowest set bit of `value`, so an inner loop of such clearings — incrementing a tally each time — halts after exactly `popcount(value)` rounds, never once per bit position: 12 (1100) takes two rounds (`12 & 11 = 8`, then `8 & 7 = 0`), while 32 takes one.

Slots are independent, which is the approach's one structural virtue (the work would parallelize or stream without change), but the total effort is the sum of all popcounts over `0..n`, roughly `n·(log n)/2` ANDs — the `O(n log n)` budget that the dp variant undercuts by reading the answer already stored at index `i & (i - 1)`.

**Complexity:** `O(n log n)` time, `O(n)` space for the output array (`O(1)` extra).
