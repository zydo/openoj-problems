# Earliest Repeated Letter

## Description

You are given a string `s` made up of lowercase English letters, and at
least one letter in it is guaranteed to occur more than once.

Scan the string and report the first letter that shows up for the second
time. Formally, letter `x` beats letter `y` when the second occurrence of
`x` sits at a smaller index than the second occurrence of `y`; return the
letter that beats every other letter this way. Equivalently, walk `s` from
left to right and stop at the first position holding a letter you have
already passed.

### Example 1

```text
Input: s = "plkwokc"
Output: "k"
Explanation:
The letter 'p' appears on the index 0, 'l' on the index 1, 'k' on the
indexes 2 and 5, 'w' on the index 3, and 'o' on the index 4.
The letter 'k' is the earliest repeated letter, because its second
occurrence, at index 5, comes before the second occurrence of any other
letter.
```

### Example 2

```text
Input: s = "efghef"
Output: "e"
Explanation:
The letter 'e' occupies the indexes 0 and 4, while 'f', 'g' and 'h' each
appear exactly once. The second occurrence of 'e' is therefore the only
second occurrence in the whole string.
```

### Example 3

```text
Input: s = "unroll"
Output: "l"
Explanation:
'u', 'n', 'r' and 'o' all occur a single time, and 'l' fills the last two
positions, so 'l' is the answer.
```

### Constraints

- `2 <= s.length <= 100`
- `s` consists only of lowercase English letters.
- `s` is guaranteed to contain at least one letter that occurs more than
  once.

## Hints

### Hint 1

Walk the string from left to right, remembering every letter you have
already passed.

### Hint 2

The first time you meet a letter that is already in that memory, you have
found the answer — no later position can beat it.
