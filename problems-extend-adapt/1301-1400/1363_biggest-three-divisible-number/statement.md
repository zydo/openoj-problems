# Biggest Three-Divisible Number

## Description

You are handed a pile of single digits. Throw away as many of them as you
like — possibly none — then line up the survivors in whatever order you want
to spell out one decimal number. Among every number divisible by three that
can be built this way, return the largest one, as a string.

The value can outgrow any built-in integer type, which is why the answer is a
string. It must also be trimmed of leading zeros: if every digit you kept is
`0`, answer `"0"`; if no divisible-by-three selection exists at all, answer
the empty string.

### Example 1

```text
Input: digits = [5,2,3,1]
Output: "531"
```

### Example 2

```text
Input: digits = [0,4,0,5]
Output: "5400"
```

### Example 3

```text
Input: digits = [0,0]
Output: "0"
```

### Example 4

```text
Input: digits = [7]
Output: ""
```

### Constraints

- `1 <= digits.length <= 10^4`
- `0 <= digits[i] <= 9`

## Hints

### Hint 1

Whether a number splits evenly by three is read straight off its digit sum,
so a selection works exactly when its digits total a multiple of three.

### Hint 2

Any longer number beats any shorter one, so the first goal is keeping as many
digits as the divisibility rule allows — the arrangement comes second.

### Hint 3

Tally the digits by their remainder mod 3. A total remainder of 1 is repaired
by discarding one remainder-1 digit, or, when none exists, two remainder-2
digits; a total remainder of 2 mirrors that trade.

### Hint 4

With the survivor set chosen, emitting it from high digit to low produces the
largest concatenation — and remember an all-zeros survivor set collapses to
`"0"`.
