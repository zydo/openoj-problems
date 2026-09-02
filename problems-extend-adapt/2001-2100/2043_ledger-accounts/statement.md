# Ledger Accounts

## Description

A ledger keeps `n` accounts, numbered `1` through `n`, each holding a
non-negative balance. Money moves through three operations, each of
which must be rejected when the balances cannot support it.

Implement the `Ledger` class:

- `Ledger(long long[] balance)` initializes the ledger with `n`
  accounts, where `balance[i]` is the initial balance of account
  `i + 1`.
- `boolean transfer(int account1, int account2, long long money)` moves
  `money` from account `account1` to account `account2` and returns
  `true`. It fails — changing nothing and returning `false` — if either
  account number is out of range or account `account1` holds less than
  `money`.
- `boolean deposit(int account, long long money)` credits `money` into
  account `account` and returns `true`, or returns `false` (changing
  nothing) if the account number is out of range.
- `boolean withdraw(int account, long long money)` debits `money` from
  account `account` and returns `true`, or returns `false` (changing
  nothing) if the account number is out of range or the account holds
  less than `money`.

### Example 1

```text
Input:
["Ledger", "withdraw", "transfer", "deposit", "transfer", "withdraw"]
[[[20, 100, 50, 5]], [2, 100], [1, 4, 20], [3, 50], [4, 1, 30], [3, 101]]
Output: [null, true, true, true, false, false]
Explanation:
Ledger ledger = new Ledger([20, 100, 50, 5]);
ledger.withdraw(2, 100);  // return true, account 2 has exactly 100.
                          // Balances are now [20, 0, 50, 5].
ledger.transfer(1, 4, 20); // return true, account 1 has 20.
                           // Balances are now [0, 0, 50, 25].
ledger.deposit(3, 50);     // return true. Balances are now [0, 0, 100, 25].
ledger.transfer(4, 1, 30); // return false, account 4 holds only 25.
ledger.withdraw(3, 101);   // return false, account 3 holds only 100.
```

### Constraints

- `n == balance.length`
- `1 <= n, account, account1, account2 <= 10⁵`
- `0 <= balance[i], money <= 10¹²`
- At most `10⁴` calls in total are made to `transfer`, `deposit`, and
  `withdraw`.

## Hints

### Hint 1

The balance array itself is the whole state — every operation is a
range check plus at most two array updates.

### Hint 2

A failed operation must leave every balance untouched, so validate all
conditions before writing anything.
