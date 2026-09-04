# Longest Letter Block Seen Thrice I

## Description

Given a lowercase string `s`, call any of its substrings a _letter
block_ when that substring is made up of one single repeated character
— `"hh"` and `"q"` qualify, `"hq"` does not.

Find the length of the longest letter block that shows up at least three
times inside `s`. Occurrences may overlap each other. If no letter block
appears three times, return `-1`.

### Example 1

```text
Input: s = "bbbbb"
Output: 3
Explanation: The block "bbb" occurs three times, starting at indices 0,
1, and 2. "bbbb" only occurs twice, so 3 is the best.
```

### Example 2

```text
Input: s = "xyzxyz"
Output: -1
Explanation: No single character occurs three times, so no letter block
can.
```

### Example 3

```text
Input: s = "abaaa"
Output: 1
Explanation: The block "a" occurs four times. Longer blocks fall short:
"aa" occurs only twice (both inside the trailing "aaa"), so the answer
is 1.
```

### Constraints

- `3 <= s.length <= 50`
- `s` consists of only lowercase English letters.

## Hints

### Hint 1

The length limit is tiny — there is room to be direct.

### Hint 2

Enumerate every substring made of one repeated character and count how
often each one appears.
