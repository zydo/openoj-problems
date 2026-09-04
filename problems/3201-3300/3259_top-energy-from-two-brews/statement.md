# Top Energy From Two Brews

## Description

A nutritionist hands you two energy brews, A and B, described by the
equal-length arrays `brewA` and `brewB` of length `n`: `brewA[i]` and
`brewB[i]` are the boost you would get from each brew during hour `i`.

You drink exactly one brew per hour for `n` hours. You may switch brews
whenever you like, but every switch costs you: the hour right after a
switch must be a cleansing hour with no brew at all and no energy gained.

Return the largest total energy you can collect across the `n` hours. Your
very first hour may use either brew.

### Example 1

```text
Input: brewA = [5,1,2], brewB = [1,4,3]
Output: 8
Explanation: Sticking with brew A throughout earns 5 + 1 + 2 = 8, and no
switching schedule beats it.
```

### Example 2

```text
Input: brewA = [2,7,1,5,4], brewB = [6,3,8,1,2]
Output: 21
Explanation: Drink brew B for the first three hours for 6 + 3 + 8, sit out
the cleanse hour, then finish with brew A's 4 — 21 in total.
```

### Constraints

- `n == brewA.length == brewB.length`
- `3 <= n <= 10⁵`
- `1 <= brewA[i], brewB[i] <= 10⁵`

## Hints

### Hint 1

Think of the best total hour by hour, and keep two numbers: the best total
of a plan whose latest brew hour used A, and the same for B.

### Hint 2

Staying on the same brew extends the previous hour's plan, while a switch
cannot skip the cleanse hour — so a plan drinking A at hour `i` either
drank A at hour `i - 1`, or drank B at hour `i - 2` and idled through
hour `i - 1`.

### Hint 3

Both recurrences only look back two hours, so two rolling pairs of values
replace the full tables and the sweep runs in linear time.
