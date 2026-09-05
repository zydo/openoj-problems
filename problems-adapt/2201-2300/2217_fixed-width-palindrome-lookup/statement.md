# Fixed-Width Palindrome Lookup

## Description

A palindrome reads identically forward and backward, and it never starts
with a zero. Consider every palindrome whose decimal representation has
exactly `width` digits.

Given an array `queries` and the integer `width`, build `answer` of the
same length as `queries`, where `answer[i]` is the `queries[i]`-th
smallest palindrome with `width` digits — or `-1` when there aren't that
many palindromes of that width.

### Example 1

```text
Input: queries = [3,7,1], width = 1
Output: [3,7,1]
Explanation:
The one-digit palindromes are 1 through 9 in order. The 3rd is 3, the
7th is 7, and the 1st is 1.
```

### Example 2

```text
Input: queries = [5,11], width = 2
Output: [55,-1]
Explanation:
The two-digit palindromes start 11, 22, 33, 44, 55, ... and there are
only nine of them, so the 5th is 55 while the 11th does not exist and
yields -1.
```

### Example 3

```text
Input: queries = [12,15,19], width = 3
Output: [212,242,282]
Explanation:
The three-digit palindromes begin 101, 111, 121, 131, ...; counting
them, the 12th is 212, the 15th is 242, and the 19th is 282.
```

### Example 4

```text
Input: queries = [90000000], width = 15
Output: [999999999999999]
Explanation:
A 15-digit palindrome is fixed by its first eight digits, so exactly
9 * 10⁷ exist — and the very last of them is fifteen nines.
```

### Constraints

- `1 <= queries.length <= 5 * 10⁴`
- `1 <= queries[i] <= 10⁹`
- `1 <= width <= 15`

## Hints

### Hint 1

How many `width`-digit palindromes exist? A query larger than that count
can be dismissed immediately.

### Hint 2

Only the first `ceil(width/2)` digits of a palindrome are free choices.
Rank those half-numbers instead of the palindromes themselves, then
mirror the half you land on.
