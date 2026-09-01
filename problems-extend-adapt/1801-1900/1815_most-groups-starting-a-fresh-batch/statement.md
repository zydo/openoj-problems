# Most Groups Starting a Fresh Batch

## Description

A bakery serves donuts straight from the oven in batches of `batchSize`:
a batch must be handed out completely before the next one goes in. You
are given an integer `batchSize` and an integer array `groups`, where
`groups[i]` is the size of the `i`-th party of customers. Every customer
eats exactly one donut, and all customers of a party are served before
the next party starts.

A party leaves happy when every one of its customers is served from a
batch that was freshly opened for them — put differently, when the
previous party finished the current batch and nothing carried over. You
get to choose the order in which the parties are served. Return the
largest number of happy parties that some ordering achieves.

### Example 1

```text
Input: batchSize = 2, groups = [1,1,1,1,1]
Output: 3
Explanation: Serve the parties in the given order. The 1st, 3rd, and 5th
parties each open a fresh batch, so they are happy; the 2nd and 4th are
served from a batch the previous party already started.
```

### Example 2

```text
Input: batchSize = 5, groups = [3,2,7,5,4]
Output: 3
Explanation: One optimal ordering is [5,2,3,4,7], where the 1st, 2nd,
and 4th parties start on a new batch.
```

### Example 3

```text
Input: batchSize = 9, groups = [18,27,5]
Output: 3
Explanation: Serving [18,27,5] makes every party happy: each of the
first two consumes a multiple of the batch size, so the last party starts
on a fresh batch as well.
```

### Constraints

- `1 <= batchSize <= 9`
- `1 <= groups.length <= 30`
- `1 <= groups[i] <= 10⁹`

## Hints

### Hint 1

Only each party's size modulo `batchSize` affects the outcome, so tally
how many parties have each remainder.

### Hint 2

A party whose remainder is 0 always opens a fresh batch, and two parties
with complementary remainders `i` and `batchSize - i` can sit back to
back so the second one starts on a boundary. Pair those off first.

### Hint 3

What is left is few enough for an exact search: a state is the vector of
unpaired counts together with the remainder `r` already in the current
batch, memoized so repeated states are solved once.

### Hint 4

Placing a party of remainder `m` moves the state to
`(counts with m removed, (r + m) mod batchSize)` and scores one happy
party exactly when `r == 0`; take the best of those choices.
