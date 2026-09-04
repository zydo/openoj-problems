# Rebuild a Scattered String

## Description

You are given a string `s` and an integer array `indices` of the same
length. Every character of `s` is told where to go: the character
currently sitting at position `i` belongs at position `indices[i]` of the
finished string.

Assemble and return the finished string.

### Example 1

![diagram](figures/1528-1.svg)

```text
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: 'c' moves from position 0 to position 4, 'o' from 1 to 5,
'd' from 2 to 6, 'e' from 3 to 7, 'l' from 4 to 0, 'e' from 5 to 2,
'e' from 6 to 1, and 't' from 7 to 3 — so the scattered letters spell
"leetcode".
```

### Example 2

```text
Input: s = "art", indices = [1,2,0]
Output: "tar"
Explanation: 'a' is sent to position 1, 'r' to position 2, and 't' to
position 0, which reads "tar".
```

### Example 3

```text
Input: s = "pqrstu", indices = [5,0,1,2,3,4]
Output: "qrstup"
Explanation: The leading character 'p' is shifted to the end and every
other character slides one slot forward.
```

### Constraints

- `s.length == indices.length == n`
- `1 <= n <= 100`
- `s` consists of only lowercase English letters.
- `0 <= indices[i] < n`
- All values of `indices` are unique.

## Hints

### Hint 1

Set up an empty result buffer of length `n` and treat `indices` as a set
of instructions telling each character where to land.

### Hint 2

Because `indices` is a permutation of `0 .. n - 1`, writing
`result[indices[i]] = s[i]` for every `i` fills every slot exactly once.
