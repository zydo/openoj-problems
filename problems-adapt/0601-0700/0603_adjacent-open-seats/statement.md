# Adjacent Open Seats

## Description

Table: `AuditoriumSeats`

| Column Name | Type |
| ----------- | ---- |
| seat_number | int  |
| is_open     | bool |

Each row describes one seat. `is_open` is `1` when the seat is available
and `0` when it is occupied. Seat numbers identify the seating positions.

Return every open seat that has an open neighbor whose seat number differs
by exactly one. Sort the result by `seat_number` ascending. A lone open seat
does not qualify, even if another open seat appears elsewhere in the table.

### Example 1

```text
Input: AuditoriumSeats
seat_number  is_open
10           1
11           1
13           1
14           0
15           1
16           1

Output:
seat_number
10
11
15
16
```

Seats 10 and 11 make one adjacent open pair; seats 15 and 16 make another.
Seat 13 is open but neither neighboring seat is an open adjacent seat.

Write one `SELECT` query returning `seat_number`.

### Constraints

- Two seats are adjacent only when their numbers differ by one.
- `is_open` is either `0` or `1`.

## Hints

### Hint 1

Use `LAG` and `LEAD` ordered by `seat_number` to examine neighboring rows.

### Hint 2

Verify both the number difference and the open flag, because neighboring rows
in the ordered data can still have a gap in their seat numbers.
