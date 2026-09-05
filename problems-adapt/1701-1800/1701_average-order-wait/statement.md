# Average Order Wait

## Description

One cook works a kitchen that handles a single order at a time. You are
given a list `customers`, whose `i`-th entry is `[arrival_i, prep_i]` — the
moment customer `i` shows up and how long that order takes to prepare. The
list is ordered so that arrival times never decrease.

The cook serves customers strictly in the order they appear. An order
starts as soon as the cook is free at or after that customer's arrival, and
the customer waits until the order is handed over.

A customer's wait runs from their arrival to the moment the cook finishes
their order. Return the average wait across all customers; answers within
`10⁻⁵` of the true value are accepted.

### Example 1

```text
Input: customers = [[1,4],[3,2],[6,1]]
Output: 3.33333
Explanation: Order 1 starts at time 1 and finishes at 5 (wait 4). Order 2
arrives at 3 but starts when the cook frees at 5, finishing at 7 (wait 4).
Order 3 arrives at 6, starts at 7, finishes at 8 (wait 2). The average wait
is (4 + 4 + 2) / 3 = 10 / 3 ≈ 3.33333.
```

### Example 2

```text
Input: customers = [[4,1],[4,2],[9,3],[14,5]]
Output: 3.00000
Explanation: The first two orders run back to back — 4→5 (wait 1) and 5→7
(wait 3). The third arrives at 9, after the cook has idled since 7, and is
served 9→12 (wait 3). The fourth runs 14→19 (wait 5). The average is
(1 + 3 + 3 + 5) / 4 = 3.
```

### Constraints

- `1 <= customers.length <= 10⁵`
- `1 <= arrival_i, prep_i <= 10⁴`
- `arrival_i <= arrival_(i+1)` for every `i`

## Hints

### Hint 1

Track a single number down the list: the moment the cook becomes free.

### Hint 2

Order `i` begins at whichever is later — its arrival or that free moment —
and ends `prep_i` later.

### Hint 3

Sum every `finish − arrival` as an exact integer and divide once at the
end.
