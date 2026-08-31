# Bridge Mentor

## Description

Table: `Mentorship`

| Column Name | Type    |
| ----------- | ------- |
| mentor      | varchar |
| mentee      | varchar |

`(mentor, mentee)` is the primary key (combination of columns with unique
values) for this table. Each row records that `mentee` is mentored by
`mentor` inside a coaching network. Nobody mentors themself.

A bridge mentor is a person who:

- mentors at least one other person, and
- is themselves mentored by someone else.

Write a solution to report every bridge mentor together with how many
mentees they personally mentor.

Return the result table ordered by `mentor` in alphabetical order.

Each testcase supplies its own `dataset`: the DDL seeds the `Mentorship`
table with that testcase's rows. The result format is in the following
example.

### Example 1

```text
Input: Mentorship table from the dataset below.
Mentorship rows:
mentor | mentee
Nina   | Omar
Omar   | Priya
Omar   | Qadir
Qadir  | Rashi
Output:
mentor  mentee_count
Omar    2
Qadir   1
Explanation: Omar mentors 2 people, Priya and Qadir, and Omar is himself
mentored by Nina, so Omar is a bridge mentor. Qadir mentors 1 person,
Rashi, and Qadir is mentored by Omar, so Qadir is a bridge mentor too.
Nina mentors 1 person, Omar, but nobody mentors Nina, so she is not a
bridge mentor; Priya and Rashi each have a mentor but mentor nobody
themselves, so neither is a bridge mentor either.
```

Write your solution as a single `SELECT` query returning two columns —
`mentor` and `mentee_count` — with one row for every bridge mentor.

## Hints

### Hint 1

Both conditions are membership claims about the table's two columns: a
person mentors somebody when their name appears in some row's `mentor`,
and somebody mentors them when their name appears in some row's
`mentee`. The reported `mentee_count` counts only the first relationship
— how many people they personally mentor — never how many levels of
mentorship sit above them.

### Hint 2

`GROUP BY mentor` with `COUNT(*)` collapses the table into each person's
mentee count, and `WHERE mentor IN (SELECT mentee FROM Mentorship)` keeps
only the mentors who are also mentees: the subquery reads the same single
table in its other role, as the set of names that appear as a `mentee`,
and `IN` asks each group's name for membership in it.

### Hint 3

`ORDER BY mentor ASC` matches the statement's alphabetical demand; the
judge compares result rows as an unordered multiset, so the ordering
honors the statement rather than deciding correctness. Both columns hold
names, not ids, so every comparison here is a plain string comparison
and alphabetical means ascending by name.
