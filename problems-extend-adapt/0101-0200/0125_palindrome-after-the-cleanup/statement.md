# Palindrome After The Cleanup

## Description

A phrase survives a cleanup that lowercases every letter and throws away
anything that is not a letter or a digit. The tidied phrase is a
**palindrome** when it reads identically forward and backward.

You are given a string `s`. Run the cleanup, then report whether the
surviving characters form a palindrome — `true` when they do and `false`
when they do not. Whatever remains after the cleanup decides the answer:
if nothing survives at all, the empty phrase still reads the same in both
directions, so the answer is `true`.

### Example 1

```text
Input: s = "No 'x' in Nixon"
Output: true
Explanation: The cleanup leaves "noxinnixon", which mirrors itself.
```

### Example 2

```text
Input: s = "Hello, World!"
Output: false
Explanation: The cleanup leaves "helloworld", whose two ends disagree.
```

### Example 3

```text
Input: s = "1,2:2 1"
Output: true
Explanation: Digits take part too; the cleanup leaves "1221".
```

### Example 4

```text
Input: s = "...???"
Output: true
Explanation: Punctuation only — nothing survives the cleanup, and an
empty phrase is trivially a palindrome.
```

### Constraints

- `1 <= s.length <= 2 * 10⁵`
- `s` consists only of printable ASCII characters.
