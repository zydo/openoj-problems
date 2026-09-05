# Ordinal Day of a Date

## Description

You are given a string `date` holding a Gregorian calendar date in the
fixed format `YYYY-MM-DD`. Return which day of its year the date falls on,
counting January 1st as day `1`.

### Example 1

```text
Input: date = "2016-03-01"
Output: 61
Explanation: 2016 is a leap year, so January and February contribute 31
and 29 days, and March 1st is the 61st day.
```

### Example 2

```text
Input: date = "1998-12-25"
Output: 359
```

### Example 3

```text
Input: date = "1900-10-31"
Output: 304
Explanation: The century year 1900 is not a leap year, so February keeps
its usual 28 days.
```

### Constraints

- `date.length == 10`
- `date[4] == date[7] == '-'`, and every other character of `date` is a
  digit
- `date` represents a real calendar date between January 1st, 1900 and
  December 31st, 2019.

## Hints

### Hint 1

Keep a table of how many days each month has; February gains a 29th day
in leap years. The ordinal is the day of the month plus the lengths of
every month before it.
