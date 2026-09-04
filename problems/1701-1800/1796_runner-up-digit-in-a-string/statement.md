# Runner-Up Digit In A String

## Description

A string `s` mixes lowercase English letters with digit characters.
Among the digits that actually appear in `s`, find the runner-up: the
second largest distinct digit value. If `s` contains fewer than two
distinct digit values, there is no runner-up and you return `-1`.

### Example 1

```text
Input: s = "x7k2p9q4"
Output: 7
Explanation: The digits that appear are 2, 4, 7, and 9. The largest
distinct value is 9, so the runner-up is 7.
```

### Example 2

```text
Input: s = "zzz550z"
Output: 0
Explanation: The distinct digit values are 5 and 0. The runner-up to
5 is 0.
```

### Example 3

```text
Input: s = "t5t5t5"
Output: -1
Explanation: Only the digit 5 ever appears, so a second largest
distinct value does not exist.
```

### Constraints

- `1 <= s.length <= 500`
- `s` consists of only lowercase English letters and digits.

## Hints

### Hint 1

How often a digit shows up is irrelevant — only the set of digit
values present matters, and a value already seen can be ignored on
every later sighting.

### Hint 2

Two running variables suffice: sweep the string once carrying the
best and second-best distinct digits, promoting and displacing as
you go, and remember both may stay empty on a digit-free string.
