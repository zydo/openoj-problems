# Smallest Output Through a Stack

## Description

You are given a string `s`. Beside it sit an empty stack and a sheet that
starts out blank. While `s` and the stack are not both empty, you may repeat
either move:

- move the first letter of `s` onto the top of the stack, or
- pop the stack's top letter and append it to the sheet.

Each letter reaches the sheet exactly once. Return the lexicographically
smallest string the sheet can show once every letter has moved through.

### Example 1

```text
Input: s = "bad"
Output: "abd"
Explanation:
Move b onto the stack. The a arrives next and lands on top of it, because an
a is still unread and the b must wait. When d arrives, nothing smaller than
b or a remains unread, so both pop onto the sheet — a first, then b — and the
d, now alone, pops last. The sheet reads "abd".
```

### Example 2

```text
Input: s = "cqqa"
Output: "aqqc"
Explanation:
The c and both q's must be held: at every point before the final a, some
letter smaller than the stack top is still unread. The a lands on top of
everything, and once the input is exhausted the stack drains a, q, q, c onto
the sheet in that order.
```

### Example 3

```text
Input: s = "rrr"
Output: "rrr"
Explanation:
All letters are equal, so every legal schedule writes the same string.
```

### Constraints

- `1 <= s.length <= 10^5`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

If `s` contains an `a`, nothing needs to reach the sheet before the a's do.

### Hint 2

Whatever sits in the string ahead of the final `a` is destined to leave the
stack in reverse order — decide what may be written along the way.

### Hint 3

With the a's gone, the same argument repeats for `b`, then `c`, and so on up
the alphabet.
