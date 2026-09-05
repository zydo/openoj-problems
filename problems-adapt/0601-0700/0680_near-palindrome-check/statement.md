# Near Palindrome Check

## Description

Given a string `s`, determine whether it can be turned into a
palindrome by removing at most one character. Return `true` if such a
removal exists (including removing none at all), and `false` otherwise.

### Example 1

```text
Input: s = "racecar"
Output: true
Explanation: The string is already a palindrome, so no removal is
needed.
```

### Example 2

```text
Input: s = "radkar"
Output: true
Explanation: Removing the 'd' leaves "rakar", which reads the same
forwards and backwards.
```

### Example 3

```text
Input: s = "hello"
Output: false
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists of lowercase English letters.
