# The Longest Solvent Run

## Description

An account starts the day empty-handed, at a balance of 0, and a fixed
list of posted amounts is waiting for it: `transactions[i]` is the i-th
amount, where a positive entry is money coming in and a negative entry is
money going out.

The postings cannot be reordered. You choose which of them the account
actually accepts: skip any you like, but the ones you accept keep their
original order, and at every moment after accepting one, the running
balance must stay at or above zero — landing exactly on zero is fine.

Report the largest number of postings the account can accept under that
rule. Accepting nothing is always legal, so the answer is never below 0.

### Example 1

```text
Input: transactions = [4,-7,5,-2,-3]
Output: 4
Explanation: Accept 4 and 5 first — the balance climbs 0 -> 4 -> 9 — and
the two debits -2 and -3 then fit as well, ending at 4 without ever
dipping below zero. The early debit -7 is the one to refuse: accepting
it right after 4 would sink the balance to -3.
```

### Example 2

```text
Input: transactions = [-4,-1,-6]
Output: 0
Explanation: Every posting is an outflow from an empty account, so even
one acceptance would push the balance negative. Accept nothing.
```

### Example 3

```text
Input: transactions = [5,-3,2,-1,4]
Output: 5
Explanation: Everything fits in order: the balance runs
0 -> 5 -> 2 -> 4 -> 3 -> 7 and never leaves nonnegative ground.
```

### Constraints

- `1 <= transactions.length <= 10⁵`
- `-10⁹ <= transactions[i] <= 10⁹`

## Hints

### Hint 1

Walk the postings once, tracking the running balance plus a record of the
sizes of the outflows you have accepted so far.

### Hint 2

Accept every nonnegative posting without a second thought — it can only
lift the balance, and it grows the count you are maximizing.

### Hint 3

An outflow that still leaves the balance at or above zero should also be
accepted; note its size when you do.

### Hint 4

When an outflow would sink the balance but some already-accepted outflow
was strictly larger, swap them: refund the bigger old one and accept the
smaller new one. The count is unchanged while the balance recovers, and
that headroom is exactly what lets later, smaller outflows fit.
