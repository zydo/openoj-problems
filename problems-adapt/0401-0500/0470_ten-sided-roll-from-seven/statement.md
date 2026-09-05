# Ten-Sided Roll From a Seven-Sided Die

## Description

The only source of chance you have is a fair seven-sided die, whose faces are
`1` through `7` and each equally likely. Produce from it a fair ten-sided
result — a value in `1..10`, each with probability one tenth — without any
other source of randomness, and in particular without the language's own
random-number facilities.

The construction to implement is fixed, so that the outcome is checkable:

1. Roll the die twice, calling the results `a` and `b`.
2. Combine them into `t = (a - 1) * 7 + b`, a value in `1..49`.
3. If `t <= 40`, the result is `((t - 1) mod 10) + 1` and you are done.
4. Otherwise throw both rolls away and go back to step 1.

Randomness cannot be graded, so the judge hands the die's future to you up
front. The parameter `seven_rolls` lists the faces the die will show, in the
order they come up; each roll the construction makes takes the next unused
value. Return the result the construction reaches. Every test supplies enough
faces for it to finish.

### Example 1

```text
Input: seven_rolls = [1,4]
Output: 4
Explanation: a = 1 and b = 4 give t = 0 * 7 + 4 = 4, which is within 40, so the
result is ((4 - 1) mod 10) + 1 = 4.
```

### Example 2

```text
Input: seven_rolls = [5,4]
Output: 2
Explanation: t = 4 * 7 + 4 = 32, still within 40, and 32 wraps to
((32 - 1) mod 10) + 1 = 2.
```

### Example 3

```text
Input: seven_rolls = [6,6,4,2]
Output: 3
Explanation: The first attempt gives t = 5 * 7 + 6 = 41, above the cutoff, so
both faces are discarded — not just one. The second attempt reads 4 and 2, so
t = 23 and the result is 3.
```

### Constraints

- `1 <= seven_rolls.length <= 10^5`
- every face satisfies `1 <= seven_rolls[i] <= 7`

### Follow up

- On average, how many rolls of the seven-sided die does one result cost?
- Can a scheme reuse the rejected attempts and spend fewer rolls?

## Hints

### Hint 1

Ten does not divide seven, so no single roll can be reshaped into a fair
ten-way choice. Two rolls, though, give 49 outcomes that are equally likely,
and `(a - 1) * 7 + b` numbers them `1..49` without collisions.

### Hint 2

49 is not a multiple of ten either, but 40 is the largest number below it that
is. Keep the first 40 numbers and each of the ten results owns exactly four of
them, so `((t - 1) mod 10) + 1` is fair.

### Hint 3

The nine leftovers cannot be shared out evenly, so they buy nothing and are
dropped entirely — both faces of that attempt, never one. Walk the supplied
faces strictly in order, two at a time, and return as soon as an attempt lands
at or below the cutoff.
