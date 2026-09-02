# Rearrangeable Strings

## Description

Call a string good when every character is a lowercase English letter
and the characters can be shuffled into an order that contains "leet"
as a contiguous block. Only the multiset of characters matters. The
string "tele" is good, since its letters reorder into "leet", while
"lest" is not — it carries a single e.

Given `n`, return how many strings of length `n` are good. The count
grows quickly, so report it modulo 10⁹ + 7.

### Example 1

```text
Input: n = 3
Output: 0
Explanation: Reaching "leet" requires four specific letters — an l, a
t and two e's — so no string of length 3 can qualify.
```

### Example 2

```text
Input: n = 5
Output: 1460
Explanation: The 26⁵ lowercase strings of length 5, less those missing
an l, a t, or a second e, leave exactly 1460 good strings.
```

### Example 3

```text
Input: n = 25
Output: 935610434
Explanation: The exact number of good strings of length 25 is
21166190231820064238093014503081580, and that number modulo 10⁹ + 7 is
935610434.
```

### Constraints

- `1 <= n <= 10⁵`

## Hints

### Hint 1

A string can be rearranged to contain "leet" precisely when it holds at
least one l, one t, and two e's — nothing else about it matters.

### Hint 2

Count the complement instead: take all 26ⁿ strings, subtract the ones
missing an l, missing a t, or carrying at most one e, and repair the
overlapping deficits with inclusion-exclusion.

### Hint 3

A small dynamic program that tracks which of the required letters have
been placed so far reaches the same count position by position.
