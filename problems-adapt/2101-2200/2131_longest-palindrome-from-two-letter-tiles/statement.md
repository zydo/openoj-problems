# Longest Palindrome From Two-Letter Tiles

## Description

You receive an array `words` of tiles, where every tile holds exactly two
lowercase English letters.

Glue any selection of tiles together, in any order you like, to build one
long string; each tile may be used at most once. Your goal is to make that
string a palindrome — one that reads identically in both directions.

Return the length of the longest palindrome that can be assembled this way,
or `0` when no palindrome can be built at all.

### Example 1

```text
Input: words = ["do","go","od","eg","ge"]
Output: 8
Explanation: Lay the tiles out as "do" + "ge" + "eg" + "od" = "dogeegod",
which reads the same backwards and has length 8.
```

### Example 2

```text
Input: words = ["kk","at","ta","zz"]
Output: 6
Explanation: The mirrored tiles "ta" and "at" form the two wings, and the
double-letter tile "kk" takes the center: "ta" + "kk" + "at" = "takkat", of
length 6. (Using "zz" as the center instead works equally well.)
```

### Example 3

```text
Input: words = ["ab","cd","ef"]
Output: 0
Explanation: No tile is a double-letter tile, and no two tiles are reverses
of one another, so not even a two-character palindrome can be assembled.
```

### Constraints

- `1 <= words.length <= 10⁵`
- `words[i].length == 2`
- Each `words[i]` consists of lowercase English letters.

## Hints

### Hint 1

A palindrome mirrors around its center. If some tile `"ab"` is placed on
the left wing, which tile must eventually land on the right wing to keep
the whole string symmetric?

### Hint 2

The mirrored partner must be `"ba"`. Each occurrence of `"ab"` consumes one
`"ba"`, so the number of such wing pairs is capped by how many copies of
the rarer orientation exist.

### Hint 3

A tile that is already a palindrome, like `"aa"`, can be used in wing pairs
like any other — and one spare copy may additionally sit exactly in the
center to gain two more characters.
