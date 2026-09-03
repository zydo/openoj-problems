# A Solo Run Of Length K

## Description

You are given a string `s` of lowercase letters and an integer `k`. Decide
whether `s` contains a window of exactly `k` consecutive characters such
that:

- every character inside the window is the same letter;
- the character immediately before the window, if there is one, is a
  different letter;
- the character immediately after the window, if there is one, is also a
  different letter.

In other words, the window must be a whole run of one repeated letter —
neither trimmed from a longer run nor touching the same letter on either
side. Return `true` if such a window exists, and `false` otherwise.

### Example 1

```text
Input: s = "zzaqzz", k = 2
Output: true
Explanation: The window s[0..1] == "zz" spans exactly 2 characters, all
equal to 'z'. There is nothing before it, and the character after it is
'a', a different letter.
```

### Example 2

```text
Input: s = "aabbbccdd", k = 3
Output: true
Explanation: The run "bbb" has exactly 3 characters, with 'a' before it
and 'c' after it — both different from 'b' — so the window qualifies.
```

### Example 3

```text
Input: s = "aaab", k = 2
Output: false
Explanation: The only window of two 'a's sits inside the longer run
"aaa", so the character before it is another 'a' — the window is not a
whole run. No run has length exactly 2, so the answer is false.
```

### Constraints

- `1 <= k <= s.length <= 100`
- `s` consists of lowercase English letters only.

## Hints

### Hint 1

A qualifying window cannot start in the middle of a run of equal letters:
the character before it would be the same letter. The same argument pins
its end.

### Hint 2

So the question is just: does any maximal run of one repeated letter have
length exactly `k`? Walk the runs once.
