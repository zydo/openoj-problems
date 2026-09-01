# Patterns Embedded in the Word

## Description

You are given a list of strings `patterns` and a string `word`. Count how
many of the patterns occur somewhere inside `word` as a contiguous stretch
of characters — a pattern matches when its characters appear in `word`
back to back, in order, at any position.

A repeated pattern is counted once per occurrence in the list, and a
pattern that matches at several positions still contributes only one.

Return that count.

### Example 1

```text
Input: patterns = ["mo","on","key","don"], word = "money"
Output: 2
Explanation:
"mo" and "on" appear inside "money"; "key" and "don" do not.
```

### Example 2

```text
Input: patterns = ["ll","lo","he","hell","o"], word = "hello"
Output: 5
Explanation:
Every pattern in the list occurs somewhere in "hello", so all five count.
```

### Example 3

```text
Input: patterns = ["cat","dog"], word = "bird"
Output: 0
Explanation:
Neither "cat" nor "dog" appears as a contiguous stretch of "bird".
```

### Constraints

- `1 <= patterns.length <= 100`
- `1 <= patterns[i].length <= 100`
- `1 <= word.length <= 100`
- `patterns[i]` and `word` contain only lowercase English letters.

## Hints

### Hint 1

The patterns are independent — judge each one on its own.

### Hint 2

Your language's built-in containment test (substring search) answers each
judgment directly.
