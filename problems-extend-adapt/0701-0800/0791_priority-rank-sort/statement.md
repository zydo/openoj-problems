# Priority Rank Sort

## Description

You are given a ranking string `order`, whose characters are all distinct and
whose left-to-right position defines a priority among letters, and a string
`s` to rearrange. Reorder the characters of `s` so that whenever a letter `x`
ranks ahead of a letter `y` in `order`, every occurrence of `x` in the result
comes before every occurrence of `y`.

Any rearrangement obeying that rule is a valid answer for the original
exercise. Because this judge compares output strings exactly, pin one
deterministic form: first emit the characters of `s` that also appear in
`order`, grouped by `order`'s left-to-right sequence with each letter
repeated as many times as it occurs in `s`; then emit the remaining
characters of `s` — the ones `order` says nothing about — in the order they
originally appeared in `s`.

### Example 1

```text
Input: order = "xyz", s = "zyxw"
Output: "xyzw"
Explanation: "x", "y", "z" all appear in order, so they must come out in
that relative sequence. "w" is not mentioned by order, so under the pinned
form it trails after them, unchanged from its position in s.
```

### Example 2

```text
Input: order = "qtr", s = "art"
Output: "tra"
Explanation: Of the letters order ranks, only "t" and "r" appear in s, and
order places "t" before "r", so they come out as "t", "r". "a" is not
mentioned by order, so it trails after them.
```

### Constraints

- `1 <= order.length <= 26`
- `1 <= s.length <= 200`
- `order` and `s` consist of lowercase English letters.
- All the characters of `order` are unique.
