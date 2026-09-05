# Middle-of-the-Pack Contestants

## Description

A quiz league runs its season as a series of heats. Two tables record
the season: the league's entrants, and one row per score achieved in a
heat.

Table: `Contestants`

| Column Name     | Type    |
| --------------- | ------- |
| contestant_id   | int     |
| contestant_name | varchar |

`contestant_id` is the primary key (column with unique values) for
this table. `contestant_name` is the contestant's name.

Table: `Heats`

| Column Name   | Type |
| ------------- | ---- |
| heat_id       | int  |
| contestant_id | int  |
| score         | int  |

`(heat_id, contestant_id)` is the primary key (combination of columns
with unique values) for this table. Each row records that the
contestant with `contestant_id` scored `score` points in the heat with
id `heat_id`.

Call a contestant middle-of-the-pack when they competed in at least
one heat and never held the highest score or the lowest score of any
heat they entered. Sharing an extreme counts as holding it — a
contestant tied for the top or the bottom score is not
middle-of-the-pack.

Report the `contestant_id` and `contestant_name` of every
middle-of-the-pack contestant. Contestants who never competed in a
heat are not reported, even though they hold no extreme either.

Each testcase's `dataset` seeds both tables: its script inserts the
testcase's `Contestants` rows and, when present, its `Heats` rows
before your query runs. Return the result table ordered by
`contestant_id`. The result format is in the following example.

### Example 1

```text
Input:
Contestants
+---------------+-----------------+
| contestant_id | contestant_name |
+---------------+-----------------+
| 1             | Ines            |
| 2             | Ravi            |
| 3             | Wen             |
| 4             | Zola            |
| 5             | Pavel           |
| 6             | Greta           |
+---------------+-----------------+
Heats
+---------+---------------+-------+
| heat_id | contestant_id | score |
+---------+---------------+-------+
| 11      | 1             | 64    |
| 11      | 2             | 71    |
| 11      | 3             | 88    |
| 11      | 4             | 59    |
| 11      | 5             | 70    |
| 12      | 1             | 90    |
| 12      | 4             | 85    |
| 12      | 2             | 77    |
| 12      | 3             | 80    |
| 12      | 5             | 83    |
+---------+---------------+-------+
Output:
+---------------+-----------------+
| contestant_id | contestant_name |
+---------------+-----------------+
| 5             | Pavel           |
+---------------+-----------------+
Explanation: In heat 11 the extreme scores are Wen's 88 at the top and
Zola's 59 at the bottom; in heat 12 they are Ines's 90 and Ravi's 77.
Those four contestants each held an extreme once, so none of them
qualifies. Pavel entered both heats and always finished between the
extremes, which makes him the only middle-of-the-pack contestant.
Greta holds no extreme either, but she never competed in a heat, so
she is left out.
```

Write your solution as a single `SELECT` query returning two columns —
`contestant_id` and `contestant_name` — one row per
middle-of-the-pack contestant, ordered by `contestant_id`.

## Hints

### Hint 1

Start by summarizing each heat: a grouped pass over `Heats` can
produce `heat_id` together with `MAX(score)` and `MIN(score)` for that
heat.

### Hint 2

Any score equal to its heat's maximum or minimum disqualifies its
contestant. Join `Heats` to the per-heat summary on `heat_id` and
gather the `contestant_id`s of the matching rows — equality means ties
at an extreme are caught too.

### Hint 3

The answer is the set of contestants whose id shows up somewhere in
`Heats` minus the disqualified set; order what remains by
`contestant_id`.
