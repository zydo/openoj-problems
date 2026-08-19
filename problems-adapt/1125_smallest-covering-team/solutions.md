# Solutions — Smallest Covering Team

## Bitmask Dynamic Programming

Sixteen required skills at most means every coverable set of them is a
16-bit pattern — bit `t` on when `req_skills[t]` is already provided.
Reduce each person to the pattern of skills they contribute and the task
turns into the small-instance set-cover DP: reach the all-ones pattern
through as few pattern-unions as possible, each union being one new
member. The state space is tiny enough to enumerate exactly, so no greedy
approximation is needed.

The table maps each reachable pattern to the shortest member list found
for it, seeded with `{0: []}`. Members enter in index order; each one is
OR-ed into every reachable pattern, producing a candidate list one longer,
kept only when the resulting pattern is new or the incumbent list for it
is longer. Writes are buffered per member and merged afterwards, which
stops one person from joining a chain twice in the same round. A person
with an empty pattern can never improve any entry, so they drop out on
their own.

Why this finds a minimum: every team is an ordered subset of the people,
and sweeping members in index order visits each subset's best ordering —
some prefix of the sweep has accumulated exactly that subset's pattern.
In Example 2 (skills sailing, diving, nav, radio), the two halves 0011
(person 0) and 1100 (person 1) union straight to 1111 with the list
`[0, 1]`; the empty-skilled person 2 touches nothing, and the later
overlapping pairs (0101, 1001) cannot produce a one-member full pattern,
so two stands. The recorded team for the all-ones pattern is the answer,
sorted for determinism.

**Complexity:** `O(P * 2^S * S)` time, `O(2^S * S)` space, for `P` people
and `S <= 16` required skills.
