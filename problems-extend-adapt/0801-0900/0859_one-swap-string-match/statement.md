# One-Swap String Match

## Description

Given lowercase strings `s` and `goal`, determine whether exactly one swap of
two distinct positions in `s` can make it equal to `goal`.

A swap exchanges the characters at two different indices. It is allowed to
swap equal characters, so a required swap can leave the string unchanged.
Return `true` when such a swap exists and `false` otherwise.

### Example 1

```text
Input: s = "abcd", goal = "cbad"
Output: true
Explanation: Swapping the characters at indices 0 and 2 changes `"abcd"` to
`"cbad"`.
```

### Example 2

```text
Input: s = "aabc", goal = "aabc"
Output: true
Explanation: The two `a` characters can be exchanged without changing the
string.
```

### Example 3

```text
Input: s = "ab", goal = "cc"
Output: false
Explanation: The strings differ in both positions, but the characters do
not match each other, so one swap cannot make them equal.
```

### Constraints

- `1 <= s.length, goal.length <= 2 * 10⁴`
- `s` and `goal` contain only lowercase English letters.
