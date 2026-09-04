# Asterisks Outside Bar Pairs

## Description

A string `s` mixes lowercase letters with '|' and '*' characters. Its bars
come in pairs: the first and second '|' belong together, the third and
fourth do too, and so on — every bar is part of exactly one pair.

Count the '*' characters of `s` that sit outside every bar pair and return
that count. A star positioned between the two bars of a pair does not
count.

### Example 1

```text
Input: s = "s*t*a*r*s"
Output: 4
Explanation: There are no bars at all, so all four asterisks count.
```

### Example 2

```text
Input: s = "|x|**|"
Output: 2
Explanation: The first bar pair wraps only the letter x. The two stars that
follow lie outside every pair, while the pair at the end is empty.
```

### Example 3

```text
Input: s = "a|*|b**c*"
Output: 3
Explanation: The star between the two bars is skipped; the three stars after
them are all outside a pair.
```

### Example 4

```text
Input: s = "no|*bars*|here*two"
Output: 1
Explanation: The bar pair encloses "*bars*", whose stars are ignored. Only
the final star, in "here*two", is counted.
```

### Constraints

- `1 <= s.length <= 1000`
- `s` consists of lowercase English letters, vertical bars '|', and
  asterisks '*'.
- `s` contains an even number of vertical bars '|'.

## Hints

### Hint 1

Sweep the string once while remembering a single fact: is the scan
currently between the two bars of a pair?

### Hint 2

Each '|' flips that state. Add one to the answer for every '*' seen while
the state says "outside".
