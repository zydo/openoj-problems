# Coprime Roll Sequences

## Description

You are given an integer `n`. A fair six-sided die is rolled `n` times,
writing the results down in order. Count the sequences that obey both
of these rules:

- Neighbouring results are coprime — their greatest common divisor is
  exactly 1.
- Equal results stay far apart: if the `i`th and `j`th rolls show the
  same face, then `abs(i - j) > 2`.

Return the count modulo `10^9 + 7`.

Two sequences differ whenever any position holds a different face.

### Example 1

```text
Input: n = 9
Output: 33008
Explanation: Fragments like (1, 2, 3, 1) extend into legal sequences;
the neighbours there are pairwise coprime and the repeated 1 sits three
positions apart. A fragment like (1, 2, 1) is already dead — the two 1s
are two positions apart — and so is (…, 3, 6, …), whose neighbours share
the divisor 3.
```

### Example 2

```text
Input: n = 11
Output: 262912
Explanation: The same two rules over eleven rolls admit 262912
sequences, reported modulo 10^9 + 7 (the raw count is still far below
the modulus here, but it grows past it by a few dozen rolls).
```

### Constraints

- `1 <= n <= 10^4`

## Hints

### Hint 1

When you append a new roll, which of the earlier rolls can still
influence whether the append is legal?

### Hint 2

The coprimality rule consults the last roll alone; the spacing rule
consults the last two. A state holding those two rolls may be enough.

### Hint 3

Check whether the roll three positions back can ever matter — if not, a
table over pairs suffices.
