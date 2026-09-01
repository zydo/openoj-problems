# Word Built by abc Insertions

## Description

Call a string over the letters `'a'`, `'b'`, `'c'` buildable when it can
be produced by the following process: start from the empty string and
repeat, as many times as you like, the single operation of inserting the
block `"abc"` at an arbitrary position. One operation rewrites the
current string `t` as `tleft + "abc" + tright`, where `t == tleft +
tright` and either side of the split may be empty.

Given a string `s`, report whether `s` is buildable.

### Example 1

```text
Input: s = "ababcc"
Output: true
Explanation: Grow "" into "abc", then insert a second "abc" between the
leading "ab" and the trailing "c" — the result is exactly "ababcc".
```

### Example 2

```text
Input: s = "aabcabcbc"
Output: true
Explanation: "" grows into "abc"; inserting "abc" right after the first
"a" yields "aabcbc", and inserting once more between "aabc" and "bc"
yields "aabcabcbc".
```

### Example 3

```text
Input: s = "aabbcc"
Output: false
Explanation: Every insertion deposits the letters as one contiguous
"abc" block, and no sequence of insertions ever reproduces the nested
pattern in "aabbcc".
```

### Example 4

```text
Input: s = "cababc"
Output: false
Explanation: A buildable string necessarily begins with the first letter
of an "abc" block, and "cababc" starts with "c", so it can never be
reached.
```

### Constraints

- `1 <= s.length <= 2 * 10^4`
- every character of `s` is `'a'`, `'b'`, or `'c'`.
