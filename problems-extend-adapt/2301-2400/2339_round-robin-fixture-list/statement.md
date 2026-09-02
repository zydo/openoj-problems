# Round Robin Fixture List

## Description

Table: `Clubs`

| Column Name | Type    |
| ----------- | ------- |
| club_name   | varchar |

`club_name` is the unique column of this table. Each row holds the name
of one club entered in the competition.

List every fixture the round robin must schedule. Each pair of clubs
meets twice — once with one club as the home side and once with the
other as the home side — so every unordered pair of distinct clubs
yields two rows.

Each testcase supplies its own `dataset`: the DDL seeds the `Clubs`
table with that testcase's rows. A fixture is an ordered pair of two
different clubs, `(home_club, away_club)`, and the reversed pair counts
as the other leg of the same matchup, so `n` clubs produce `n * (n - 1)`
rows and a single club produces none. Names compare for exact equality:
two entries that differ in casing, spacing, or punctuation are two
different clubs. Return the result table in any order, with columns
`home_club` and `away_club`. The result format is shown in the
following example.

### Example 1

```text
Input:
Clubs table:
+------------------+
| club_name        |
+------------------+
| Harbor Athletic  |
| Northgate United |
| Summit Rovers    |
+------------------+
Output:
+------------------+------------------+
| home_club        | away_club        |
+------------------+------------------+
| Harbor Athletic  | Northgate United |
| Harbor Athletic  | Summit Rovers    |
| Northgate United | Harbor Athletic  |
| Northgate United | Summit Rovers    |
| Summit Rovers    | Harbor Athletic  |
| Summit Rovers    | Northgate United |
+------------------+------------------+
Explanation: The table lists every fixture of the round robin — each
pair of clubs appears once with each club at home.
```

### Example 2

```text
Input:
Clubs table:
+-----------------+
| club_name       |
+-----------------+
| Riverside City  |
| Lakeside Rovers |
+-----------------+
Output:
+-----------------+-----------------+
| home_club       | away_club       |
+-----------------+-----------------+
| Riverside City  | Lakeside Rovers |
| Lakeside Rovers | Riverside City  |
+-----------------+-----------------+
Explanation: With two clubs there is one matchup, played over two legs:
each club hosts once.
```
