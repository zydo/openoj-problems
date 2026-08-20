# Solutions — Count Distinct Valid Numerals

## Two counters, one per ending digit

Distinctness makes brute enumeration hopeless but also makes the counting
easy: two subsequences are interchangeable when they spell the same string,
so the only thing worth tracking is *how many distinct values are reachable*,
split by final digit. Keep `end0` and `end1` — the numbers of distinct valid
values ending in `0` and in `1` among the prefix consumed so far, both modulo
`10^9 + 7`. Since a value of length two or more must begin with `1`, `end0`
and `end1` together enumerate exactly the values starting with `1`; the lone
`0` is the sole valid value with a leading zero, so it lives in its own flag
and stays out of both counters.

Why the update is so small. When character `c` arrives, appending `c` to
every value counted so far yields distinct values ending in `c` — distinct
prefixes stay distinct after a common suffix — and each old value ending in
`c` arises this way too, since it is its own shorter prefix extended by `c`.
So the new count of values ending in `c` is simply the old total `end0 +
end1`. For `c = '1'` the character standing alone is one more valid value,
giving `end1 = end1 + end0 + 1`; for `c = '0'` that lone term is withheld
(`0` belongs to the flag) and `0` itself is never extended (that would
produce a leading zero), giving `end0 = end0 + end1`.

Trace `binary = "110"`. After the first `1`: `end1 = 1`. After the second:
`end1 = 1 + 0 + 1 = 2`, i.e. the values `1` and `11`. The final `0` then
sets `end0 = 0 + 2 = 2`, the values `10` and `110`. With the flag set, the
answer is `2 + 2 + 1 = 5`.

When the scan finishes the answer is `end0 + end1`, plus one if a `0`
appeared anywhere, for the lone `0`. Uniform strings and mixtures need no
separate handling — the branch on the current character is the only casework.

**Complexity:** `O(n)` time, `O(1)` space.
