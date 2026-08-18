# All Balanced Bracket Strings

## Description

You are given an integer `n`. Produce every string of length `2n` that uses `n`
opening brackets `'('` and `n` closing brackets `')'` and is balanced — that is,
no prefix of it contains more closers than openers.

List the strings in lexicographic order, treating `'('` as the smaller
character.

### Example 1

```text
Input: n = 2
Output: ["(())","()()"]
Explanation: One pair inside the other, or the two pairs side by side. No
other arrangement of two openers and two closers is balanced.
```

### Example 2

```text
Input: n = 4
Output: ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())",
         "(()())()","(())(())","(())()()","()((()))","()(()())","()(())()",
         "()()(())","()()()()"]
Explanation: Fourteen arrangements, ordered so that every string beginning
with a deeper run of openers comes first.
```

### Constraints

- `n` is an integer with `1 <= n <= 12`.

## Hints

### Hint 1

Rather than filtering all `2^(2n)` strings, grow one character at a time and
never write a character that already ruins the string.

### Hint 2

Two counters — openers written so far, closers written so far — are enough to
decide what may come next.

### Hint 3

An opener is legal while fewer than `n` of them have been written. A closer is
legal while the closers still trail the openers, because that is exactly the
condition that keeps every prefix balanced.

### Hint 4

At length `2n` the string is finished and needs no checking. Trying the opener
before the closer at every step makes the finished strings arrive already in
lexicographic order.
