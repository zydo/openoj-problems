# Secret Number Hint

## Description

You are playing a number-guessing game with a friend. You have written
down a secret number, and your friend is trying to guess it. After each
guess, you give back a hint describing how close it was:

- A **bull** is a digit in the guess that matches the digit at the same
  position in the secret number.
- A **cow** is a digit in the guess that does appear somewhere in the
  secret number, but at a different position — specifically, among the
  digits that are not already bulls, count how many could be paired up
  between the guess and the secret if you were free to rearrange them.

Given the secret number `secret` and a `guess`, return the hint as the
string `"xAyB"`, where `x` is the bull count and `y` is the cow count.
Both `secret` and `guess` may contain repeated digits.

### Example 1

```text
Input: secret = "2468", guess = "8462"
Output: "2A2B"
Explanation: Positions 1 and 2 match ('4' and '6'), giving 2 bulls. The
remaining digits, '2' and '8' on both sides, appear in the other string
at different positions, giving 2 more cows.
```

### Example 2

```text
Input: secret = "2214", guess = "0222"
Output: "1A1B"
Explanation: Position 1 matches ('2'), the one bull. Outside that
position the guess still has two more '2's, but the secret has only one
unmatched '2' left to pair against them, so only one of those '2's
counts as a cow — the extra one has nothing left to match.
```

### Constraints

- `1 <= secret.length, guess.length <= 1000`
- `secret.length == guess.length`
- `secret` and `guess` consist of digits only.
