# Seasoned Applicants Who Aced The Auditions

## Description

Table: `Applicants`

| Column Name      | Type    |
| ---------------- | ------- |
| applicant_id     | int     |
| full_name        | varchar |
| experience_years | int     |
| audition_id      | int     |

`applicant_id` is the primary key column for this table. Each row describes
one applicant: their name, how many years of professional experience they
have, and the audition they attended.

Table: `Trials`

| Column Name | Type |
| ----------- | ---- |
| audition_id | int  |
| attempt_id  | int  |
| marks       | int  |

(`audition_id`, `attempt_id`) is the primary key column combination for this
table. Each row records the marks earned in one attempt of an audition.

Write a query that returns the IDs of the applicants who have at least two
years of experience and whose audition attempts add up to a total strictly
greater than 15 marks.

Each testcase supplies its own `dataset`, whose statements insert all rows
for both tables before your query runs. Report one column, `applicant_id`,
and the rows may come back in any order. The query result format is shown
in the following example.

### Example 1

```text
Input:
Applicants table:
applicant_id  full_name  experience_years  audition_id
4             Ines       3                 71
9             Jonas      1                 72
6             Katya      8                 73
2             Liam       2                 74
11            Mira       5                 75
Trials table:
audition_id  attempt_id  marks
71           1           7
71           2           6
72           1           18
73           1           5
73           2           5
73           3           5
74           1           16
75           1           10
75           2           8
Output:
applicant_id
2
11
Explanation: Applicant 4 has enough experience, but the attempts total 13
marks. Applicant 9 scores 18 with a single attempt, yet holds only one year
of experience. Applicant 6 is seasoned, but the attempts land on exactly 15,
which is not strictly greater. Applicants 2 and 11 satisfy both conditions —
16 marks over two years and 18 marks over five — so they are shortlisted.
```

### Example 2

```text
Input:
Applicants table:
applicant_id  full_name  experience_years  audition_id
21            Noor       2                 81
22            Omar       6                 82
23            Pia        0                 83
24            Ravi       7                 84
Trials table:
audition_id  attempt_id  marks
81           1           8
81           2           8
82           1           15
82           2           1
83           1           30
Output:
applicant_id
21
22
Explanation: Noor reaches 16 marks with the required two years of
experience, and Omar does too. Pia scored well above the bar but has no
professional experience at all, and Ravi never attempted any audition, so
neither makes the shortlist.
```
