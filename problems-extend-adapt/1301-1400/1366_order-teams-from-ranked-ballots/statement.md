# Order Teams From Ranked Ballots

## Description

A contest scores its entrants through ranked ballots: every voter submits one
full ordering of all the teams, best to worst. The overall standing is built
position by position — the team named first on the most ballots takes the
title, and whenever a group of teams collects the same number of votes at the
position being decided, the next position down breaks the tie, then the one
after that, and so on. Teams that remain deadlocked after every position has
been consulted finish in alphabetical order.

Given the array of ballots `votes`, return one string listing all the teams
in that standing, winner first.

### Example 1

```text
Input: votes = ["PBQ","QBP","PBQ"]
Output: "PQB"
Explanation: P is named first on two ballots against one for Q and none for
B, so P wins outright. Q's lone first-place vote beats B's none, so second
place is settled without looking deeper.
```

### Example 2

```text
Input: votes = ["DGAE","GDEA","AGDE"]
Output: "GDAE"
Explanation: D, G, and A each take one first-place vote. At second place G
has two votes to D's one and A's zero, which fixes the whole podium; E never
leaves the bottom.
```

### Example 3

```text
Input: votes = ["AB","BA"]
Output: "AB"
Explanation: The two ballots are exact mirrors, so both teams tie at every
position and the alphabetical fallback orders them.
```

### Example 4

```text
Input: votes = ["TRAM","MART","RTMA"]
Output: "RTMA"
Explanation: R, T, and M each get one first-place vote, and R and T even tie
through second place; the third position separates them — R has one vote
there, T none — leaving M next and A last.
```

### Constraints

- `1 <= votes.length <= 1000`
- `1 <= votes[i].length <= 26`
- `votes[i].length == votes[j].length` for `0 <= i, j < votes.length`
- `votes[i][j]` is an English uppercase letter.
- The letters within any single ballot are distinct.
- Every ballot contains exactly the same letters as `votes[0]`.

## Hints

### Hint 1

For each team, tally one counter per ballot position — how many voters put
that team there. These vectors hold everything the ballots say.

### Hint 2

Sort the teams with those vectors as the key, highest counts first, and let
the team letter act as the final, never-tied key.
