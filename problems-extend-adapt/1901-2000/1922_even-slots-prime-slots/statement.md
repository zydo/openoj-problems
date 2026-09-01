# Even Slots and Prime Slots

## Description

Think of the positions of a digit string as alternating slots. Reading from
the left starting at index `0`, every slot at an **even** index must hold
an **even** digit, and every slot at an **odd** index must hold a **prime**
digit — that is, one of 2, 3, 5, or 7.

For instance, `"234"` qualifies: its even slots hold the even digits `2`
and `4`, and its single odd slot holds the prime `3`. The string `"4735"`
does not, because the digit `3` sits at an even index while being odd.

Given a length `n`, count how many digit strings of that length satisfy
both slot rules. Digit strings may begin with zero, and leading zeros
count toward the length. Because the count grows extremely fast, report
it modulo `10⁹ + 7`.

### Example 1

```text
Input: n = 3
Output: 100
Explanation: Indices 0 and 2 each take one of the five even digits and
index 1 takes one of the four prime digits, giving 5 × 4 × 5 = 100
strings, e.g. "234", "705", or "636".
```

### Example 2

```text
Input: n = 20
Output: 999928327
Explanation: the true count 5¹⁰ × 4¹⁰ exceeds the modulus, so only its
remainder is reported.
```

### Example 3

```text
Input: n = 123456
Output: 182747849
```

### Constraints

- `1 <= n <= 10¹⁵`

## Hints

### Hint 1

Each position is filled independently of the others: an even index offers
5 choices and an odd index offers 4. What closed-form product counts all
strings?

### Hint 2

With `n` this large, compute those powers by repeated squaring rather than
multiplying one factor at a time, reducing modulo `10⁹ + 7` at every step.
