# A Piece Each For The Ones

## Description

You are given a binary array `nums`.

Cut it into contiguous pieces: every element belongs to exactly one piece,
the pieces keep their left-to-right order, and their concatenation rebuilds
`nums`. The cut is acceptable when every piece contains exactly one element
equal to `1`.

Return the number of acceptable ways to cut `nums`, modulo `10⁹ + 7`.

### Example 1

```text
Input: nums = [1,0,1]
Output: 2
Explanation: Both cuts work:
- [1] [0,1]
- [1,0] [1]
Each piece holds exactly one 1, so the answer is 2.
```

### Example 2

```text
Input: nums = [1,0,0,1,0,1]
Output: 6
Explanation: The three 1s sit at indices 0, 3, and 5, so the split needs
exactly three pieces with one cut between each neighboring pair of 1s. Two
zeros separate the first pair, giving 3 possible spots for that cut; one
zero separates the second pair, giving 2 spots. The choices are
independent, so 3 * 2 = 6 cuts work in total.
```

### Example 3

```text
Input: nums = [0,0,1,0]
Output: 1
Explanation: The lone 1 must get a piece of its own, and any extra cut
would strand a 1-free piece. The only acceptable split is the whole array
left as one piece.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 1`

## Hints

### Hint 1

If the array holds no `1` at all, no piece can ever hold one, and the
answer is `0`.

### Hint 2

An array with `k` ones must fall into exactly `k` pieces, the `j`-th piece
carrying the `j`-th one — so exactly one cut has to land between each pair
of neighboring ones.

### Hint 3

Between two neighboring ones with `g` zeros in between, that cut may sit in
any of `g + 1` spots, and choices in different gaps never interfere —
multiply them together.
