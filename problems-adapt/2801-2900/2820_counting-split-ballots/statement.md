# Counting Split Ballots

## Description

Table: `Ballots`

| Column Name | Type    |
| ----------- | ------- |
| elector     | varchar |
| choice      | varchar |

(`elector`, `choice`) is the primary key (combination of unique values)
for this table.
Each row of this table records one elector and one name appearing on that
elector's ballot.

A poll is held in a town where every resident holds exactly one vote but
may spread it over several names — or over none at all. Whenever a ballot
names several entries, the resident's single vote is divided evenly
between them, so a ballot carrying three names hands each of them one
third of a vote.

Write a query that works out which name collected the most vote share and
therefore wins the poll. Output the winning name, or — when several names
finish level at the top — output every one of them.

Return the result table ordered by the name in ascending order.

Each testcase supplies its own `dataset`: the script seeds the `Ballots`
table with that testcase's rows before your query runs. A resident who
sits the poll out still occupies a row, one whose `choice` is null — that
row is worth no votes and adds to nobody's total. Names on the ballots are
unique, and the ascending order is ordinary string order. The result
format is in the following example.

### Example 1

```text
Input:
Ballots table:
+---------+---------+
| elector | choice  |
+---------+---------+
| Greta   | null    |
| Hank    | Lena    |
| Hank    | Milo    |
| Ivy     | Lena    |
| Jonas   | Milo    |
| Petra   | Noor    |
| Quint   | null    |
+---------+---------+
Output:
+--------+
| choice |
+--------+
| Lena   |
| Milo   |
+--------+
Explanation:
- Greta and Quint sat the poll out, so their rows are worth nothing.
  Hank named two entries, which splits his vote into 0.5 for each; Ivy,
  Jonas, and Petra each backed a single name for a full vote apiece.
- Adding the shares up, Lena and Milo collect 1.5 votes each, while Noor
  collects the 1.0 vote Petra cast for her.
Lena and Milo are level at the top, so both names are shown, in ascending
order.
```

Write your solution as a single `SELECT` query returning one column —
`choice` — one row for each winning name, ordered by `choice` in ascending
order.

## Hints

### Hint 1

Rows where the resident skipped the poll disappear on their own once you
measure the right thing: `COUNT(choice)` only sees non-null names, while
`COUNT(*)` would let an abstention row in. So `GROUP BY elector` with
`COUNT(choice)` produces every ballot's split denominator in one pass —
for residents who backed several names and for residents who backed just
one alike.

### Hint 2

With a split ballot, each of one elector's rows is worth the same
fraction, namely `1.0 / COUNT(choice)` over that elector's non-null rows.
Collect those fractions in a small per-elector CTE, join it back to the
non-null rows on `elector`, and only then group by `choice` — the joined
fraction is what turns `SUM(share)` into a fractional total rather than a
plain row count.

### Hint 3

Everyone tied at the top tier wins: compare each name's total against
`(SELECT MAX(votes) ...)` instead of sorting and keeping a single row,
because ties must all survive the filter. Sums of halves and thirds can
carry floating-point noise, so round the aggregated shares
(`ROUND(SUM(share), 9)`) before comparing — arithmetically equal tickets
then land on identical values. End with `ORDER BY choice` for the required
ascending order.
