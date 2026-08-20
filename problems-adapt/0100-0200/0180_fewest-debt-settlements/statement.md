# Fewest Debt Settlements

## Description

A `ledger` records money that has already changed hands: the entry
`ledger[i] = [payer, payee, amount]` says that person `payer` handed `amount`
dollars to person `payee`. Everyone now stands at some net position — ahead,
behind, or square — and the group wants to get everyone back to zero by making
further payments among themselves.

Return the smallest number of such payments that leaves every net position at
zero. A payment may be of any size and may go between any two people, whether
or not they appear together in the ledger.

### Example 1

```text
Input: ledger = [[0,1,15],[2,3,8]]
Output: 2
Explanation: Person 0 is down $15 and person 1 is up $15; person 2 is down $8
and person 3 is up $8. The two pairs are unrelated, so each needs its own
payment: 1 pays 0 back $15, and 3 pays 2 back $8.
```

### Example 2

```text
Input: ledger = [[0,1,20],[1,2,20]]
Output: 1
Explanation: Person 1 received $20 and paid out $20, so 1 is already square.
Only 0 (down $20) and 2 (up $20) are off, and a single payment from 2 to 0
settles everything.
```

### Example 3

```text
Input: ledger = [[0,1,2],[0,2,4],[3,4,5]]
Output: 3
Explanation: The net positions are -6, +2, +4 for persons 0, 1, 2 and -5, +5
for persons 3 and 4. The first three can square up among themselves in two
payments — 1 sends $2 to 0, 2 sends $4 to 0 — and the last pair needs one more.
```

### Constraints

- `1 <= ledger.length <= 8`
- every entry holds exactly three integers
- `0 <= payer < 12` and `0 <= payee < 12`
- `payer != payee`
- `1 <= amount <= 100`

## Hints

### Hint 1

The individual entries stop mattering once you add them up. Fold the ledger
into one net figure per person; two ledgers producing the same net figures need
the same number of payments.

### Hint 2

People sitting at zero can be dropped. Suppose the remaining `n` people are
split into groups whose net figures each add up to zero. A group of size `s`
can be cleared with `s - 1` payments — pass the running total along a chain —
and it cannot be done in fewer, since fewer payments leave someone untouched.

### Hint 3

So the answer is `n` minus the largest number of zero-summing groups the people
can be split into, and every group is a subset of at most a dozen values. Mark
which subsets sum to zero, then find the best split by recursion over subsets:
for a set of people, try each zero-summing subset of it as one group and solve
the rest.
