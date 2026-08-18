# Palindrome Partitions

## Description

You are given a string `s`. Cut it into consecutive **pieces** so that every
piece reads the same in both directions, and list every way of doing that.

Each partition is returned as the list of its pieces in order.

The output must be deterministic, so use this order: among partitions of any
remaining suffix, those whose first piece is shorter come first. Equivalently,
a search that tries the first piece at each possible length, shortest first,
and recurses on what is left, emits the partitions in the required order.

### Example 1

```text
Input: s = "sees"
Output: [["s","e","e","s"],["s","ee","s"],["sees"]]
Explanation: ee is the only interior piece that reads both ways, and sees
itself does too. Cutting everywhere, keeping ee, or keeping the whole string
are the three options.
```

### Example 2

```text
Input: s = "toto"
Output: [["t","o","t","o"],["t","oto"],["tot","o"]]
Explanation: oto and tot each read both ways, and they overlap, so they give
different partitions rather than one.
```

### Example 3

```text
Input: s = "abcd"
Output: [["a","b","c","d"]]
Explanation: No piece of two or more letters reads both ways, so every letter
must stand alone.
```

### Constraints

- `s` holds between `1` and `16` lowercase English letters.

## Hints

### Hint 1

Work from the left. The first piece is some prefix of `s`; for each prefix
that reads both ways, the rest of the problem is the same question about the
remaining suffix.

### Hint 2

A single letter always qualifies, so the all-single-letters partition exists
for every input and the search can never get stuck.

### Hint 3

The same "does this piece read both ways" question is asked many times over.
Answer them all once, up front, for every interval of `s`.
