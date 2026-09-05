# Passengers Over Sixty

## Description

Every traveler on a flight is described by one fixed-width check-in record,
and the records arrive as a 0-indexed array of strings `details`. Each
record is exactly 15 characters long and packs four fields side by side:

- positions 0 through 9 hold the traveler's phone number;
- position 10 holds a single letter coding the traveler's gender;
- positions 11 and 12 hold the traveler's age as a two-digit number;
- positions 13 and 14 hold the traveler's seat number.

Count how many of the travelers are strictly older than 60 and return that
count.

### Example 1

```text
Input: details = ["4219520030M6672","3348544950F0526","1902661271M1890","8878526470O7706"]
Output: 2
Explanation: The four ages are 66, 5, 18, and 77. Two of them — 66 and 77 —
exceed 60.
```

### Example 2

```text
Input: details = ["5509345109F6109"]
Output: 1
Explanation: The lone traveler is 61 years old, which is past the mark.
```

### Example 3

```text
Input: details = ["0346127854M6001","7712605340F0488","9925771080M9823","1402937440F6045","7123417711M0377"]
Output: 1
Explanation: The ages are 60, 4, 98, 60, and 3. Being exactly 60 is not
older than 60, so only the 98-year-old counts.
```

### Constraints

- `1 <= details.length <= 100`
- `details[i].length == 15`
- `details[i]` consists only of digits, except that `details[i][10]` is one
  of `'M'`, `'F'`, and `'O'`.
- Every phone number and every seat number in `details` is distinct.

## Hints

### Hint 1

The age always sits at the same two offsets, 11 and 12 — slice them out and
read them as a base-ten number rather than scanning the record.

### Hint 2

Count a record only when the decoded age is strictly greater than 60;
travelers aged exactly 60 do not qualify.
