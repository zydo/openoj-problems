# Isolated Buddy Pairs

## Description

Table: `Buddies`

| Column Name | Type |
| ----------- | ---- |
| person_a    | int  |
| person_b    | int  |

`(person_a, person_b)` is the primary key (combination of columns with
unique values) for this table. Each row records one buddy pairing: the
two members it names are buddies with each other.

Most buddy pairs travel in circles — often two buddies share a third
member who is paired with each of them. Some pairings are loners, with
no such overlap at all.

Find every buddy pairing whose two members have no mutual buddy.

Return the result table ordered by `person_a`, `person_b` in ascending
order.

Every testcase brings its own `dataset`: the DDL loads the `Buddies`
table with that testcase's rows before your query runs. The result
format is shown in the examples below.

### Example 1

```text
Input:
Buddies table:
+----------+----------+
| person_a | person_b |
+----------+----------+
| 1        | 2        |
| 2        | 3        |
| 1        | 3        |
| 3        | 6        |
| 4        | 5        |
| 5        | 7        |
| 4        | 7        |
| 6        | 8        |
+----------+----------+
Output:
+----------+----------+
| person_a | person_b |
+----------+----------+
| 3        | 6        |
| 6        | 8        |
+----------+----------+
Explanation:
- Members 1, 2, and 3 are paired with one another, so every stored pair
among them has the third member as a mutual buddy and none of the
three is reported.
- Members 4, 5, and 7 form another triangle, and its three pairs are
dropped for the same reason.
- The pair (3, 6) survives: member 3's other pairings involve 1 and 2,
while member 6's only other pairing is with 8, so nobody is paired
with both of them. Pair (6, 8) likewise has no shared middle.
Output table is ordered by person_a, then person_b, both ascending.
```

### Example 2

```text
Input:
Buddies table:
+----------+----------+
| person_a | person_b |
+----------+----------+
| 30       | 4        |
| 4        | 20       |
| 20       | 31       |
| 31       | 32       |
| 7        | 30       |
| 32       | 30       |
| 20       | 32       |
+----------+----------+
Output:
+----------+----------+
| person_a | person_b |
+----------+----------+
| 4        | 20       |
| 7        | 30       |
| 30       | 4        |
| 32       | 30       |
+----------+----------+
Explanation:
- Pair (20, 31) is dropped: member 32 is paired with both 20 and 31.
- Pair (31, 32) is dropped for the mirror reason: member 20 is paired
with both.
- The four reported pairs have no shared middle. Note that (30, 4) and
(32, 30) are reported exactly as stored, larger id first — the columns
record the pairing, not an ordering of the two members.
```

Write your solution as a single `SELECT` query returning two columns —
`person_a`, `person_b` — with one row for every stored pairing whose
two members have no mutual buddy, reported in the column order its row
stores. A pairing holds whichever column lists which member, so treat
the table as an undirected graph: a mutual buddy of a stored pair is a
third member, different from both, who appears together with each of
them in some row — in either column position.
