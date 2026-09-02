# Matching Modular Powers

## Description

Each row of a 0-indexed matrix `variables` carries four positive
integers, `variables[i] = [a, b, c, m]`. A row passes the check when

`((a^b % 10)^c) % m == target`

where `^` is exponentiation and `%` is the remainder. Scan the rows in
order and gather the index of every row that passes; return those
indices in any order.

### Example 1

```text
Input: variables = [[39,135,131,5],[32,101,114,81],[52,115,36,107]],
target = 4
Output: [0,2]
Explanation:
- Row 0: 39^135 ends in 9, and 9^131 % 5 = 4 — passes.
- Row 1: 32^101 ends in 2, and 2^114 % 81 = 64 — fails.
- Row 2: 52^115 ends in 8, and 8^36 % 107 = 4 — passes.
Rows 0 and 2 pass, so the answer is [0,2].
```

### Example 2

```text
Input: variables = [[909,985,930,954]], target = 5
Output: []
Explanation: 909^985 ends in 9, and 9^930 % 954 = 387, which is not
5. No row passes, so the answer is empty.
```

### Example 3

```text
Input: variables = [[7,3,9,1],[12,8,6,1],[9,4,3,10]], target = 0
Output: [0,1]
Explanation: A remainder modulo 1 is always 0, so the first two rows
pass no matter what powers are involved. Row 3 gives 9^4 % 10 = 1 and
then 1^3 % 10 = 1, which is not 0. The answer is [0,1].
```

### Constraints

- `1 <= variables.length <= 100`
- `variables[i] = [a, b, c, m]` with `1 <= a, b, c, m <= 10³`
- `0 <= target <= 10³`
