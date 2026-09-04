# Pyramid Block Stacking

## Description

You are building a pyramid of single-letter colored blocks. The bottom
row is fixed as the string `bottom`, and each row placed above it has
exactly one fewer block than the row beneath, centered so that every
block (except at the ends) rests on top of two adjacent blocks below it.

A block may only be placed where the pair of blocks directly beneath it
licenses that specific color. The licenses are given in `allowed`, an
array of three-character strings: for a string `"xyz"`, a block of color
`z` may be placed on top of a left-block `x` and right-block `y` —
order matters, so `"xyz"` says nothing about what may sit on a left
block `y` and right block `x`. A pair of adjacent blocks with no
matching entry in `allowed` simply cannot support anything, which blocks
that row (and every row above it) from being completed.

Starting from `bottom`, determine whether it is possible to keep
building rows, each one fully licensed by `allowed`, until a single
block crowns the pyramid. Return `true` if some sequence of choices
reaches that single-block apex, and `false` if every sequence gets stuck
first.

### Example 1

![diagram](figures/756-1.svg)

```text
Input: bottom = "BCD", allowed = ["BCC","CDE","CEA","FFF"]
Output: true
Explanation: From the bottom row "BCD" we can build "CE" on the next level
and then "A" on top. The three triangular patterns in the pyramid are
"BCC", "CDE", and "CEA" — all of them allowed.
```

### Example 2

![diagram](figures/756-2.svg)

```text
Input: bottom = "AAAA", allowed = ["AAB","AAC","BCD","BBE","DEF"]
Output: false
Explanation: The row above "AAAA" can be built in several ways, but every
choice eventually gets stuck before a single top block can be placed.
```

### Constraints

- `2 <= bottom.length <= 6`
- `0 <= allowed.length <= 216`
- `allowed[i].length == 3`
- Every letter in `bottom` and in `allowed[i]` comes from the set
  `{'A', 'B', 'C', 'D', 'E', 'F'}`.
- All the strings in `allowed` are distinct.
