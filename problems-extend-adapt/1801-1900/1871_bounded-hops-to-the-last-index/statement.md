# Bounded Hops to the Last Index

## Description

You stand on index `0` of a 0-indexed binary string `s`, and `s[0]` is
always `'0'`. One hop takes you from your current index `i` to some
index `j` provided both of these hold:

- `i + minJump <= j <= i + maxJump` (and `j` never passes the final
  index of `s`), and
- `s[j]` is `'0'`.

Given `s` together with the hop bounds `minJump` and `maxJump`, return
`true` if some sequence of hops can land on the last index
`s.length - 1`, and `false` otherwise.

### Example 1

```text
Input: s = "0101010", minJump = 2, maxJump = 3
Output: true
Explanation: Hop from index 0 to index 2, then to index 4, then to
index 6, the last index.
```

### Example 2

```text
Input: s = "011000", minJump = 2, maxJump = 2
Output: false
Explanation: The only landing spot within reach of index 0 is index 2,
which holds a '1', so no hop is possible at all.
```

### Example 3

```text
Input: s = "0010100", minJump = 3, maxJump = 3
Output: true
Explanation: Hop 0 -> 3 -> 6.
```

### Constraints

- `2 <= s.length <= 10^5`
- `s[i]` is either `'0'` or `'1'`.
- `s[0] == '0'`
- `1 <= minJump <= maxJump < s.length`

## Hints

### Hint 1

Every index `i` you can stand on opens exactly one window of landing
spots: `[i + minJump, i + maxJump]`.

### Hint 2

"Does some standing point cover position `j`?" is a counting question
over a range — a running prefix sum over the reachability marks, updated
in the same left-to-right sweep, answers each position in constant time.
