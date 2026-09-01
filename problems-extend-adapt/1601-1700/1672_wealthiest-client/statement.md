# Wealthiest Client

## Description

A ledger of client balances arrives as an `m x n` matrix `accounts`:
`accounts[i][j]` is how much client `i` holds at branch `j`. A client's
total fortune is the sum of their row, and you must report the fortune of
the client holding the most.

### Example 1

```text
Input: accounts = [[4,9],[2,6],[8,1]]
Output: 13
Explanation: The three fortunes are 4 + 9 = 13, 2 + 6 = 8, and
8 + 1 = 9. The first client holds the most, 13.
```

### Example 2

```text
Input: accounts = [[5,10,3],[7,7,7]]
Output: 21
Explanation: The first client's fortune is 5 + 10 + 3 = 18, the second's
is 7 + 7 + 7 = 21, so 21 is returned.
```

### Example 3

```text
Input: accounts = [[3],[9],[1]]
Output: 9
```

### Constraints

- `m == accounts.length`
- `n == accounts[i].length`
- `1 <= m, n <= 50`
- `1 <= accounts[i][j] <= 100`

## Hints

### Hint 1

Reduce each row to a single number: the total that client holds.

### Hint 2

The answer is the largest of those totals.
