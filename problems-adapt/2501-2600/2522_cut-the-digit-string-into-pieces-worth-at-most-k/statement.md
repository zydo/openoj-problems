# Cut the Digit String Into Pieces Worth At Most K

## Description

You are given a string `s` made up of the digits '1' through '9', and an
integer `k`. Slice `s` into consecutive pieces so that every digit lands
in exactly one piece, and call the slicing acceptable when each piece,
read as an ordinary integer, is worth at most `k`.

Return the fewest pieces any acceptable slicing of `s` can have, or
`-1` if no acceptable slicing exists.

For clarity:

- A piece's worth is the integer it spells — `"123"` is worth 123 and
  `"1"` is worth 1.
- Pieces are runs of adjacent characters, kept in their original order.

### Example 1

```text
Input: s = "343", k = 43
Output: 2
Explanation: Slicing into "34" and "3" works: 34 and 3 are both worth
at most 43. One piece cannot work because 343 itself is worth more
than 43.
```

### Example 2

```text
Input: s = "98765", k = 1000
Output: 2
Explanation: The slicing "987" | "65" keeps both pieces within 1000,
and no slicing manages with a single piece.
```

### Example 3

```text
Input: s = "19", k = 8
Output: -1
Explanation: The digit 9 is already worth more than 8 on its own, and
no piece holding that 9 can be worth less than it, so nothing is
acceptable.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s[i]` is a digit from `'1'` to `'9'`.
- `1 <= k <= 10⁹`
