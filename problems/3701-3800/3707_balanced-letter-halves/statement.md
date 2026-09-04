# Balanced Letter Halves

## Description

A lowercase string `s` is given. Give each letter a weight equal to its
place in the alphabet — `'a'` weighs 1, `'b'` weighs 2, up through `'z'`
weighing 26 — and define the weight of a string as the total weight of its
letters.

The question is whether `s` can be cut into a left piece and a right piece,
both non-empty, whose weights agree. Formally, does some position `i` split
`s` into `s[0..i]` and `s[(i + 1)..(n - 1)]` with equal weights? Return
`true` when such a cut exists and `false` otherwise.

### Example 1

```text
Input: s = "dodo"
Output: true
Explanation: Cutting after the second letter leaves "do" on the left and
"do" on the right. Each weighs 4 + 15 = 19, so the halves agree and the
answer is true.
```

### Example 2

```text
Input: s = "harbor"
Output: false
Explanation: Every possible cut leaves the two sides with different
weights, so the answer is false.
```

### Constraints

- `2 <= s.length <= 100`
- `s` consists of lowercase English letters.

## Hints

### Hint 1

Weigh the whole string once, then try every cut point, comparing the running
left-side weight against the remainder.
