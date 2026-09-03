# One-Finger Typing Cost

## Description

A keyboard lays its keys out as a rectangular grid of three ragged rows:
the top row carries `qwertyuiop` in columns 0 through 9, the middle row
carries `asdfghjkl` in columns 0 through 8, and the bottom row carries
`zxcvbnm` in columns 0 through 6. Rows count from the top and columns
from the left, both starting at 0, so every letter owns one cell — 'a'
lives at (1, 0), for instance.

A single finger starts resting on the 'a' key and must type every
character of a given lowercase string `s` in order, hopping from key to
key. Moving between keys at (r1, c1) and (r2, c2) costs
|r1 - r2| + |c1 - c2|.

Return the total cost of typing all of `s`.

### Example 1

```text
Input: s = "ques"
Output: 13
Explanation: The finger begins on 'a' at (1, 0).
Hop to 'q' at (0, 0): |1 - 0| + |0 - 0| = 1.
Hop to 'u' at (0, 6): |0 - 0| + |0 - 6| = 6.
Hop to 'e' at (0, 2): |0 - 0| + |6 - 2| = 4.
Hop to 's' at (1, 1): |0 - 1| + |2 - 1| = 2.
The moves sum to 1 + 6 + 4 + 2 = 13.
```

### Example 2

```text
Input: s = "az"
Output: 1
Explanation: The finger is already on 'a', so typing it costs 0, and
the hop from 'a' at (1, 0) to 'z' at (2, 0) costs 1.
```

### Example 3

```text
Input: s = "popcorn"
Output: 38
Explanation: The hops cost 10 (a → p), 1 (p → o), 1 (o → p), 9
(p → c), 8 (c → o), 5 (o → r), and 4 (r → n), which total 38.
```

### Constraints

- `1 <= s.length <= 10⁴`
- `s` consists of lowercase English letters only.

## Hints

### Hint 1

Precompute the (row, col) cell of each of the 26 letters from the three
row strings.

### Hint 2

Seed the walk with the cell of 'a' and read `s` left to right.

### Hint 3

Each character contributes the Manhattan distance from the key the
finger just left.

### Hint 4

The answer is simply the running sum of those move costs.
