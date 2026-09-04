# Well-Spaced Letter Pairs

## Description

A string `s` made of lowercase English letters is well spaced when every
letter that occurs in it occurs exactly twice, and the two occurrences
of the letter whose place in the alphabet is `i` (with `'a'` at 0,
`'b'` at 1, and so on up to `'z'` at 25) have exactly `distance[i]`
letters sitting between them. Letters that never show up in `s` put no
demand on `distance`.

You are given such a string `s` — every letter it contains appears
exactly twice — and an array `distance` of 26 integers. Return `true`
if `s` is well spaced, and `false` otherwise.

### Example 1

Input: s = "abca",
distance = [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
Output: true
Explanation: The two a's sit at indices 0 and 3, so exactly two letters
fall between them, matching distance[0] = 2; the b and c pairs are
adjacent, matching their zero entries.

### Example 2

Input: s = "abba",
distance = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
Output: false
Explanation: The two a's have two letters between them, but
distance[0] = 1 asks for only one.

### Example 3

Input: s = "fqqf",
distance = [9,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
Output: true
Explanation: The two f's have two letters between them
(distance[5] = 2) and the two q's are adjacent (distance[16] = 0). The
entry distance[0] = 9 is never consulted because 'a' does not appear in
s.

### Constraints

- `2 <= s.length <= 52`
- `s` consists only of lowercase English letters.
- Each letter appears in `s` exactly twice.
- `distance.length == 26`
- `0 <= distance[i] <= 50`

## Hints

### Hint 1

Record where each letter is first seen; the second sighting of a letter
is the moment to judge it.

### Hint 2

Between indices `i` and `j` with `i < j` sit exactly `j - i - 1`
letters.
