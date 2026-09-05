# Solutions — Rapid Repeat Verifications

The answer is the set of members who have two verification prompts no more
than 24 hours apart.

## Self-join on the prompt timestamps

A member qualifies as soon as any two of their prompts were sent no more
than 24 hours apart, so the query joins `Verifications` to itself on
`member_id` with `c1.sent_at < c2.sent_at`. That enumerates every ordered
pair of a member's prompts; the inequality keeps only the pairs whose gap
falls inside the window, and `SELECT DISTINCT member_id` collapses the
surviving rows to one per qualifying member. The strict `<` on the
timestamps visits each unordered pair once and can never match a prompt
to itself, since the primary key forbids duplicate `(member_id, sent_at)`
rows.

The gap is measured in seconds with `strftime('%s', c2.sent_at) -
strftime('%s', c1.sent_at)`, SQLite's Unix-epoch conversion, and pairs
survive when the difference is at most `86400`. Integer second arithmetic
makes the "exactly 24 hours apart" boundary exact: two prompts 24 hours
apart count as within the window, while 24 hours plus one second do not —
the example's member 11, 24 hours and 1 second apart, is correctly
excluded. The `Registrations` table is never consulted, because the check
involves only the times the prompts were sent.

The self-join and distinct scan each prompt a constant number of times,
but a single member with many prompts still yields every pair.

**Complexity:** `O(n²)` time, `O(n)` space, where `n` is the number of
prompts sent (every pair of a member's prompts may be examined in the
worst case).
