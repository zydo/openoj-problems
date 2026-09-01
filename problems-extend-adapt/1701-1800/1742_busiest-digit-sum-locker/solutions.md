# Solutions — Busiest Digit-Sum Locker

Each token numbered `x` is filed into locker `digit_sum(x)` — token 321
into locker 6, token 10 into locker 1 — and the answer is the fullest
locker once every token from `low` to `high` is filed. Where each token
goes is fully determined, so the whole task is a tally: walk the range,
sum each number's digits, and keep one counter per locker.

## Digit-sum tally

A locker number is a digit sum, and with `high <= 10^5` the largest digit
sum any token can have is 45 (from 99999), so a 46-slot counter indexed by
digit sum covers every locker the range can reach. Sweep `x` from `low` to
`high`, strip `x`'s digits one at a time with `% 10` and integer division
by 10, add one to the slot the sum names, and finish with the largest
slot.

Example 1 is the sweep in miniature: 1 through 9 each fill their own
locker, then tokens 10, 11, and 20 fold into locker 2, which ends with
three tokens and wins. The full-domain range `1..10^5` piles 6,000 tokens
into each of its two densest lockers (22 and 23), while a range whose
digit sums never collide, like 8..16, leaves every locker it touches at
one. No locker ever holds more tokens than the range contains
(`high - low + 1 <= 10^5`), so a 32-bit counter never comes close to
overflowing.

**Complexity:** `O(n * d)` time (`d` = digits), `O(1)` extra space.
