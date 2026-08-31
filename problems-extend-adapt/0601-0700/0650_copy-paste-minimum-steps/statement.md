# Copy-Paste Minimum Steps

## Description

A text pad begins with exactly one `'A'` on its screen and an empty
clipboard. At each step, you may perform one of these operations:

- **Copy All**: copy the entire current screen into the clipboard. You
  may not copy only part of the screen.
- **Paste**: append the clipboard's current contents to the screen.

Given an integer `n`, find the fewest operations needed to make the
screen contain exactly `n` copies of `'A'`.

### Example 1

```text
Input: n = 12
Output: 7
Explanation: Copy, paste, copy, paste, paste, copy, paste grows the screen
through 1, 2, 4, and finally 12 copies of 'A'.
```

### Example 2

```text
Input: n = 9
Output: 6
Explanation: Copy, paste, paste makes 3 copies; copying those 3 and pasting
twice reaches 9 copies in 6 operations total.
```

### Constraints

- `1 <= n <= 1000`

## Hints

### Hint 1

A copy followed by one or more pastes multiplies the current screen size.
Which factorization of `n` makes the total number of those operations smallest?
