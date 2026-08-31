# Compelling Screenings

## Description

Table: `Screenings`

| Column Name  | Type    |
| ------------ | ------- |
| screening_id | int     |
| title        | varchar |
| summary      | varchar |
| score        | float   |

`screening_id` is the primary key (column with unique values) for this
table. Each row contains a film's title, its short summary, and its
review score on a cinema guide. `score` is a float with two decimal
places in the range `[0, 10]`.

Write a solution to report the screenings with an odd-numbered id and a
summary that is not `'boring'`.

Return the result table ordered by `score` in descending order.

Each testcase supplies its own `dataset`: the DDL seeds the `Screenings`
table with that testcase's rows. The result format is in the following
example.

### Example 1

```text
Input: Screenings table from the dataset below.
Screenings rows:
screening_id  title           summary        score
1             Night Ferry     immersive      8.7
2             Quiet Room      thoughtful     9.4
3             Old Harbor      boring         9.2
5             Paper Kites     family tale    8.9
7             Glass River     Boring         7.6
Output:
screening_id  title           summary        score
5             Paper Kites     family tale    8.9
1             Night Ferry     immersive      8.7
7             Glass River     Boring         7.6
Explanation: ids 1, 3, 5, and 7 are odd. The screening at id 3 is excluded
because its summary is exactly `boring`; `Boring` at id 7 differs in case
and remains. The qualifying rows are listed from the highest score to the
lowest.
```

Write your solution as a single `SELECT` query returning four columns —
`screening_id`, `title`, `summary`, and `score` — with one row for every
screening that has an odd-numbered id and a summary other than boring.

## Hints

### Hint 1

Both filters are row-local: the id's parity and the summary string are
decided by one row of `Screenings` alone, and neither consults any other
row, so the whole query is a single filtered scan with no grouping and
no join.

### Hint 2

Spell the two predicates as one `AND` in the `WHERE` clause:
`screening_id % 2 = 1 AND summary != 'boring'`. The summary test is an
exact, case-sensitive string match — `Boring`, `BORING`, `boring!`, and
`boring ` with a trailing space are all different summaries and stay in
the answer; only the literal string boring leaves.

### Hint 3

`ORDER BY score DESC` honors the statement's demand that the highest
score stands first; the judge compares result rows as an unordered
multiset, so the sort dresses the answer rather than deciding it. Equal
scores would leave their relative order underdetermined — the test data
keeps every testcase's scores distinct, so the demanded order is total.
