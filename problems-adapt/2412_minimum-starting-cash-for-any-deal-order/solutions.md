# Solutions — Minimum Starting Cash for Any Deal Order

## Worst-case peak formula

Call a deal **losing** when its rebate is smaller than its price: settling it
shrinks your cash by `price - rebate`, permanently. Call every other deal
**profitable** — whatever it charges up front, it hands back in full, so the
only strain it can create is temporary.

The profitable deals cannot change your final cash, and each losing deal
removes exactly `price - rebate`, so the total amount that ever leaves your
pocket is `total_drain = sum(price - rebate)` over the losing deals, the same
in every arrival order. The order that hurts is therefore the one that stacks
demands on a low balance: all losing deals first, and among them the one with
the largest rebate last. Just before that final losing deal you must still
hold its whole price while every other drain has already happened, which
works out to a starting cash of `total_drain + max rebate among losing deals`.

A profitable deal binds, if at all, at the moment your cash is lowest —
straight after the losing block, when exactly `total_drain` has leaked away.
So the profitable group contributes `total_drain + max price among profitable
deals`, and pulling any profitable deal earlier only adds cash before later
demands, so it can never make an order harder. An exchange argument in the
same spirit shows interleaving the two groups never pushes the requirement
above either bound: the answer is

```text
total_drain + max(max rebate among losing deals, max price among profitable deals)
```

Worked through `[[7,1],[2,0],[5,6]]`: the losing deals `[7,1]` and `[2,0]`
drain 6 and 2, so `total_drain = 8` and the largest losing rebate is 1; the
profitable deal `[5,6]` has price 5. The answer is `8 + max(1,5) = 13`, and
the tight order `[2,0]`, `[7,1]`, `[5,6]` walks the balance 13 → 11 → 5 → 6,
touching exactly zero slack at the last payment.

A single pass accumulates the three aggregates — total drain, largest losing
rebate, largest profitable price — with no sorting and no simulation of
orders. An input containing only one kind of deal simply leaves one of the
two maxima at zero.

**Complexity:** `O(n)` time, `O(1)` space.
