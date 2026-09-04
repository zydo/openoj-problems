# The Greedy Teller

## Description

A teller window holds banknotes of five denominations — `20`, `50`,
`100`, `200`, and `500` — and starts empty. Patrons deposit or withdraw
money through it.

Withdrawals always try to hand out the largest denominations first.
The request is served exactly that way or not at all: the teller never
substitutes a smaller note to rescue a request. For instance, with one
`100` note and one `200` note in stock, a `300` withdrawal succeeds
with exactly those two notes; but a `600` withdrawal against three
`200` notes and one `500` note is refused, because the teller commits
the `500` first and then cannot cover the remaining `100` with the
notes it is willing to use.

Implement the `Teller` class:

- `Teller()` initializes the teller with no banknotes.
- `void deposit(int[] banknotesCount)` adds banknotes, given in the
  order `20`, `50`, `100`, `200`, `500`.
- `int[] withdraw(int amount)` returns how many banknotes of each
  denomination (in the same order) are handed out, and removes them
  from stock — or returns `[-1]` and dispenses nothing when the greedy
  policy cannot serve the request.

### Example 1

```text
Input:
["Teller", "deposit", "withdraw", "withdraw", "deposit", "withdraw"]
[[], [[2, 0, 1, 0, 3]], [720], [100], [[1, 1, 0, 0, 0]], [70]]
Output: [null, null, [-1], [0, 0, 1, 0, 0], null, [1, 1, 0, 0, 0]]
Explanation:
Teller teller = new Teller();
teller.deposit([2, 0, 1, 0, 3]); // stock: 2×20, 1×100, 3×500.
teller.withdraw(720); // return [-1]. The teller commits a 500 note
                      // first, and then no combination of the allowed
                      // notes covers the remaining 220.
teller.withdraw(100); // return [0, 0, 1, 0, 0]. The 100 note covers it
                      // exactly; stock is now 2×20 and 3×500.
teller.deposit([1, 1, 0, 0, 0]); // stock: 2×20, 1×50, 1×100, 3×500.
teller.withdraw(70);  // return [1, 1, 0, 0, 0]. One 50 and one 20.
```

### Constraints

- `banknotesCount.length == 5`
- `0 <= banknotesCount[i] <= 10⁹`
- `1 <= amount <= 10⁹`
- At most `5000` calls in total are made to `withdraw` and `deposit`.
- At least one call is made to each of `withdraw` and `deposit`.
- The sum of `banknotesCount[i]` across all deposits never exceeds
  `10⁹`.

## Hints

### Hint 1

Walk the denominations from largest to smallest once — the number each
denomination contributes is capped by both the stock and the remaining
amount.

### Hint 2

Only accept the plan if every denomination stayed within stock; a
failed plan must leave the drawer untouched.
