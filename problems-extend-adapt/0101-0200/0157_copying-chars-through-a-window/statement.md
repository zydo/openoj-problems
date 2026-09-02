# Copying Chars Through A Window

## Description

A source hands out characters through a fixed-size window: one call
gives you up to the next four characters. Using that window, build a
reader that copies an arbitrary number of characters into a buffer.

The window is exposed by the problem-provided oracle class
`CharSource`:

- `int read4(char[] buf4)` copies up to the next four pending
  characters into `buf4` and returns how many it copied. The count is
  smaller than four only at the end of the content; past the end it is
  `0`. The source never rewinds — every character is handed out once.

Implement the `Solution` class:

- `int read(CharSource charSource, int n, char[] buf)` copies up to
  `n` characters from the source into `buf` and returns how many were
  actually copied. The copy ends early only when the content runs
  out.

The first `total` slots of `buf` hold the copied characters; slots
past `total` may be left untouched.

### Example 1

```text
Input: content = ["h","e","l","l","o"], n = 5
Output: [5, ["h","e","l","l","o"]]
Explanation: two `read4` calls deliver all five characters ("hello"),
so `read` returns 5 and `buf` starts with "hello".
```

### Example 2

```text
Input: content = ["s","u","n","f","l","o","w","e","r"], n = 3
Output: [3, ["s","u","n"]]
Explanation: only `n` = 3 characters are requested, so a single
`read4` call suffices and `buf` starts with "sun".
```

### Example 3

```text
Input: content = ["x"], n = 10
Output: [1, ["x"]]
Explanation: the content runs dry after one character, so `read`
returns 1 even though 10 were requested.
```

### Constraints

- `1 <= content.length <= 1000`
- `1 <= n <= 1000`
- Every character is printable ASCII; there are no tabs or other
  control characters.
- The content is supplied exactly once and is never rewound.

## Hints

### Hint 1

Keep a scratch window of four characters; copy out of the scratch into
the destination, never more than the caller asked for.

### Hint 2

Stop as soon as a window call returns fewer than four characters — the
source is exhausted, and the leftovers from that call may not all be
needed.
