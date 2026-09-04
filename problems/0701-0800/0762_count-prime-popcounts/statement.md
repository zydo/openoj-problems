# Count Prime Popcounts

## Description

You are given two integers `left` and `right`. Consider every integer `n`
in the inclusive range `[left, right]` and write it in binary; its
_popcount_ is the number of `1` bits in that representation. Count how many
values of `n` in the range have a popcount that is a prime number.

For instance, `26` is `11010` in binary, so its popcount is `3`, and `3` is
prime.

### Example 1

```text
Input: left = 20, right = 24
Output: 4
Explanation:
20 -> 10100 (popcount 2, prime)
21 -> 10101 (popcount 3, prime)
22 -> 10110 (popcount 3, prime)
23 -> 10111 (popcount 4, not prime)
24 -> 11000 (popcount 2, prime)
Four of the five values have a prime popcount.
```

### Example 2

```text
Input: left = 100, right = 105
Output: 3
Explanation:
100 -> 1100100 (popcount 3, prime)
101 -> 1100101 (popcount 4, not prime)
102 -> 1100110 (popcount 4, not prime)
103 -> 1100111 (popcount 5, prime)
104 -> 1101000 (popcount 3, prime)
105 -> 1101001 (popcount 4, not prime)
Three of the six values have a prime popcount.
```

### Constraints

- `1 <= left <= right <= 10⁶`
- `0 <= right - left <= 10⁴`

## Hints

### Hint 1

Every value in range is at most `10⁶`, which fits in 20 bits, so its
popcount is always between `1` and `19`. Precompute once which of those
twenty possible counts are prime — `2, 3, 5, 7, 11, 13, 17, 19` — and then
each candidate costs one popcount plus one lookup.
