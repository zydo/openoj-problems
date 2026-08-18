# Largest Concatenation

## Description

You are given a list of non-negative integers `nums`. Write out every one of
them, in some order of your choosing and with nothing between them, so that
the result reads as one long number. Return the ordering that makes this
number as large as possible, as a string.

The result can far exceed any integer type, which is why it is returned as a
string.

### Example 1

```text
Input: nums = [4,45,7,71]
Output: "771454"
Explanation: 7 goes before 71 because 771 beats 717 as a prefix, and 45 goes
before 4 because 454 beats 445. Plain numeric ordering would not tell you
either of those things.
```

### Example 2

```text
Input: nums = [23,2,234]
Output: "234232"
Explanation: The three values are prefixes of one another, and the longest
leads: 234, then 23, then 2.
```

### Example 3

```text
Input: nums = [0,0,0]
Output: "0"
Explanation: Concatenating in any order gives "000", which as a number is
just 0, so the answer is the single digit.
```

### Constraints

- `nums` holds between `1` and `100` entries
- each entry is between `0` and `10⁹`

## Hints

### Hint 1

Two entries `a` and `b` can be ordered without looking at anything else: try
writing them both ways and keep the better one. What exactly should you be
comparing — the two numbers, or the two writings?

### Hint 2

That pairwise test, "write `a` first exactly when the string `a` then `b`
beats `b` then `a`", turns out to be a genuine ordering — it is consistent
across three entries at a time — so sorting by it is meaningful.

### Hint 3

A sorted result cannot be improved by any adjacent swap, and any arrangement
differs from the sorted one by a sequence of adjacent swaps that each lose
ground or break even. One special case: if the winning string starts with `0`,
every entry was `0`, and the answer is `"0"` alone.
