# Solutions — Staff Under the Company Head

## Chain self-joins up the reporting tree

The reporting chain from a staff member to the head is at most four people
long — the member plus at most three managers above them. That bound turns
the traversal into a fixed number of self-joins: `s1` is a candidate
reporter, `s2` the person they answer to, `s3` the next link up, and `s4`
the one after that. Requiring one of `s2..s4` to be the head keeps exactly
the members whose chain reaches `staff_id = 1` within the depth guarantee —
a member with fewer managers above simply has some join alias coincide with
the head.

Two guards keep degenerate rows out of the result. The head itself is
excluded (`s1.staff_id != 1`) — they answer to nobody, and the question
asks for reporters. And `s1.reports_to != s1.staff_id` drops anyone whose
row claims to be their own manager outside the head (the example's Omar),
which would otherwise form a one-row cycle that never reaches the head but
costs join rows trying.

**Complexity:** `O(n^4)` worst-case join nesting — in practice the primary-
key lookups along each three-link chain keep it near-linear for realistic
org tables; `O(d)` space for the chain bindings.
