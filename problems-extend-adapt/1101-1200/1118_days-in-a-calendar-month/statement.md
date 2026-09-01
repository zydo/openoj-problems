# Days in a Calendar Month

## Description

Given a year `year` and a month number `month` (1 for January through 12
for December), return how many days that month holds under the Gregorian
calendar.

### Example 1

```text
Input: year = 1996, month = 8
Output: 31
```

### Example 2

```text
Input: year = 2004, month = 2
Output: 29
Explanation: 2004 is a leap year, so February has one extra day.
```

### Example 3

```text
Input: year = 2100, month = 2
Output: 28
Explanation: 2100 is divisible by 100 but not by 400, so it is not a leap
year despite being divisible by 4.
```

### Constraints

- `1583 <= year <= 2100`
- `1 <= month <= 12`

## Hints

### Hint 1

Only February ever varies; every other month's length is fixed. What single
yes/no question about `year` decides February's length?

### Hint 2

A year is leap when it is divisible by 4, except that century years must
additionally be divisible by 400.
