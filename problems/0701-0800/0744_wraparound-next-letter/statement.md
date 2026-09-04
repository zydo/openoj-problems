# Wraparound Next Letter

## Description

You are given a character array `letters`, sorted in non-decreasing order,
and a single character `target`. The array is guaranteed to hold at least
two distinct characters.

Find the smallest character in `letters` that comes strictly after
`target` in alphabetical order, and return it. If no character in the
array is strictly greater than `target` — because `target` is at or past
the array's largest letter — wrap around and return `letters[0]` instead.

### Example 1

```text
Input: letters = ["d","g","k"], target = "a"
Output: "d"
Explanation: "d" is the smallest letter in the array that comes after "a".
```

### Example 2

```text
Input: letters = ["d","g","k"], target = "d"
Output: "g"
Explanation: "d" itself does not count — the answer must come strictly
after "d" — so the next letter, "g", is returned.
```

### Example 3

```text
Input: letters = ["m","m","n"], target = "z"
Output: "m"
Explanation: No letter in the array comes after "z", so the search wraps
around to the first letter, "m".
```

### Constraints

- `2 <= letters.length <= 10⁴`
- `letters[i]` is a lowercase English letter.
- `letters` is sorted in non-decreasing order.
- `letters` contains at least two different characters.
- `target` is a lowercase English letter.

## Hints

### Hint 1

Check each of the 26 letters that could follow `target`, in order, against
whether it appears in `letters`.
