# Integers With Sorted Path Digits

## Description

You are given two integers `l` and `r`, and a string `directions` holding
exactly three `'D'` characters and three `'R'` characters.

For every integer `x` in the range `[l, r]`:

- Write `x` as a 16-digit string, left-padding with zeros when it has fewer
  than 16 digits.
- Pour those digits into a `4 × 4` grid in row-major order — the first four
  digits fill the top row left to right, the next four fill the second row,
  and so on.
- Start at the top-left cell and apply the six moves of `directions` in
  order: `'D'` steps one row down, `'R'` steps one column right.
- Collect the digits of the seven visited cells, starting cell included.

The integer `x` qualifies when the collected digit sequence is
non-decreasing.

Return how many integers in `[l, r]` qualify.

### Example 1

```text
Input: l = 3120, r = 3130, directions = "DDRDRR"
Output: 8
Explanation: The walk visits (0,0) → (1,0) → (2,0) → (2,1) → (3,1) → (3,2)
→ (3,3). For any four-digit number, the first four visited cells hold 0 and
the last three hold the number's final three digits.
For 3120 the visited digits are [0,0,0,0,1,2,0], which decreases, so 3120
does not qualify. For 3122 they are [0,0,0,0,1,2,2] — non-decreasing — so
3122 qualifies. Every number from 3122 through 3129 qualifies the same way,
while 3130 fails with [0,0,0,0,1,3,0]. The answer is 8.
```

### Example 2

```text
Input: l = 1122334455667780, r = 1122334455667790, directions = "RRRDDD"
Output: 4
Explanation: The walk visits (0,0) → (0,1) → (0,2) → (0,3) → (1,3) → (2,3)
→ (3,3). For 1122334455667780 the visited digits are [1,1,2,2,4,6,0], which
decreases at the end, so it does not qualify. For 1122334455667788 they are
[1,1,2,2,4,6,8] — non-decreasing — so it qualifies. Exactly 1122334455667786
through 1122334455667789 keep the final digit at or above 6, while 7780 and
7790 drop to 0. The answer is 4.
```

### Example 3

```text
Input: l = 9000000000000001, r = 9000000000000001, directions = "RRRDDD"
Output: 0
Explanation: The visited digits of 9000000000000001 are [9,0,0,0,0,0,1].
The sequence collapses from 9 to 0 at the very start, so the single integer
in the range does not qualify. The answer is 0.
```

### Constraints

- `1 <= l <= r <= 9 × 10¹⁵`
- `directions.length == 6`
- `directions` consists of exactly three `'D'` characters and three `'R'`
  characters.

## Hints

### Hint 1

Only the seven visited cells matter. Every move goes down or right, so those
cells appear in the digit string in walk order — the whole test is that
those seven digits never decrease.

### Hint 2

Count with digit dynamic programming over the 16 positions, carrying whether
the prefix is still pinned to the bound, how many walk cells have been
filled, and the digit last placed on the walk.

### Hint 3

Define `f(bound)` as the number of qualifying integers up to a bound and
return `f(r) - f(l - 1)`.
