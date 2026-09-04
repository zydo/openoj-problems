# Most-Walked Three-Site Trail

## Description

You are given three parallel arrays — `username`, `timestamp`, and
`website` — one entry per visit: user `username[i]` opened website
`website[i]` at time `timestamp[i]`.

A **trail** is an ordered list of three websites, repetitions allowed;
`["news", "shop", "news"]` is a trail. A user walks a trail when three of
their visits, taken in increasing time order, land on the trail's sites in
that order — the three visits do not have to be consecutive. The **reach**
of a trail is the number of distinct users who walk it; a user who walks
the same trail several times still counts once.

Return the trail with the largest reach. If several trails tie for the
largest reach, return the lexicographically smallest of them.

### Example 1

```text
Input: username = ["ann","ann","ann","ann","bob","bob","bob"],
       timestamp = [1,2,3,4,5,6,7],
       website = ["shop","blog","shop","cart","blog","shop","cart"]
Output: ["blog","shop","cart"]
Explanation: Ann walks blog, then shop, then cart through her visits at
times 2, 3, and 4, and Bob walks the same trail with his three visits —
no other trail reaches two users.
```

### Example 2

```text
Input: username = ["ana","ana","ana","ben","ben","ben","cyd","cyd","cyd","dee","dee","dee"],
       timestamp = [1,2,3,4,5,6,7,8,9,10,11,12],
       website = ["red","tan","win","red","tan","win","red","tan","vex","red","tan","vex"]
Output: ["red","tan","vex"]
Explanation: red-tan-win and red-tan-vex both reach two users, so the tie
is settled by dictionary order, which favors the vex ending.
```

### Example 3

```text
Input: username = ["sam","sam","sam","sam"], timestamp = [40,10,30,20],
       website = ["den","ark","cove","bar"]
Output: ["ark","bar","cove"]
Explanation: Replay sam's visits by time — ark, bar, cove, den — then
every three-site trail ties at one user, and ark-bar-cove sorts first.
```

### Constraints

- `3 <= username.length <= 50`
- `1 <= username[i].length <= 10`
- `timestamp.length == username.length`
- `1 <= timestamp[i] <= 10⁹`
- `website.length == username.length`
- `1 <= website[i].length <= 10`
- `username[i]` and `website[i]` consist of lowercase English letters.
- At least one user has three or more visits.
- The `[username[i], timestamp[i], website[i]]` triples are all distinct.

## Hints

### Hint 1

Regroup the visits by user and replay each user's list in time order
before doing anything else.

### Hint 2

A user contributes at most one count per trail no matter how many times
they walk it, so tally trails against sets of users.

### Hint 3

Each user's time-ordered site list yields every trail they walk as a
three-element subsequence; with at most 50 visits per user, enumerating
all of those is cheap.
