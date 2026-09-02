# Sturdy Passphrase II

## Description

A passphrase earns the "sturdy" label when it clears every one of these
checks:

- It is at least 8 characters long.
- It includes at least one lowercase letter.
- It includes at least one uppercase letter.
- It includes at least one digit.
- It includes at least one special character, where the special characters
  are exactly the ones in the string "!@#$%^&*()-+".
- No two neighboring characters are identical (so "tt9Km#4p" is fine, but
  "tth9K#4p" fails).

Given a string `password`, report whether it qualifies as sturdy.

### Example 1

```text
Input: password = "Qw7#mRtx"
Output: true
Explanation:
The passphrase is 8 characters long and offers a lowercase letter, an
uppercase letter, a digit, and a special character, with no identical
neighbors — every check passes.
```

### Example 2

```text
Input: password = "Xy9%Zt4&Lm"
Output: true
Explanation:
Ten characters covering all four character classes, and every neighboring
pair differs.
```

### Example 3

```text
Input: password = "aaBBcc99!"
Output: false
Explanation:
The very first two characters are the same letter side by side, which the
adjacency rule forbids. (The run "99" would violate it too.)
```

### Example 4

```text
Input: password = "Ab1!"
Output: false
Explanation:
This one has a lowercase letter, an uppercase letter, a digit, and a
special character — but it is far shorter than 8 characters.
```

### Constraints

- `1 <= password.length <= 100`
- `password` consists of letters, digits, and the special characters
  "!@#$%^&*()-+".

## Hints

### Hint 1

One scan is enough if you keep a boolean per character class, flipping it
on the first time you see a lowercase, an uppercase, a digit, and a
special character.

### Hint 2

The short-circuit checks are easy to miss: bail out immediately when the
string is under 8 characters or when a character repeats its neighbor, and
at the end require all four class flags to be set.
