# Sort Each Parity, Then Rebuild

## Description

You are handed a positive integer `num`. Its digits may be exchanged in
pairs, but only two digits of the same parity may trade places — odd with
odd, even with even — and you may perform as many such exchanges as you
like.

Rearrange the digits under that rule so the resulting number is as large as
possible, and return that value.

### Example 1

```text
Input: num = 247
Output: 427
Explanation: The even digits 2 and 4 trade places to put the larger even
digit first; the lone odd digit 7 stays where it is.
```

### Example 2

```text
Input: num = 6329
Output: 6923
Explanation: Among the odd digits, 9 moves ahead of 3; the even digits are
already in their best order. Parity is the only barrier — 6 and 3 can never
trade places.
```

### Example 3

```text
Input: num = 4086
Output: 8640
Explanation: Every digit is even, so any permutation is reachable; the
digits rearrange into descending order.
```

### Constraints

- `1 <= num <= 10⁹`

## Hints

### Hint 1

A digit sitting further left contributes more to the value, so bigger
digits want the front.

### Hint 2

Same-parity swaps let a digit reach any seat originally held by its own
parity class, so each class can be arranged independently.

### Hint 3

Sort each parity class in descending order, then walk the original digit
pattern and hand each position the largest unused digit of its parity.
