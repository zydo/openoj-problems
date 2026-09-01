# Balancing a Bracket String

## Description

A string over the characters `(` and `)` is balanced when its parentheses
pair up properly: the empty string is balanced, and balanced strings stay
balanced when two of them are concatenated or when one is wrapped in a fresh
matching pair.

You may insert a single parenthesis — either kind — at any position of the
given string `s`, any number of times. Nothing is ever deleted or
rearranged, so the only question is how few insertions are needed.

Return the minimum number of insertions that make `s` balanced.

### Example 1

```text
Input: s = "(()"
Output: 1
Explanation: Appending one ")" closes the parenthesis that is still open,
giving the balanced "(())".
```

### Example 2

```text
Input: s = ")("
Output: 2
Explanation: The leading ")" can never pair with anything to its left and
the trailing "(" nothing to its right; each needs its own inserted partner.
```

### Example 3

```text
Input: s = "()))(("
Output: 4
Explanation: Two early ")" find nothing open and demand two inserted "(",
while the two trailing "(" each still demand a ")" — four insertions in all.
```

### Constraints

- `1 <= s.length <= 1000`
- `s` consists only of the characters `(` and `)`.
