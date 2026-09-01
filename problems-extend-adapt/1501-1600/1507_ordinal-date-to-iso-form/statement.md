# Ordinal Date To ISO Form

## Description

You are given a date written as `Day Month Year`, where:

- `Day` is an ordinal like `"1st"`, `"2nd"`, `"3rd"`, `"4th"`, ...,
  `"30th"`, `"31st"`.
- `Month` is one of the twelve three-letter names
  `"Jan"`, `"Feb"`, `"Mar"`, `"Apr"`, `"May"`, `"Jun"`, `"Jul"`, `"Aug"`,
  `"Sep"`, `"Oct"`, `"Nov"`, `"Dec"`.
- `Year` is four digits in the range `[1900, 2100]`.

Translate the date into `YYYY-MM-DD` form, where `YYYY` is the four-digit
year, `MM` the two-digit month, and `DD` the two-digit day.

### Example 1

```text
Input: date = "1st Mar 1901"
Output: "1901-03-01"
```

### Example 2

```text
Input: date = "31st Dec 1999"
Output: "1999-12-31"
```

### Example 3

```text
Input: date = "3rd Jul 2087"
Output: "2087-07-03"
```

### Constraints

- Every input date is valid, so no error handling is required.

## Hints

### Hint 1

Treat the day, the month, and the year as three independent conversion
jobs.

### Hint 2

Whichever suffix a day carries, it is always two letters long — chop the
last two characters and only the digits remain.
