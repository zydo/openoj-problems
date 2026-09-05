# Slicing Into Unseen Segments

## Description

Slice a string `s` from left to right using this greedy rule: start a
segment at the current position, extend it one character at a time, and
stop at the first moment the slice built so far has never been produced
earlier in this process. Emit that slice as a segment, remember it as
produced, and resume at the next unread character of `s`. Apply the rule
until the string is exhausted, then return every segment in the order it
was produced. If the string runs out while the growing slice is still a
repeat of an earlier segment, that unfinished slice is discarded — nothing
is emitted for it.

### Example 1

```text
Input: s = "xyxzyz"
Output: ["x","y","xz","yz"]
Explanation: The opening `x` and `y` are each new, so both are emitted as
single characters. The next `x` repeats one, so its slice grows to `"xz"`,
which is new. Then `z` is new. The final `y` repeats one, so its slice
grows to `"yz"`, which is new.
```

### Example 2

```text
Input: s = "ccaccac"
Output: ["c","ca","cc","a"]
Explanation: The first `c` is new; the second repeats it, so that slice
grows to `"ca"`, which is new. Scanning resumes after it: the next `c`
repeats one, so its slice grows to `"cc"`, which is new. Then the `a` is
new. The final lone `c` repeats one, and the string ends before its slice
becomes new, so nothing further is emitted.
```

### Example 3

```text
Input: s = "zzzzz"
Output: ["z","zz"]
Explanation: `"z"` is new, the next `z` repeats it, so that slice grows to
the new `"zz"`. The remaining two characters rebuild first `"z"` and then
`"zz"`, both already produced, so the string runs out with nothing left to
emit.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists of only lowercase English letters.

## Hints

### Hint 1

The procedure leaves no room for choices, so a direct simulation works —
the only real question is how to answer "has this slice been produced
before?" quickly, and a set of emitted segments does it.

### Hint 2

Keep two indices into `s`: where the current slice starts and where it
currently ends. Whenever the slice passes the newness check, jump the start
index forward to the end index. Watch the edge case — a slice still growing
when the string ends is dropped, not emitted.
