# Count Constrained Vowel Strings

## Description

A string is built from the vowel alphabet `a`, `e`, `i`, `o`, `u`, but not
every pair of vowels may sit next to each other. The allowed successors are:

| previous vowel | may be followed by |
| -------------- | ------------------ |
| `a`            | `e`                |
| `e`            | `a`, `i`           |
| `i`            | `a`, `e`, `o`, `u` |
| `o`            | `i`, `u`           |
| `u`            | `a`                |

Given the length `n`, count the strings of exactly `n` vowels in which every
adjacent pair is allowed. Two strings are different whenever they differ in
any position.

Because the count grows quickly, report it modulo `10^9 + 7`.

### Example 1

```text
Input: n = 2
Output: 10
Explanation: A first vowel leaves 1, 2, 4, 2, or 1 continuations
respectively for a, e, i, o, u, and 1 + 2 + 4 + 2 + 1 = 10.
```

### Example 2

```text
Input: n = 8
Output: 474
Explanation: Of the 5^8 = 390625 unrestricted vowel strings of length 8,
exactly 474 use allowed pairs throughout.
```

### Example 3

```text
Input: n = 31
Output: 457014530
Explanation: The raw count passes 10^9 + 7 between lengths 30 and 31, so the
answer is reported after reduction modulo 10^9 + 7.
```

### Constraints

- `1 <= n <= 2 * 10^4`

## Hints

### Hint 1

When you append a vowel, the only thing that can make the result invalid is
the letter it lands after. A prefix's entire history therefore reduces to one
fact: which vowel it ends with.

### Hint 2

Keep five running counts, one per vowel — for each `v`, the number of valid
strings of the current length ending in `v`. All five start at 1.

### Hint 3

One transition turns length-L counts into length-(L+1) counts: the new count
for `v` is the sum of the old counts of every vowel whose allowed-successor
list contains `v`. All five updates read the old values, so apply them
together, not one at a time.

### Hint 4

Reduce each new count modulo `10^9 + 7` as it is formed, take `n - 1`
transitions, and sum the five counters. For `n = 1` no transition runs and
the sum is the initial 5.
