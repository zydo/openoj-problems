# Stamp Reconstruction

## Description

You receive two lowercase strings, `stamp` and `target`. Begin with a work
string of `target.length` question marks. In one move, choose a starting
index where the whole of `stamp` fits in the work string, then overwrite
that span with the characters of `stamp`.

Return starting indices for moves that construct `target` from that blank
work string, using no more than `10 * target.length` moves. Return an
empty array when no such construction exists.

More than one move sequence can create the same target. This problem uses
a fixed canonical result: work backwards from `target`, repeatedly scan
possible starts from left to right, and erase the first window that has at
least one non-`'?'` character and whose other characters either already
are `'?'` or match the corresponding character in `stamp`. Replace that
window by question marks and record its index. If no window can be erased
before all characters disappear, the answer is empty. Otherwise return the
recorded positions in reverse order.

### Example 1

```text
Input: stamp = "ab", target = "abab"
Output: [2,0]
Explanation: Stamp at index 2 to form "??ab", then stamp at index 0 to
produce "abab".
```

### Example 2

```text
Input: stamp = "aba", target = "ababa"
Output: [2,0]
```

### Example 3

```text
Input: stamp = "ab", target = "aa"
Output: []
```

### Constraints

- `1 <= stamp.length <= target.length <= 1000`
- `stamp` and `target` contain lowercase English letters only.
