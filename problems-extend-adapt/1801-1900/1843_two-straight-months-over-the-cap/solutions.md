# Solutions — Two Straight Months Over The Cap

Two months running "straight" is a fact about the calendar, not about
the data: `2022-01` is succeeded by `2022-02`, and December rolls over
into
January of the next year. A month with no deposits at all still breaks
the streak, so the successor has to be computed on the calendar itself
rather than read off the list of months that happen to show up.

## Total per wallet-month, then self-join on the calendar successor

The inner query buckets `'Creditor'` movements by `(wallet_id,
SUBSTR(day, 1, 7))`, leaving one income figure per wallet per active
month. The outer query joins that bucketed set to itself on the same
wallet, keeping the pair where the second month is the _calendar
successor_ of the first — built by bumping the month number and rolling
into the next year past December — and finally demands that both months'
incomes clear the wallet's `income_cap` (joined in from `Wallets`).
Every surviving pair is a streak of two over-cap months; `DISTINCT`
folds the possibly many qualifying pairs for one wallet into a single
reported ID.

The successor arithmetic is the load-bearing part, and naive shortcuts
fail in both directions: joining "the next row this wallet has" bridges
silent months (a wallet hot in February and April but quiet in March
would wrongly look consecutive), while comparing the `YYYY-MM` strings
as text falls apart at the year boundary. The explicit
increment-and-rollover gets December-to-January right. The work is one
grouping pass over the movements plus a self-join on the far smaller
wallet-month set.

**Complexity:** `O(V)` time to build the wallet-months and `O(B² / W)`
worst-case for the per-wallet join (`V` movements, `B` wallet-months,
`W` wallets; each month pairs only with its successor), `O(B)` space.
