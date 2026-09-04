# Where the Ends First Agree

## Description

A string `s` of lowercase English letters is given; call its length `n`.

Scan inward from the two ends: position `i` is paired with position
`n - i - 1`. Report the smallest `i` whose pair carries the same letter on
both sides, i.e. the smallest `i` with `s[i] == s[n - i - 1]`.

When every pair disagrees, return -1.

### Example 1

```text
Input: s = "abxybz"
Output: 1
Explanation:
    The outer pair gives 'a' versus 'z' — a mismatch. The next pair
    inward has 'b' on both sides, so the answer is 1.
```

### Example 2

```text
Input: s = "banjo"
Output: 2
Explanation:
    Both outer pairs disagree, and at i = 2 the two compared positions
    coincide at the middle letter, which trivially matches itself.
```

### Example 3

```text
Input: s = "pqrsxq"
Output: -1
Explanation:
    Every end-pair holds two different letters, so no index qualifies.
```

### Constraints

- `1 <= n == s.length <= 100`
- `s` consists of lowercase English letters.

## Hints

### Hint 1

Walk two pointers inward from the ends, one pair at a time.
