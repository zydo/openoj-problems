# Pay By Rank

## Description

Table: `Earnings`

| Column Name | Type |
| ----------- | ---- |
| earningId   | int  |
| paid        | int  |

`earningId` is the primary key (column with unique values) for this
table. Each row records one payout amount.

Table: `Settings`

| Column Name | Type |
| ----------- | ---- |
| pick        | int  |

`pick` holds which rank to fetch: 1 means the top distinct amount, 2
the second, and so on. The table always has exactly one row.

Find the pick-th highest distinct amount in the `Earnings` table. If
fewer than `pick` distinct amounts exist, report `null`.

Each testcase carries its own rank: besides seeding `Earnings`, the
testcase's `dataset` seeds the one-row `Settings` table with that
testcase's `pick` value. The result format is in the following
examples.

### Example 1

```text
Input: Earnings table from the dataset below, pick = 2.
Output:
PayByRank
90
Explanation: the distinct amounts ordered from highest to lowest are
140, 90, 60, so rank 2 holds 90.
```

### Example 2

```text
Input: Earnings table from the dataset below, pick = 3.
Output:
PayByRank
null
Explanation: duplicates collapse to just two distinct amounts (700,
690), so rank 3 does not exist.
```

Write your solution as a single `SELECT` query returning one row with
one column: the pick-th highest distinct amount, or `null`.

## Hints

### Hint 1

`DENSE_RANK() OVER (ORDER BY paid DESC)` numbers the distinct amounts
1, 2, 3, ... with no gaps — repeats share a rank, so rank `pick` is the
pick-th _distinct_ amount.

### Hint 2

Keep only the rows whose rank equals `pick`, then collapse them with
MAX: an aggregate over zero rows yields null, which is exactly the
"fewer than `pick` distinct amounts" case.

### Hint 3

The testcase's rank lives in the one-row `Settings` table — read it
with the scalar subquery `(SELECT pick FROM Settings)`.
