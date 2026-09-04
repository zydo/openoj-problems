# Count Bounded Sequences With a Given Sum

## Description

Count the sequences of `n` integers `t_1, t_2, ..., t_n` such that:

- every term satisfies `1 <= t_i <= k`, and
- the terms add up to exactly `target`.

Sequences are ordered: `(1, 4)` and `(4, 1)` are two different sequences.

Of the `k^n` sequences in total, return how many meet both conditions.
Because the count can be enormous, report it modulo `10^9 + 7`.

### Example 1

```text
Input: n = 2, k = 4, target = 5
Output: 4
Explanation: (1,4), (2,3), (3,2), (4,1) — four ordered pairs of terms in
1..4 sum to 5.
```

### Example 2

```text
Input: n = 3, k = 2, target = 6
Output: 1
Explanation: The largest possible sum is 3 * 2 = 6, reached only by
(2, 2, 2).
```

### Example 3

```text
Input: n = 2, k = 6, target = 13
Output: 0
Explanation: Two terms of at most 6 cannot reach 13, so no sequence
qualifies.
```

### Example 4

```text
Input: n = 25, k = 12, target = 130
Output: 886166690
Explanation: The raw count far exceeds 10^9 + 7; the answer is that count
modulo 10^9 + 7.
```

### Constraints

- `1 <= n, k <= 30`
- `1 <= target <= 1000`

## Hints

### Hint 1

The sequences cannot be listed one by one — there are up to `30^30` of
them. But the count has optimal substructure: knowing how many partial
sequences of `i` terms reach each running sum tells you the same for `i + 1`
terms.

### Hint 2

Extending a partial sequence by one term, the new term contributes some
value `v` with `1 <= v <= k`. So the count for `i` terms at sum `t` is the
sum of the counts for `i - 1` terms at `t - v`, over every legal `v`.

### Hint 3

Keep one row of counts (indexed by sum) and rebuild it per term; reduce
modulo `10^9 + 7` as you write each entry so the numbers stay small.
