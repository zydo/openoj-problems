# Counting Repeat-Free Windows

## Description

Slide a window covering exactly `k` consecutive characters across a
string `s`. Call a window _clean_ when no letter appears twice inside
it. Return how many of the length-`k` windows are clean.

### Example 1

```text
Input: s = "plantszoo", k = 4
Output: 5
Explanation: plan, lant, ants, tsz, and szo each hold four different
letters. The final window, zoo, repeats the o, so it does not count.
```

### Example 2

```text
Input: s = "abcabd", k = 3
Output: 4
Explanation: Every window of length 3 — abc, bca, cab, and abd —
happens to consist of distinct letters.
```

### Example 3

```text
Input: s = "xy", k = 3
Output: 0
Explanation: k may exceed the string's length, in which case no window
of that size exists at all.
```

### Constraints

- `1 <= s.length <= 10⁴`
- `s` consists of lowercase English letters.
- `1 <= k <= 10⁴`

## Hints

### Hint 1

Neighboring windows share all but one character, so checking each
window from scratch throws away nearly all the work. What bookkeeping
would let each window be derived from its left neighbor in constant
time?

### Hint 2

Maintain a frequency table for the letters currently inside the window
alongside a tally of how many distinct letters that is. Admit the
entering letter, retire the one falling off the left edge, and the
window qualifies exactly when the distinct tally reaches `k`.
