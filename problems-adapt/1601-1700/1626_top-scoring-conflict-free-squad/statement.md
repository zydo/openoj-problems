# Top-Scoring Conflict-Free Squad

## Description

You are picking a squad from a roster of candidates. Player `i` has a
score `scores[i]` and an age `ages[i]`; the squad's value is the sum of
its members' scores, and you want that sum as large as possible.

The only restriction concerns **friction**: two players grind against
each other when the younger one has a strictly higher score than the
older one. A squad containing such a pair is not allowed. Players of the
same age never produce friction with each other, whatever their scores,
and a squad may include any number of same-age players.

Given `scores` and `ages`, return the largest total score a friction-free
squad can reach.

### Example 1

```text
Input: scores = [9,7,12,5,16], ages = [3,1,6,2,8]
Output: 44
Explanation: The only friction is between the 7-point player (age 1) and
the 5-point player (age 2), since the younger of the two outscores the
older. Keeping the 7-point player and dropping the 5-point one leaves
7 + 9 + 12 + 16 = 44; dropping the 7-point player instead only reaches 42.
```

### Example 2

```text
Input: scores = [3,19,8,12], ages = [7,2,5,9]
Output: 20
Explanation: The 19-point player is the youngest and outscores every
older player, so it conflicts with all of them and must be left out.
Among the rest, the 3-point player (age 7) is older than the 8-point
player (age 5), so those two cannot sit together either. The best squad
takes the 8-point and 12-point players: 8 + 12 = 20.
```

### Example 3

```text
Input: scores = [6,9,7,8,5], ages = [4,2,4,1,3]
Output: 18
Explanation: The two youngest players score 8 and 9 — more than every
older player — so either of them conflicts with anyone older, and the
best pair using only those two totals 17. Taking the three oldest
players instead (scores 5, 6, 7; the last two share age 4, which is
allowed) yields 5 + 6 + 7 = 18.
```

### Constraints

- `1 <= scores.length == ages.length <= 1000`
- `1 <= scores[i] <= 10^6`
- `1 <= ages[i] <= 1000`

## Hints

### Hint 1

Order the players by age, breaking ties by score. Read from youngest to
oldest and every squad becomes a left-to-right selection.

### Hint 2

Once a player is in the squad, every later pick must score at least as
much — otherwise the newer, older pick would be outscored.
