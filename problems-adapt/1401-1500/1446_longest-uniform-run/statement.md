# Longest Uniform Run

## Description

A uniform run is a non-empty substring of `s` in which every character
is the same. Given a string `s`, return the length of its longest
uniform run.

### Example 1

```text
Input: s = "xxyzzzq"
Output: 3
Explanation: "zzz" is the longest block built from a single character;
its length is 3.
```

### Example 2

```text
Input: s = "abbccccddd"
Output: 4
Explanation: The blocks here are "a", "bb", "cccc" and "ddd", and
"cccc" is the longest at length 4.
```

### Example 3

```text
Input: s = "mississippi"
Output: 2
Explanation: The blocks "ss" and "pp" are the longest repeats in the
string, so the answer is 2.
```

### Constraints

- `1 <= s.length <= 500`
- `s` consists of only lowercase English letters.

## Hints

### Hint 1

Walk the string once, tracking the length of the block of equal
characters that ends at the current position: add one when the
character repeats and reset to one when it changes.

### Hint 2

The answer is the largest block length seen anywhere along the walk.
