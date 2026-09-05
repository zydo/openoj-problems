# Alternating Triple Selections

## Description

A binary string `s` describes a row of venues along a promenade:
`s[i] = '0'` means position `i` holds a cafe, and `s[i] = '1'` means it
holds a gallery.

You want to visit exactly three of the venues, and you would like the
visit to alternate between the two kinds. Reading only the three chosen
positions from left to right must therefore produce `010` or `101` — two
chosen neighbors may never be the same character.

Return the number of distinct sets of three positions that form such an
alternating triple.

### Example 1

```text
Input: s = "10110"
Output: 4
Explanation:
The valid position sets are:
- [0,1,2] and [0,1,3], each reading "101"
- [1,2,4] and [1,3,4], each reading "010"
Every other triple contains two equal adjacent characters, so the answer
is 4.
```

### Example 2

```text
Input: s = "0101"
Output: 2
Explanation:
Positions [0,1,2] read "010" and positions [1,2,3] read "101"; both are
valid, giving 2 ways.
```

### Example 3

```text
Input: s = "000111"
Output: 0
Explanation:
Every choice of three positions contains two equal neighbors, so no set
qualifies.
```

### Constraints

- `3 <= s.length <= 10⁵`
- `s[i]` is either `'0'` or `'1'`.

## Hints

### Hint 1

Only two shapes qualify: the picked characters must alternate, so the
middle pick differs from both ends — which necessarily match each other.

### Hint 2

Sweep once with four counters: the zeros and ones seen so far, plus the
`01` and `10` pairs formed so far. An arriving `0` completes every `10`
pair into a triple and turns each previously seen `1` into a new `01`
pair; an arriving `1` does the mirror-image bookkeeping.
