# Password Strength Steps

## Description

A password is *strong* when every rule below holds:

- It has at least 6 characters and at most 20 characters.
- It contains at least one lowercase letter, at least one uppercase letter,
  and at least one digit.
- No character appears three times in a row.

In one step you may insert a character anywhere, delete a character, or
replace one character with another. Given a string `password`, return the
minimum number of steps needed to make it strong. If it is already strong,
return `0`.

### Example 1

```text
Input: password = "password"
Output: 2
Explanation: One uppercase letter and one digit must be introduced.
```

### Example 2

```text
Input: password = "aaa111"
Output: 2
Explanation: Each run of three equal characters needs one replacement, and
one missing character class must be introduced; a single replacement can
cover both needs.
```

### Example 3

```text
Input: password = "abc"
Output: 3
Explanation: Three insertions reach length 6 and can supply the missing
uppercase and digit along the way.
```

### Constraints

- `1 <= password.length <= 50`
- `password` consists of letters, digits, dot `'.'`, or exclamation mark
  `'!'`.
