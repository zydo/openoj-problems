# Bob's Share Of The Chocolate Bill

## Description

Alice and Bob are at a chocolate counter where the `i`-th chocolate costs
`prices[i]`. They have agreed on how each purchase is split, and the split
depends on a cap `k`:

- A chocolate priced at most `k` is Bob's to pay in full.
- A chocolate priced above `k` costs Bob only `k`; Alice covers the rest.

You are given `prices` and a list of `queries`, where `queries[i] =
[kᵢ, mᵢ]`. On trip `i` Bob must pick exactly `mᵢ` chocolates, every picked
chocolate is settled by the rule above, and the trip ends with Alice having
paid `aᵢ` in total and Bob `bᵢ`. Bob chooses which chocolates to pick so
that `bᵢ − aᵢ` is as small as possible.

Return an array where the `i`-th element is the smallest value of
`bᵢ − aᵢ` Bob can achieve for `queries[i]`.

### Example 1

```text
Input: prices = [3,8,12,20], queries = [[10,2],[25,2],[6,1]]
Output: [3,11,-8]
Explanation: For [10,2] Bob takes the chocolates priced 3 and 20: he pays
3 + 10 = 13 while Alice adds 0 + 10 = 10, giving 13 - 10 = 3. For [25,2]
he grabs the two cheapest and pays both in full: 11 - 0 = 11. For [6,1] he
takes the priciest chocolate, pays only the cap 6, and Alice adds 14,
giving 6 - 14 = -8. No other picks do better.
```

### Example 2

```text
Input: prices = [2,4,6,9,13], queries = [[5,3],[5,5],[1,2]]
Output: [0,8,-18]
Explanation: For [5,3] Bob takes the 2 plus the two priciest bars: he pays
2 + 5 + 5 = 12 and Alice adds 0 + 4 + 8 = 12, so the difference is 0. For
[5,5] every bar must go: Bob pays 2 + 4 + 5 + 5 + 5 = 21 while Alice pays
0 + 0 + 1 + 4 + 8 = 13, giving 8. For [1,2] he takes the two priciest,
paying the cap 1 twice while Alice covers 8 + 12 = 20, giving -18. No
other picks do better.
```

### Example 3

```text
Input: prices = [7], queries = [[7,1],[3,1]]
Output: [7,-1]
Explanation: There is only one chocolate, so both queries force Bob to
take it. With k = 7 he pays its full price: 7 - 0 = 7. With k = 3 the
price sits above the cap: he pays 3 and Alice pays 4, giving -1.
```

### Constraints

- `1 <= prices.length == n <= 10⁵`
- `1 <= prices[i] <= 10⁹`
- `1 <= queries.length <= 10⁵`
- `queries[i].length == 2`
- `1 <= kᵢ <= 10⁹`
- `1 <= mᵢ <= n`

## Hints

### Hint 1

Sort the prices once and build prefix sums; every query is then answered
from those alone.

### Hint 2

Charge each chocolate with what it adds to `b − a`: its full price when
the price is at most `k`, and `2k − price` when it is above.

### Hint 3

In sorted order those contributions climb along the cheap side and fall
along the expensive side, so some optimal purchase takes a prefix of the
cheap side together with a suffix of the expensive side.

### Hint 4

Only how many chocolates come from the cheap side matters. Swapping one
more in from the cheap side never helps once it has stopped helping, so a
binary search finds the crossover count and prefix sums score the result.
