# Number That Rotates Into Another

## Description

Picture a number written on paper, then spin the paper 180 degrees.
Some digits survive the spin and turn into a different — or the same —
digit:

- `0`, `1`, `8` read the same after the spin; `6` and `9` trade places,
  each becoming the other.
- `2`, `3`, `4`, `5`, and `7` do not turn into any digit at all.

A number qualifies when every one of its digits survives the spin, and
the number read off the spun paper is a _different_ number from the
original. Any zeros the spin leaves at the front simply don't count:
spinning `8000` leaves `0008`, which reads as `8`.

Given an integer `n`, return `true` if spinning it produces a valid,
different number, and `false` otherwise.

### Example 1

![diagram](figures/1056-1.svg)

```text
Input: n = 6
Output: true
Explanation: The spin turns the 6 into a 9, which is a valid number and
not the one we started with.
```

### Example 2

![diagram](figures/1056-2.svg)

```text
Input: n = 89
Output: true
Explanation: Spun around, 89 reads 68 — still a number, and not 89.
```

### Example 3

![diagram](figures/1056-3.svg)

```text
Input: n = 11
Output: false
Explanation: Both digits survive the spin, but the result reads 11
again, so the number has not changed.
```

### Constraints

- `0 <= n <= 10⁹`

## Hints

### Hint 1

Build the spun value one digit at a time from the right, mapping each
digit through the table above; meeting a digit with no entry settles
the answer immediately. At the end, the number qualifies exactly when
the value you built differs from the original.
