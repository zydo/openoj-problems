# The Interuniversity Exam Duel

## Description

Table: `NewYorkEntrants`

| Column Name | Type |
| ----------- | ---- |
| entrant_id  | int  |
| points      | int  |

In SQL, `entrant_id` is the primary key column for this table. Each row
holds the exam result of one entrant sent by New York University.

Table: `CaliforniaEntrants`

| Column Name | Type |
| ----------- | ---- |
| entrant_id  | int  |
| points      | int  |

In SQL, `entrant_id` is the primary key column for this table. Each row
holds the exam result of one entrant sent by California University.

The two universities duel over an exam. Each side fields the same number
of entrants, and the university with more excellent entrants takes the
duel. When the two sides field the same number of excellent entrants, the
duel ends in a draw.

An entrant is excellent when they scored at least 90 points out of 100.

Decide the duel:

- `"New York University"` if New York University wins.
- `"California University"` if California University wins.
- `"No Winner"` if the duel ends in a draw.

Each testcase supplies its own `dataset`, which seeds both tables. The
query result format is shown in the following examples.

### Example 1

```text
Input:
NewYorkEntrants table:
entrant_id  points
5           93
6           72
7           90
CaliforniaEntrants table:
entrant_id  points
15          88
16          91
17          64
Output:
winner
New York University
Explanation: New York University fields two excellent entrants — 93 and
90 points — while California University fields only one, the 91. The
East Coast side takes the duel.
```

### Example 2

```text
Input:
NewYorkEntrants table:
entrant_id  points
21          90
22          60
23          85
CaliforniaEntrants table:
entrant_id  points
31          100
32          95
33          45
Output:
winner
California University
Explanation: New York University fields exactly one excellent entrant,
while California University fields two — 100 and 95 points — so the duel
goes to California University.
```

### Example 3

```text
Input:
NewYorkEntrants table:
entrant_id  points
40          90
41          45
42          77
CaliforniaEntrants table:
entrant_id  points
50          89
51          91
52          30
Output:
winner
No Winner
Explanation: Each university fields exactly one excellent entrant — the
90 for New York and the 91 for California. Note how the 89 falls just
short of the excellence bar. The duel ends in a draw.
```
