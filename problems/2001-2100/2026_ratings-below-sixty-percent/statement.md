# Ratings Below Sixty Percent

## Description

Table: `Puzzles`

| Column Name | Type |
| ----------- | ---- |
| puzzle_id   | int  |
| upvotes     | int  |
| downvotes   | int  |

In SQL, `puzzle_id` is the primary key column for this table. Each row
records the vote tally of one community puzzle: how many users rated it
positively and how many negatively.

Find the IDs of the poorly received puzzles. A puzzle is poorly received when
its approval rate — the upvotes divided by all votes cast — is strictly less
than 60%.

Return the result table ordered by `puzzle_id` in ascending order.

Each testcase supplies its own `dataset`, whose statements insert all rows
into `Puzzles` before your query runs. The result format is shown in the
following example.

### Example 1

```text
Input:
Puzzles table:
puzzle_id  upvotes  downvotes
5          311      189
9          479      723
2          55       45
7          761      241
12         29       71
Output:
puzzle_id
2
9
12
Explanation: The approval rates are as follows:
- Puzzle 2: (55 / (55 + 45)) * 100 = 55.00000%
- Puzzle 5: (311 / (311 + 189)) * 100 = 62.20000%
- Puzzle 7: (761 / (761 + 241)) * 100 = 75.94810%
- Puzzle 9: (479 / (479 + 723)) * 100 = 39.85025%
- Puzzle 12: (29 / (29 + 71)) * 100 = 29.00000%
Puzzles 2, 9, and 12 are poorly received because their approval rates are
less than 60%.
```

### Example 2

```text
Input:
Puzzles table:
puzzle_id  upvotes  downvotes
3          3        2
6          1        3
8          2        0
Output:
puzzle_id
6
Explanation: Puzzle 3 sits exactly at 60% approval, which does not satisfy
the strict threshold, and puzzle 8 has unanimous approval. Only puzzle 6, at
25%, is poorly received.
```
