# Letter Board Typing

## Description

A typing board holds the 26 letters in the layout shown below: `a` through
`y` fill five rows of five columns, and `z` sits alone on a sixth row,
under the first column.

![diagram](figures/1138-1.svg)

You start on `a`, at row `0`, column `0`. A move is one of:

- `'U'`, `'D'`, `'L'`, `'R'` — step one cell up, down, left, or right; the
  destination cell must exist on the board;
- `'!'` — type the letter printed on your current cell.

Output a move sequence that types every letter of `target`, in order, using
the fewest moves possible. When several shortest sequences exist, any one
of them is accepted.

### Example 1

```text
Input: target = "z"
Output: "DDDDD!"
Explanation: Five `'D'` moves run straight down the only column row 5
has, and `'!'` then types `z`.
```

### Example 2

```text
Input: target = "buzz"
Output: "R!LDDDD!D!!"
```

### Example 3

```text
Input: target = "puzzle"
Output: "DDD!D!D!!UUUR!UURRR!"
```

### Constraints

- `1 <= target.length <= 100`
- `target` consists only of English lowercase letters.

## Hints

### Hint 1

No letter ever moves: alphabet position `p` always sits at row `p / 5`,
column `p % 5`, so the walk is one straight leg per target letter.

### Hint 2

The only wrinkle is `z` — row 5 exists at column 0 alone. When leaving
`z`, climb back into row 4 before any sideways move; when entering it,
finish every sideways move while still in rows 0-4.

### Hint 3

Emitting each leg in one fixed order — up, left, down, right — keeps both
of those rules true automatically.
