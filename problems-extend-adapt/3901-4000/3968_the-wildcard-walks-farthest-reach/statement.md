# The Wildcard Walk's Farthest Reach

## Description

A walker begins at the origin of an infinite grid and follows a plan given
as the string `moves`. Every character is one step:

- `'U'` steps one unit up (y grows by 1).
- `'D'` steps one unit down (y shrinks by 1).
- `'L'` steps one unit left (x shrinks by 1).
- `'R'` steps one unit right (x grows by 1).
- `'_'` is a free step: you decide its direction when you take it, and each
  one may be chosen independently.

After the whole plan is carried out, report the largest Manhattan distance
from the origin the walker can possibly end up at.

### Example 1

```text
Input: moves = "UD_L"
Output: 2
Explanation:
    One best way to walk it:
        'U': (0, 0) -> (0, 1)
        'D': (0, 1) -> (0, 0)
        '_' taken as 'L': (0, 0) -> (-1, 0)
        'L': (-1, 0) -> (-2, 0)

    The final spot sits |0 - (-2)| + |0 - 0| = 2 away from the origin.
```

### Example 2

```text
Input: moves = "R_R"
Output: 3
Explanation:
    Spend both steps heading right:
        'R': (0, 0) -> (1, 0)
        '_' taken as 'R': (1, 0) -> (2, 0)
        'R': (2, 0) -> (3, 0)

    The final spot sits |0 - 3| + |0 - 0| = 3 away from the origin.
```

### Example 3

```text
Input: moves = "LL__"
Output: 4
Explanation:
    Keep everything pointed left: the two fixed steps reach (-2, 0) and the
    two free steps extend the run to (-4, 0), a distance of 4.
```

### Constraints

- `1 <= moves.length <= 10⁵`
- Every character of `moves` is `'U'`, `'D'`, `'L'`, `'R'`, or `'_'`.

## Hints

### Hint 1

Tally the fixed steps axis by axis: how far right minus how far left, and
how far up minus how far down.

### Hint 2

Ignoring the free steps, the walker ends `abs(x) + abs(y)` units away.

### Hint 3

A free step never has to be wasted — aim it along whichever axis is already
carrying the larger displacement, so every `'_'` adds exactly one unit to
the total.
