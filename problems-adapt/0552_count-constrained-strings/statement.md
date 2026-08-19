# Count Constrained Strings

## Description

Work over the three-letter alphabet `x`, `y`, `z`. Call a string over it
**constrained** when it obeys both of these rules:

- `x` is used at most once anywhere in the string;
- `y` never appears three times in a row.

Every other arrangement of the three letters is allowed, and `z` is unrestricted.

Given an integer `n`, return how many constrained strings have length exactly
`n`. That count outgrows a 64-bit integer quickly, so return it modulo
`10⁹ + 7`.

### Example 1

```text
Input: n = 8
Output: 861
Explanation: 861 of the 6561 strings of length 8 survive both rules. For
instance "zyyzxyzy" is fine — one x, and no run of y longer than two — while
"zyyyzzxz" fails the run rule and "xzyzxyzz" fails the x rule.
```

### Example 2

```text
Input: n = 12
Output: 14071
Explanation: Four extra letters multiply the count by roughly sixteen, far
below the 81-fold growth of the unrestricted alphabet.
```

### Example 3

```text
Input: n = 54321
Output: 713407490
Explanation: The true count here runs to thousands of digits; what is asked for
is its remainder.
```

### Constraints

- `1 <= n <= 10⁵`

## Hints

### Hint 1

Build a string one letter at a time. Only two things about what you have built
so far can ever forbid a letter later: whether `x` has been spent, and how many
`y`s the string currently ends with.

### Hint 2

That is six situations in all — two choices for the first fact, three (0, 1 or
2) for the second. Rather than track strings, track *how many* strings sit in
each of the six situations at each length.

### Hint 3

Going from length `k` to length `k + 1`: appending `z` clears the trailing `y`
run; appending `x` is open only to strings that have not spent it, and also
clears the run; appending `y` is open only while the run is shorter than two,
and lengthens it by one. Every constrained string of length `k + 1` arises from
exactly one such move.

### Hint 4

Start from the empty string — one string, nothing spent, no trailing run — take
`n` steps, and add up the six counts, reducing modulo `10⁹ + 7` throughout.
