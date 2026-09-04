# Longest Repeated Segment

## Description

A _segment_ of `s` is a block of consecutive characters cut out of it. Call a
segment **repeated** when `s` holds it at two or more different starting
positions. Those positions are unrestricted: two occurrences of the same
segment are free to sit on top of each other.

Return a repeated segment of the greatest length available. When nothing at all
repeats, return the empty string; when several segments tie for the greatest
length, any one of them counts.

### Example 1

```text
Input: s = "tartar"
Output: "tar"
Explanation: "tar" fills positions 0-2 and again positions 3-5. Nothing four
characters long shows up twice.
```

### Example 2

```text
Input: s = "lululu"
Output: "lulu"
Explanation: "lulu" begins at position 0 and again at position 2, so its two
appearances share the middle "lu" between them.
```

### Example 3

```text
Input: s = "crypt"
Output: ""
Explanation: The five characters are all different, so not even a one-character
segment appears twice.
```

### Constraints

- `s` is at least 2 and at most `3 * 10^4` characters long
- every character of `s` is a lowercase English letter

## Hints

### Hint 1

Suppose some segment of length `L` repeats. Drop its final character from both
appearances and you have a repeating segment of length `L - 1`. So the lengths
that work run from 1 up to the answer with no gaps — a boundary you can locate
by binary search over the length.

### Hint 2

That leaves a single yes-or-no question to answer repeatedly: fixing a width
`L`, do two windows of that width anywhere in `s` hold the same characters?
Comparing every pair of windows outright is too slow, so windows need a
signature that is cheap to build and cheap to compare.

### Hint 3

A polynomial hash over the window's characters is such a signature, and it
updates in constant time as the window advances by one — subtract the departing
character's contribution, multiply, add the arriving one. Keep the signatures
in a map to the positions that produced them, and settle a hit by checking the
characters themselves (or by hashing under a second modulus), so a collision can
never turn into a wrong answer.
