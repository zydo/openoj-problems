# Whittling Down To One Letter

## Description

You are given a string `s` of length `n` and an integer array `cost` of
the same length, where `cost[i]` is the price of erasing the character at
index `i`.

Erase any subset of characters — possibly none — so that what survives is
a non-empty string made of a single repeated letter.

Return the smallest total price you can pay.

### Example 1

```text
Input: s = "deed", cost = [2,7,4,5]
Output: 7
Explanation: Keeping the letter 'e' (total price 7 + 4 = 11) means erasing
both 'd' characters for 2 + 5 = 7. Keeping 'd' instead would cost 11, so 7
is the answer.
```

### Example 2

```text
Input: s = "code", cost = [4,1,6,2]
Output: 7
Explanation: The letter 'd' carries the largest per-letter price sum (6),
so everything else is erased: 4 + 1 + 2 = 7.
```

### Example 3

```text
Input: s = "tttt", cost = [3,9,1,4]
Output: 0
Explanation: The string already consists of one repeated letter, so
nothing needs to be erased.
```

### Constraints

- `n == s.length == cost.length`
- `1 <= n <= 10⁵`
- `1 <= cost[i] <= 10⁹`
- `s` consists of lowercase English letters.

## Hints

### Hint 1

A surviving string repeats exactly one letter, so every plan is "choose a
letter and erase the rest" — erasing the kept letter itself never pays.

### Hint 2

Add up the prices letter by letter. The answer is the grand total minus
the largest per-letter sum.

### Hint 3

Watch the range: sums reach 10¹⁴, so the typed languages need 64-bit
accumulators.
