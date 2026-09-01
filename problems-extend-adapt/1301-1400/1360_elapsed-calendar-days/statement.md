# Elapsed Calendar Days

## Description

Two calendar dates arrive as strings in `YYYY-MM-DD` form. Measure the
gap between them in days — a plain count of calendar days, so the order
of the two inputs does not matter.

### Example 1

```text
Input: date1 = "2021-03-14", date2 = "2021-03-01"
Output: 13
```

### Example 2

```text
Input: date1 = "1999-12-31", date2 = "2000-01-01"
Output: 1
Explanation: The pair straddles a year boundary, and exactly one night
passes between the two dates.
```

### Example 3

```text
Input: date1 = "2077-02-10", date2 = "1971-01-05"
Output: 38753
```

### Constraints

- Both inputs are valid dates of the form `YYYY-MM-DD`, with years in
  the range `1971` through `2100`.

## Hints

### Hint 1

Convert each date into a single day number counted from one fixed
reference day.

### Hint 2

Once both dates are day numbers, the answer is just their absolute
difference.

### Hint 3

To build a day number, add one length per elapsed year (365, or 366
across a leap year), then the lengths of the months already gone by in
the date's own year, then the day of the month.
