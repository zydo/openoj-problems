# Ones Streak Beats Zeros Streak

## Description

A streak is a stretch of consecutive equal characters inside a binary
string. For each of the two digits, its streak length is the length of
the longest such stretch it forms anywhere in the string; a digit that
never appears has a streak length of 0.

Given a binary string `s`, return `true` exactly when the longest `1`
streak is strictly longer than the longest `0` streak, and `false`
otherwise. Equal streak lengths count as a `false`.

### Example 1

```text
Input: s = "10110"
Output: true
Explanation: The longest streak of 1s runs for 2 ("11" at the end) and
the longest streak of 0s runs for 1, so the 1s win.
```

### Example 2

```text
Input: s = "0011"
Output: false
Explanation: Both digits top out at a streak of 2, and the comparison
must be strict.
```

### Example 3

```text
Input: s = "100111"
Output: true
Explanation: The 1s reach a streak of 3 against a 0-streak of 2.
```

### Constraints

- `1 <= s.length <= 100`
- `s[i]` is either `'0'` or `'1'`.

## Hints

### Hint 1

You never need to look at every possible stretch — a stretch longer than
another always contains it.

### Hint 2

Sweep the string once, counting how long the current run of equal
characters is; whenever the character changes, fold the finished run
into that digit's best, and remember to fold in the final run when the
sweep ends.
