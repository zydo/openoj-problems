# Repeated Ten-Letter Windows

## Description

You are given a string `s` made only of the four letters `A`, `C`, `G`, and
`T`.

Slide a window of exactly 10 letters across it. Some of those windows will
occur more than once — the same ten letters appearing at two or more starting
positions, possibly overlapping. Return every window that does, as a list.

The order of the returned list does not matter.

### Example 1

```text
Input: s = "GGGGGTTTTTGGGGGTTTTTGCGCGCATAT"
Output: ["GGGGGTTTTT", "GGGGTTTTTG"]
Explanation: GGGGGTTTTT appears whole at two positions, and the overlap where
the second copy runs into the letters after it produces GGGGTTTTTG twice as
well.
```

### Example 2

```text
Input: s = "CCCCCCCCCCCCCC"
Output: ["CCCCCCCCCC"]
Explanation: Fourteen identical letters contain five windows, and they are all
the same one — collected once, not four times.
```

### Example 3

```text
Input: s = "ACGTTGCAAC"
Output: []
Explanation: The string is exactly ten letters long, so there is a single
window and nothing for it to repeat with.
```

### Constraints

- `1 <= s.length <= 10⁵`
- every character of `s` is `A`, `C`, `G`, or `T`

## Hints

### Hint 1

Each window is fixed at ten letters, so there is one window per starting
position, and `n - 9` of them in total. The question at each position is
plain: have I read these exact ten letters before?

### Hint 2

A set answers that in constant time per window — but the same window may be
re-discovered at a third and fourth position, so the answers need their own
set rather than a list.

### Hint 3

Hashing a ten-letter slice is already constant work, but for very long inputs
you can go further: with four letters in play, two bits per letter encode a
whole window as one small integer, and moving the window one position right
becomes a shift and two bit operations.
