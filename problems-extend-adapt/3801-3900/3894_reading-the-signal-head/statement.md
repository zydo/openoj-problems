# Reading The Signal Head

## Description

A traffic signal's countdown drives which lamp its head is showing. You are
handed the seconds still on the clock as the integer `timer`, and the display
works like this:

- with exactly `0` seconds left, the head shows `"Green"`;
- with exactly `30` seconds left, the head shows `"Orange"`;
- while more than `30` but no more than `90` seconds remain, the head shows
  `"Red"`.

Every other reading lies outside the signal's display plan, so for those you
report `"Invalid"`.

### Example 1

```text
Input: timer = 45
Output: "Red"
Explanation: 45 falls inside the band 30 < timer <= 90, so the head is
currently "Red".
```

### Example 2

```text
Input: timer = 30
Output: "Orange"
Explanation: Only the exact reading 30 lights the Orange lamp.
```

### Example 3

```text
Input: timer = 200
Output: "Invalid"
Explanation: No display rule covers 200, so the answer is "Invalid".
```

### Constraints

- `0 <= timer <= 1000`

## Hints

### Hint 1

Test the rules one by one with ordinary comparisons; the bands never overlap,
so the first hit is the answer.

### Hint 2

Note the strict lower edge of the Red band: a reading of exactly 30 belongs
to Orange, and everything untouched by all three rules is "Invalid".
