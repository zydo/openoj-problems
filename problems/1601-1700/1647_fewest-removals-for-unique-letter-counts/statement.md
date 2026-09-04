# Fewest Removals For Unique Letter Counts

## Description

Call a string **tidy** when no two distinct letters occurring in it
appear the same number of times.

You may remove characters from `s` one at a time. Return the smallest
number of removals after which `s` is tidy.

A letter's count is simply how many copies of it the string holds — in
`"aab"`, the letter `'a'` has count 2 and `'b'` has count 1. Letters
removed completely (count 0) no longer matter.

### Example 1

```text
Input: s = "abbcccdddd"
Output: 0
Explanation: The counts 1, 2, 3, 4 are already all different, so the
string is tidy as-is.
```

### Example 2

```text
Input: s = "abcabc"
Output: 3
Explanation: Each of 'a', 'b', 'c' appears twice. Discarding one 'b'
and both 'c's leaves "aab", whose counts 2 and 1 are distinct — three
removals in total.
```

### Example 3

```text
Input: s = "aabbccdd"
Output: 5
Explanation: Four letters each appear twice, but at most one letter may
keep count 2 and at most one may sit at count 1. Pushing 'b' down to 1,
and 'c' and 'd' away entirely, costs 1 + 2 + 2 = 5 removals and ends at
the tidy string "aab".
```

### Constraints

- `1 <= s.length <= 10^5`
- `s` consists only of lowercase English letters.

## Hints

### Hint 1

Removing is the only operation, so letters that share a count must be
pushed downward — all but one of each tied group has to move.

### Hint 2

Line the letters up from the most frequent to the least.

### Hint 3

Sweep through that line, dropping each letter's count one step at a
time until it reaches a count nobody holds yet.
