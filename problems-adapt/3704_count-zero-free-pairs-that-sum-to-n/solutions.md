# Solutions — Count Zero-Free Pairs That Sum to N

## Digit DP over the columns of n

Writing `a + b = n` as column addition turns the count into a walk over the
digits of `n`. In each column a digit pair `(da, db)` is legal exactly when
`da + db + carry` ends in that column's digit of `n`; the tens overflow becomes
the carry handed to the next column up. One extra leading column beyond the
top digit of `n` absorbs the last carry and requires it to be zero there —
without it, digit patterns summing to a longer number would slip through.

Beside the carry, the DP tracks one bit per summand: has this number started
yet? Before the flag is set its digit is forced to 0, which is precisely a run
of leading zeros; after the flag is set every further digit must be nonzero,
because a 0 in the middle breaks the zero-free rule exactly as a trailing one
does. The units column refuses a 0 digit for both numbers outright, so each
counted pattern is a pair of positive, zero-free integers. Eight state cells —
carry times two started flags — each absorb at most a hundred digit pairs per
column, and everything is accumulated modulo `10^9 + 7`.

For `n = 21` the walk lands on 16: the eight splits (2, 19) through (9, 12)
and their reverses, with (1, 20) and (10, 11) excluded by their zeros. At
`n = 10^15` the raw count already dwarfs a 32-bit word, which is why the
statement fixes the modulus up front.

Since `n <= 10^15` spans at most 16 decimal digits, the whole computation is a
few hundred operations per column — effectively constant work in the digit
count.

**Complexity:** `O(D)` time (D = number of decimal digits of n), `O(1)` space.
