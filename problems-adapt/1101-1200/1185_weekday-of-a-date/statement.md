# Weekday of a Date

## Description

You are handed a calendar date as three integers: the day of the month,
the month, and the year. Your task is to report which day of the week that
date falls on.

Answer with the English name — one of `{"Sunday", "Monday", "Tuesday",
"Wednesday", "Thursday", "Friday", "Saturday"}`.

So the question has a fixed reference point, you are told that January 1,
1971 fell on a Friday.

### Example 1

```text
Input: day = 29, month = 2, year = 2000
Output: "Tuesday"
```

### Example 2

```text
Input: day = 4, month = 7, year = 1976
Output: "Sunday"
```

### Example 3

```text
Input: day = 1, month = 1, year = 2077
Output: "Friday"
```

### Constraints

- The date is valid and lies in the inclusive year range 1971 through 2100.

## Hints

### Hint 1

Count how many days separate the anchor date from the one you were given;
the count taken modulo 7 pins down the weekday.

### Hint 2

While counting whole years, remember which ones are leap years: divisible
by 4, except century years not divisible by 400.

### Hint 3

Then add the lengths of the months already finished in the target year,
followed by the days consumed inside the current month.
