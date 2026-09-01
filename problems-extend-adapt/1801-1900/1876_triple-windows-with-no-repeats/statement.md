# Triple Windows With No Repeats

## Description

Scan a string `s` three characters at a time. Every stretch of three
consecutive characters is a window, and a window is called clean when its
three letters are all different from one another.

Count how many clean windows `s` contains. Windows that spell the same
three letters at different positions count separately — every occurrence
adds one.

### Example 1

```text
Input: s = "xyxzxy"
Output: 2
Explanation: The four windows are "xyx", "yxz", "xzx", and "zxy". Only
"yxz" and "zxy" avoid repeating a letter.
```

### Example 2

```text
Input: s = "aaaa"
Output: 0
Explanation: Both windows, "aaa" and "aaa", repeat the same letter, so
nothing is counted.
```

### Example 3

```text
Input: s = "abcab"
Output: 3
Explanation: The windows are "abc", "bca", and "cab", and each one has
three distinct letters.
```

### Constraints

- `1 <= s.length <= 100`
- `s` consists of lowercase English letters.

### Hint 1

A window of three letters is clean exactly when no two of its positions
hold the same character — three comparisons decide it.
