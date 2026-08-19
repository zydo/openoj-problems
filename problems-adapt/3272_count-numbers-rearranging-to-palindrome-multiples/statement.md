# Count Numbers Rearranging to Palindrome Multiples

## Description

You are given two positive integers `n` and `k`.

Call an integer **k-palindromic** when it reads the same in both directions
and is a multiple of `k`.

Count the `n`-digit integers whose digits can be permuted into some
k-palindromic integer. For instance, with `k = 2`, the digits of `2020` permute
into `2002`, so `2020` is counted, while the digits of `1010` permute into no
even palindrome at all.

Neither the integer itself nor any permuted form may begin with the digit `0`;
`1010`, for example, does not become the 3-digit palindrome `101`.

Return the total count of such `n`-digit integers.

### Example 1

```text
Input: n = 2, k = 7
Output: 1
Explanation: The only two-digit multiple of 7 that reads the same both ways
is 77, and its two equal digits admit no other arrangement.
```

### Example 2

```text
Input: n = 3, k = 4
Output: 54
Explanation: 212 is one palindrome divisible by 4, and every permutation of
its digits counts: 122, 212 and 221. From 404 only 404 and 440 count, since
044 would begin with zero. Summing over all 20 qualifying palindromes' digit
sets gives 54.
```

### Example 3

```text
Input: n = 4, k = 2
Output: 172
Explanation: An even palindrome has to end in an even digit. The palindrome
2002 alone contributes 2002, 2020 and 2200; adding every other even
palindrome's contributions reaches 172.
```

### Constraints

- `1 <= n <= 10`
- `1 <= k <= 9`

## Hints

### Hint 1

A palindrome of length `n` is fixed by its first `⌈n/2⌉` digits — the rest is
forced by mirroring. How many candidate palindromes does that leave to test?

### Hint 2

Two palindromes made of the same digits contribute exactly the same set of
integers. What compact object records a palindrome's contribution?

### Hint 3

For one digit multiset, the integers it spells are counted by a multinomial;
remember to remove the spellings whose first digit is `0`.
