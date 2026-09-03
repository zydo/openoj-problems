# The Character Mix Score

## Description

You are given a string `password` built from English letters, digits, and
the special characters `"!@#$"`.

Score how wide a mix of character types it draws from:

- every distinct lowercase letter adds `1` point;
- every distinct uppercase letter adds `2` points;
- every distinct digit adds `3` points;
- every distinct special character from `"!@#$"` adds `5` points.

A character earns its points only once, no matter how many times it
reappears.

Return the total score.

### Example 1

```text
Input: password = "xYz9@"
Output: 12
Explanation: The distinct characters are 'x', 'z', 'Y', '9' and '@'.
They contribute 1 + 1 + 2 + 3 + 5 = 12.
```

### Example 2

```text
Input: password = "aaaa"
Output: 1
Explanation: Only one distinct lowercase letter occurs, worth a single
point; the repeats earn nothing further.
```

### Example 3

```text
Input: password = "AAaa11!!"
Output: 11
Explanation: The distinct characters are 'a', 'A', '1' and '!', scoring
1 + 2 + 3 + 5 = 11.
```

### Constraints

- `1 <= password.length <= 10⁵`
- `password` consists of lowercase and uppercase English letters, digits,
  and special characters from `"!@#$"`.

### Hint 1

Only which characters occur matters, never how often — the string can be
read as its set of distinct characters.

### Hint 2

Walk the string once and add each character's fixed worth the first time
you meet it, ignoring every later sighting.
