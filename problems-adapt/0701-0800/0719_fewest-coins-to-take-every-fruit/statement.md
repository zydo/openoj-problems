# Fewest Coins to Take Every Fruit

## Description

A stall sells `n` fruits in a row, and `prices` is 1-indexed: `prices[i]` is
the coin price of fruit `i`.

The stall runs one standing offer:

- Buy fruit `i` for `prices[i]` coins, and fruits `i + 1` through `2i` are
  yours for free.

A fruit you are entitled to for free may still be bought at its price —
doing so starts a fresh offer of its own.

Every fruit must end up yours. Return the fewest coins that make that
possible.

### Example 1

```text
Input: prices = [2,3,1,4]
Output: 3
Explanation: Buy fruit 1 for 2 coins, taking fruit 2 free. Then buy fruit 3
for 1 coin, taking fruit 4 free. Total: 2 + 1 = 3, and no single purchase
plus freebies can cover all four fruits.
```

### Example 2

```text
Input: prices = [5,1,9,9]
Output: 6
Explanation: Buy fruit 1 for 5 coins; fruit 2 comes free, but buying it
anyway for its mere 1 coin extends the free range through fruit 4. Paying
5 + 1 = 6 beats buying fruit 3 (9 coins) to reach fruit 4.
```

### Example 3

```text
Input: prices = [1,1,1,1,1,1,1,1]
Output: 3
Explanation: Purchases at 1, 2 and 4 chain their offers — 1 grants fruit 2,
2 grants fruits 3 and 4, and 4 grants fruits 5 through 8 — so three coins
gather all eight fruits.
```

### Constraints

- `1 <= prices.length <= 10^5`
- `1 <= prices[i] <= 10^5`

## Hints

### Hint 1

Let `dp[i]` be the fewest coins to own the first `i` fruits. Consider the
last fruit you actually paid for, `l`: everything after it up to `2l` was
free.

### Hint 2

So `l` can serve as the final purchase for prefix `i` exactly when
`l <= i <= 2l`, i.e. `ceil(i/2) <= l <= i`, giving
`dp[i] = dp[l-1] + prices[l]` minimized over that range. Note `l = i` is
legal — buying the very last fruit — which is how re-arming on a free
fruit stays a candidate.

### Hint 3

The range of legal `l` slides forward as `i` grows, so a monotonic deque of
candidate values `dp[l-1] + prices[l]` serves each minimum in amortized
constant time.
