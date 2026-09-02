# Allowances in Eights

## Description

You have `money` dollars to hand out among `children` recipients, and
the payout must obey three rules:

- every dollar gets handed out;
- each recipient walks away with at least 1 dollar;
- no recipient walks away with exactly 4 dollars.

Return the greatest number of recipients who can finish with exactly 8
dollars under these rules, or `-1` if no legal payout exists at all.

### Example 1

```text
Input: money = 25, children = 5
Output: 2
Explanation: Two recipients can finish with 8 dollars each; hand 3
dollars to each of the other three (8 + 8 + 3 + 3 + 3 = 25, and nobody
holds 4). Three eights would need 24 dollars, leaving less than a
dollar for the two remaining children, so 2 is the most.
```

### Example 2

```text
Input: money = 8, children = 2
Output: 0
Explanation: Giving one child the full 8 would leave the other with
nothing, which breaks the at-least-1 rule. Splitting the pot, say 3 and
5, keeps both children paid but produces no eights.
```

### Example 3

```text
Input: money = 13, children = 3
Output: 1
Explanation: One child takes 8, and the other two split the remaining 5
as 2 and 3 — splitting it as 1 and 4 would be illegal. Two eights would
cost 16, more than the pot.
```

### Example 4

```text
Input: money = 1, children = 2
Output: -1
Explanation: Two children cannot each receive at least 1 dollar from a
single dollar, so no legal payout exists.
```

### Constraints

- `1 <= money <= 200`
- `2 <= children <= 30`

## Hints

### Hint 1

Fix a candidate k and ask whether the money can be paid out legally
with k recipients ending at exactly 8.

### Hint 2

Try k from its largest candidate downward and settle on the first k
that works; if none does, the answer is -1.
