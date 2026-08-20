# Rank of a Permutation

## Description

An array `perm` of length `n` contains each of the values `1` through
`n` exactly once.

List every arrangement of `1..n` in dictionary order and give `perm` its
zero-based position in that list.

The position can be enormous, so report it modulo `10⁹ + 7`.

### Example 1

```text
Input: perm = [1,4,2,3]
Output: 4
Explanation: Every arrangement starting with 1 comes first. Within that
block, the two continuing 1,2 (namely 1,2,3,4 and 1,2,4,3) and the two
continuing 1,3 (namely 1,3,2,4 and 1,3,4,2) all precede the ones
continuing 1,4 — four arrangements ahead, so the position is 4.
```

### Example 2

```text
Input: perm = [4,2,1,3]
Output: 20
Explanation: Opening with 4 puts the three blocks that start with 1, 2,
or 3 ahead of it — eighteen arrangements in all. Within the 4-block, the
leading 2 is beaten only by 1, which contributes the two arrangements
4,1,..., so twenty arrangements come earlier and the position is 20.
```

### Example 3

```text
Input: perm = [4,3,2,1]
Output: 23
Explanation: The fully reversed arrangement is the last of the 24, so it
sits at position 23.
```

### Constraints

- `1 <= n == perm.length <= 10⁵`
- `perm` contains each of `1, 2, ..., n` exactly once.

## Hints

### Hint 1

Arrangements group by their first entry: if `perm` opens with the value
`x`, then every arrangement opening with one of the `x - 1` smaller
values — `(x - 1) * (n - 1)!` of them — is listed earlier.

### Hint 2

That argument repeats position by position, except the pool of remaining
values shrinks as you walk into the array.

### Hint 3

At each step what matters is how many *not-yet-spent* values are smaller
than the one being placed; a structure that counts a prefix of values and
supports removals prices each position in logarithmic time.
