# Calendar Dates In Base Two

## Description

A calendar date arrives as a string `date` shaped `yyyy-mm-dd`, the usual
Gregorian way of writing a day.

Every component of that date can be restated in base two: write the year,
the month, and the day each as a binary number with no leading zeroes,
then join the three renderings with dashes, keeping the year-month-day
order. The result is the binary form of `date`.

Return that binary form.

### Example 1

```text
Input: date = "1999-12-31"
Output: "11111001111-1100-11111"
Explanation: The pieces 11111001111, 1100, and 11111 are what 1999, 12,
and 31 look like in base two.
```

### Example 2

```text
Input: date = "2100-10-05"
Output: "100000110100-1010-101"
Explanation: 2100, 10, and 5 become 100000110100, 1010, and 101. Note
that the calendar's zero padding is gone — the day written "05" on the
calendar appears as a plain 101.
```

### Constraints

- `date.length == 10`
- `date[4] == date[7] == '-'`, and every other character of `date` is a
  digit.
- `date` is guaranteed to be a real Gregorian calendar date falling in
  the inclusive range from Jan 1st, 1900 to Dec 31st, 2100.
