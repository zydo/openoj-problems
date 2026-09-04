# Arena Attendance Run

## Description

Table: `ArenaVisits`

| Column Name    | Type |
| -------------- | ---- |
| visit_id       | int  |
| arrival_date   | date |
| attendee_count | int  |

`arrival_date` is unique. Each row records one arena visit: its numeric
identifier, its date, and the number of people who attended. Larger
`visit_id` values always correspond to later dates.

Return every visit that belongs to a run of at least three consecutive
visit identifiers where every visit drew at least 100 attendees. Calendar
dates need not be consecutive; only the identifiers define a run. Order the
result by `arrival_date` ascending.

### Example 1

```text
Input: ArenaVisits
visit_id  arrival_date  attendee_count
10        2023-04-01    75
11        2023-04-03    160
12        2023-04-05    225
13        2023-04-10    140
14        2023-04-12    92
15        2023-04-15    310

Output:
visit_id  arrival_date  attendee_count
11        2023-04-03    160
12        2023-04-05    225
13        2023-04-10    140
```

Visits 11 through 13 form a qualifying identifier run. Visits 10 and 14
break the attendance condition, and visit 15 has no adjacent qualifying
run.

Write one `SELECT` query that returns `visit_id`, `arrival_date`, and
`attendee_count`.

### Constraints

- `arrival_date` is unique.
- Visit identifiers and dates increase together.
- A qualifying run has at least three consecutive identifiers.
- Each qualifying visit has `attendee_count >= 100`.

## Hints

### Hint 1

Use window functions ordered by `visit_id` to inspect up to two neighboring
rows on both sides.

### Hint 2

Check identifier equality as well as attendance. Adjacent rows in sort order
can still have a missing identifier between them.
