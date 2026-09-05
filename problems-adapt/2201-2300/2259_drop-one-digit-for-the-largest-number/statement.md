# Drop One Digit for the Largest Number

## Description

A number arrives as a string `number` of digit characters, together with a
single digit `digit`. You must erase exactly one occurrence of `digit` from
the string. Among all the strings you could end up with, return the one whose
decimal value is largest. Every input guarantees that `digit` appears in
`number` at least once.

### Example 1

```
Input: number = "37213", digit = "3"
Output: "7213"
Explanation: The digit '3' occurs twice. Erasing the leading '3' leaves
"7213", while erasing the later one leaves "3721". The first result is
larger.
```

### Example 2

```
Input: number = "1991", digit = "9"
Output: "191"
Explanation: Only one '9' is present, so the removal is forced and the
answer is "191".
```

### Example 3

```
Input: number = "556", digit = "5"
Output: "56"
Explanation: Removing either '5' produces the same string "56", which is
therefore the answer.
```

### Constraints

- `2 <= number.length <= 100`
- Every character of `number` is one of `'1'` through `'9'`.
- `digit` is a single character from `'1'` through `'9'`.
- `digit` appears in `number` at least once.

## Hints

### Hint 1

The string never exceeds 100 characters, so examining every possible
removal is easily fast enough.

### Hint 2

Walk the string once; each time the current character equals `digit`, form
the string you would get by deleting that character.

### Hint 3

Deleting position `i` glues the prefix before `i` to the suffix after `i`.
All candidates share the same length, so comparing them as strings is the
same as comparing their values — just keep the largest.
