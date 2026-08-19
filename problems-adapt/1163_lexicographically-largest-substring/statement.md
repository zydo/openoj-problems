# Lexicographically Largest Substring

## Description

You are given a string `s`. Consider every one of its substrings — every
contiguous block of characters — and compare them in dictionary order:
strings compare character by character, and a string that is a prefix of
another ranks before it.

Return the substring that is greatest in this order.

### Example 1

```text
Input: s = "banana"
Output: "nana"
Explanation: Every substring starting with 'n' beats every substring
starting with a smaller letter, and among the suffixes of "banana" the one
beginning at the second 'n' is the largest.
```

### Example 2

```text
Input: s = "ztzz"
Output: "zz"
Explanation: Three substrings start with 'z'. "zz" beats "ztzz" because at
the second character 'z' is greater than 't', and it also beats the lone
"z" at the end because it continues after matching it.
```

### Example 3

```text
Input: s = "dcd"
Output: "dcd"
Explanation: "dcd" and "d" share their start; the longer one extends it and
therefore ranks greater.
```

### Constraints

- `1 <= s.length <= 4 * 10⁵`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

Suppose the best substring starts at `i` and ends at `j`. Appending the
character at `j + 1` produces a substring that is at least as large — so the
winner is never forced to stop early.

### Hint 2

By that argument the answer is a **suffix** of `s`: the hunt reduces to
finding the starting index of the lexicographically greatest suffix.

### Hint 3

Comparing every pair of suffixes is quadratic, and `4 * 10⁵` characters
forbid it. But two candidate suffixes can be duelled with three integers:
two start positions and the length of the prefix on which they currently
agree.

### Hint 4

Each comparison either grows the shared prefix or eliminates a whole block
of starting positions at once — those sharing the losing prefix — so the
duel finishes after `O(n)` character comparisons.
