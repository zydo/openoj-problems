# Fewest Copies To Build The Target

## Description

A subsequence of a string is what remains after deleting any number of
characters — possibly none — while leaving the surviving characters in
their original order. For instance, `"cat"` is a subsequence of
`"cartw"` but `"rac"` is not.

You are given two strings, `source` and `target`. Building `target`
works by taking some number of copies of `source`, carving a
subsequence out of each copy, and concatenating those pieces — in any
order — so the pieces spell `target` exactly. Return the smallest
number of copies that can do this, or `-1` if no collection of pieces
ever can.

### Example 1

```text
Input: source = "ace", target = "tea"
Output: -1
Explanation: The letter 't' never appears in source, so no number of
copies can ever spell a target that needs one.
```

### Example 2

```text
Input: source = "banana", target = "annab"
Output: 2
Explanation: One copy of "banana" yields the subsequence "anna" (its
b sits too late to help there), and a second copy supplies "b".
```

### Example 3

```text
Input: source = "ab", target = "ababab"
Output: 3
Explanation: Each copy of "ab" contributes exactly "ab", so three
copies are needed for the six-character target.
```

### Constraints

- `1 <= source.length, target.length <= 1000`
- `source` and `target` consist of lowercase English letters.

## Hints

### Hint 1

The task is impossible exactly when `target` contains a character that
`source` never contains anywhere.

### Hint 2

Sweep `source` from left to right, consuming every matching character
of `target` as you go; when the sweep ends, start it over on whatever
remains of `target`. Each completed sweep is one copy of `source`.

### Hint 3

Grabbing every available match during a sweep can never hurt: passing
one up only pushes that character — and nothing before it — into a
later sweep.
