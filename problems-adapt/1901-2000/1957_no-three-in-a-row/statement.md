# No Three In A Row

## Description

Call a string tidy when it never contains three equal characters in a row.
Starting from the string `s`, remove as few characters as possible so that
what remains is tidy, and return the resulting string. The minimum is
achieved by exactly one final string, so the answer is unique.

### Example 1

```text
Input: s = "abbcccdddd"
Output: "abbccdd"
Explanation: The run of three `c`s loses one `c` and the run of four `d`s
loses two, while every shorter run survives untouched.
```

### Example 2

```text
Input: s = "xxx"
Output: "xx"
Explanation: Keeping all three characters would violate the rule, and one
of them must go — two `x`s are allowed.
```

### Example 3

```text
Input: s = "mississippi"
Output: "mississippi"
Explanation: No character ever appears three times consecutively, so
nothing needs to be deleted.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists only of lowercase English letters.

## Hints

### Hint 1

Deal with each maximal run of one repeated letter on its own.

### Hint 2

Two copies of a letter are always safe, so every run longer than two only
needs its tail cut off.
