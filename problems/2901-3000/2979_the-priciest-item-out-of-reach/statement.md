# The Priciest Item Out of Reach

## Description

A shop stocks exactly one item at every positive integer price: price
1, price 2, price 3, and so on forever. A customer pays using an
unlimited supply of coins in just two denominations, the distinct primes
`primeOne` and `primeTwo`. An item is buyable when some handful of those
coins adds up to its price exactly — overpaying or receiving change is
not allowed.

Which price is the largest one that can never be paid? Return it.

### Example 1

```text
Input: primeOne = 3, primeTwo = 7
Output: 11
Explanation: The unreachable prices are [1,2,4,5,8,11]; every price
above 11 can be assembled from 3- and 7-coins.
```

### Example 2

```text
Input: primeOne = 2, primeTwo = 3
Output: 1
Explanation: Only the price 1 is unreachable — every integer above 1 is
a sum of 2s and 3s.
```

### Example 3

```text
Input: primeOne = 11, primeTwo = 13
Output: 119
Explanation: Prices 120 and up are all reachable with 11- and 13-coins,
while 119 itself is not.
```

### Constraints

- `1 < primeOne, primeTwo < 10⁴`
- `primeOne` and `primeTwo` are prime numbers.
- `primeOne * primeTwo < 10⁵`

## Hints

### Hint 1

Experiment with small pairs. Every price beyond `primeOne * primeTwo`
turns out to be payable.

### Hint 2

Payability spreads upward: if price `i` can be paid, then so can
`i + primeOne` and `i + primeTwo`.

### Hint 3

That spread makes a simple dynamic-programming sieve over
`0..primeOne * primeTwo` enough to find the largest unreachable price.

### Hint 4

There is also an `O(1)` answer: the number-theory result usually called
the Chicken McNugget (Frobenius) theorem hands you a closed formula.
