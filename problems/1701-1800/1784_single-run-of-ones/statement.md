# A Single Run of Ones

## Description

You are given a binary string `s` whose first character is `'1'` (so it has
no leading zeros). Return `true` if every `'1'` in `s` sits inside one
contiguous block — that is, the ones form a single run — and `false`
otherwise.

### Example 1

```text
Input: s = "110100"
Output: false
Explanation: The ones appear in two separate blocks, "11" and "1".
```

### Example 2

```text
Input: s = "11100"
Output: true
Explanation: All three ones stand together in the single block "111".
```

### Example 3

```text
Input: s = "1000101"
Output: false
Explanation: A '1' appears after a gap of zeros, so the ones are split
into more than one block.
```

### Constraints

- `1 <= s.length <= 100`
- `s[i]` is either `'0'` or `'1'`.
- `s[0]` is `'1'`.

## Hints

### Hint 1

Since `s` begins with `'1'`, a first block of ones is guaranteed to exist —
the real question is whether any `'1'` shows up again after a `'0'`.

### Hint 2

One scan is enough: each time a `'1'` immediately follows a `'0'`, a new
block has begun, and a second beginning means the answer is `false`.
