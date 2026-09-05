# Council Voting Showdown

## Description

A ruling council is split between two rival factions, Radiant and
Dire. The council is voting, round after round, on whether to adopt a
sweeping change, and every member still holding voting rights gets to
act once per round, strictly in seating order.

On a member's turn, they take exactly one of two actions:

- **Strip a rival's rights**: permanently remove one opposing member's
  ability to vote, this round and every round afterward.
- **Declare victory**: if every remaining member with voting rights
  belongs to this member's own faction, declare victory for that
  faction and end the vote immediately.

You are given a string `council` describing seating order, where each
character is `'R'` for a Radiant member or `'D'` for a Dire member;
`n = council.length` members sit in that fixed order. Rounds proceed
from the first seat to the last, looping back to the first once the
last seat is reached, and any member who has already lost their rights
is simply skipped when their turn comes up.

Assuming every member plays the optimal strategy for their own
faction, determine which faction eventually declares victory. Return
`"Radiant"` or `"Dire"`.

### Example 1

```text
Input: council = "DRD"
Output: "Dire"
Explanation:
Seat 1 (Dire) acts first and strips seat 2's (Radiant, the only one)
rights. Seat 2 can no longer act. Seat 3 (Dire) then finds every
member still holding rights belongs to Dire, so Dire declares victory
in round 1.
```

### Example 2

```text
Input: council = "RDDR"
Output: "Radiant"
Explanation:
Round 1: seat 1 (Radiant) strips seat 2's rights, then seat 3 (Dire)
strips seat 4's rights. Only seats 1 and 3 remain.
Round 2: seat 1 (Radiant), acting before seat 3 comes around again,
strips seat 3's rights.
Round 3: seat 1 is the only member left holding rights, so Radiant
declares victory.
```

### Constraints

- `n == council.length`
- `1 <= n <= 10⁴`
- Every character of `council` is `'R'` or `'D'`.
