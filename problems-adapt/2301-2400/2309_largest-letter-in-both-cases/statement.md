# Largest Letter In Both Cases

## Description

Given a string `s` of English letters, find the largest letter that appears
in `s` written both ways — once as a lowercase character and once as an
uppercase one. Return that letter in uppercase, or the empty string when no
letter qualifies.

One letter is larger than another when it sits later in the alphabet.

### Example 1

```text
Input: s = "mOoNlIgHt"
Output: "O"
Explanation: 'o' is the only character that shows up in both cases — as 'o'
and as 'O' — so the answer is "O".
```

### Example 2

```text
Input: s = "zZaAyYbB"
Output: "Z"
Explanation: The letters A, B, Y, and Z each appear in both cases, and Z is
the largest of them.
```

### Example 3

```text
Input: s = "qWeRtY"
Output: ""
Explanation: No character of the string appears in both lower and upper
case, so the answer is the empty string.
```

### Constraints

- `1 <= s.length <= 1000`
- `s` contains only lowercase and uppercase English letters.

## Hints

### Hint 1

Walk the string once and record the letters that occur, keeping the two
cases apart.

### Hint 2

Then walk the alphabet from Z down to A and return the first letter whose
two case forms both turned up.
