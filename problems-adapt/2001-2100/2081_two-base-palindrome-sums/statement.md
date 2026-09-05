# Two-Base Palindrome Sums

## Description

Call a positive integer a two-base palindrome for base `k` when its
decimal digits read the same forwards and backwards, and so do its digits
when the number is written out in base `k`.

- `9` qualifies for `k = 2`: it is `9` in base 10 and `1001` in base 2,
  and both strings are palindromes.
- `4` does not qualify for `k = 2`: in base 2 it is `100`, which reads
  differently in each direction.

Given the base `k` and a count `n`, return the sum of the `n` smallest
two-base palindromes for `k`.

### Example 1

```text
Input: k = 2, n = 4
Output: 16
Explanation:
The 4 smallest two-base palindromes for k = 2, with their base-2 forms:
  base-10    base-2
    1          1
    3          11
    5          101
    7          111
Their sum = 1 + 3 + 5 + 7 = 16.
```

### Example 2

```text
Input: k = 3, n = 5
Output: 136
Explanation:
The 5 smallest two-base palindromes for k = 3, with their base-3 forms:
  base-10    base-3
    1          1
    2          2
    4          11
    8          22
    121        11111
Their sum = 1 + 2 + 4 + 8 + 121 = 136.
```

### Example 3

```text
Input: k = 4, n = 10
Output: 3224
Explanation:
The 10 smallest two-base palindromes for k = 4, with their base-4 forms:
  base-10    base-4
    1          1
    2          2
    3          3
    5          11
    55         313
    373        11311
    393        12021
    666        22122
    787        30103
    939        32313
Their sum = 1 + 2 + 3 + 5 + 55 + 373 + 393 + 666 + 787 + 939 = 3224.
```

### Example 4

```text
Input: k = 9, n = 1
Output: 1
Explanation: The smallest candidate, `1`, is a single digit in every
base, so the sum is just `1`.
```

### Constraints

- `2 <= k <= 9`
- `1 <= n <= 30`

## Hints

### Hint 1

Testing every positive integer in turn is hopeless — base-10 palindromes
are far too rare to find by filtering. Produce the candidates directly
instead.

### Hint 2

A decimal palindrome is decided entirely by its leading half: pick a
d-digit prefix, then append its mirror — the whole mirror for an even
digit count, or the mirror minus its last digit for an odd one.

### Hint 3

For each generated candidate, reverse its base-`k` digits and keep it only
when the reversal matches the original; collect until `n` survive, then
add them up.
