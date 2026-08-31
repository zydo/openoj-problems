# Fillable Clock Readings

## Description

You are given a string `time` of length 5 that shows a moment on a digital
clock in the format `"hh:mm"`. The earliest possible time is `"00:00"` and
the latest is `"23:59"`. Some of the digits in the string are the symbol
`?`, meaning that digit is unknown and must be replaced with a digit from
`0` to `9`. Return the number of distinct valid clock times that can be
produced by replacing every `?`.

### Example 1

```text
Input: time = "2?:3?"
Output: 40
Explanation: The hour tens is 2, so the hour can be any of 20 to 23 — 4
choices. The minute tens is 3, so the minutes can be any of 30 to 39 — 10
choices. In total, 4 * 10 = 40 times.
```

### Example 2

```text
Input: time = "?3:?0"
Output: 18
Explanation: The hour ones digit is 3, so the hour is 03, 13 or 23 — 3
choices. The minute ones digit is 0, so the minutes are 00, 10, 20, 30, 40
or 50 — 6 choices. In total, 3 * 6 = 18 times.
```

### Example 3

```text
Input: time = "1?:??"
Output: 600
Explanation: The hour tens is 1, giving hours 10 to 19 (10 choices), and
both minute digits are free (60 choices). The product is 10 * 60 = 600.
```

### Constraints

- `time` is a string of length 5 in the format `"hh:mm"`.
- `"00" <= hh <= "23"` and `"00" <= mm <= "59"` once every `?` is fixed to
  a valid value.
- Some digits may be `?` and need replacing with a digit from `0` to `9`.

## Hints

### Hint 1

The hour field and the minute field are independent, so the total count is
the product of the two fields' own counts.

### Hint 2

For each field, sweep every legal value (24 hours and 60 minutes) and count
how many match the digit pattern, treating `?` as always matching.
