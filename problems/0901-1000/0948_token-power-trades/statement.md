# Token Power Trades

## Description

You start with `power` energy and a score of 0. Each unplayed value in
`tokens` may be used once, in one of two ways:

- Spend `tokens[i]` power to play it face-up, allowed only when your current
  power is at least that value; this gains 1 score.
- Spend 1 score to play it face-down, allowed only when your current score is
  at least 1; this gains `tokens[i]` power.

You may stop at any time. Return the highest score reachable after any legal
sequence of plays.

### Example 1

```text
Input: tokens = [25,50,75,100], power = 50
Output: 2
Explanation: Play 25 face-up, trade 100 face-down, then play 50 and 75
face-up. The highest score reached is 2.
```

### Example 2

```text
Input: tokens = [10,20,30], power = 15
Output: 1
Explanation: Playing 10 face-up earns one point. Trading 30 back can make 20
affordable, but that trade spends the point, so the best score remains 1.
```

### Constraints

- `0 <= tokens.length <= 1000`
- `0 <= tokens[i], power < 10⁴`
