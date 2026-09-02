# Solutions — Confirmed The Very Next Day

## One EXISTS probe per signup against the calendar next day

A member qualifies exactly when their signup owns a `Verified` message
stamped on the calendar day after joining. `DATE(e.joined_at, '+1 day')`
computes that date directly from the stored datetime — SQLite's date
modifiers shift by whole days, so the time-of-day part is discarded and only
the date of the next calendar day remains — and `DATE(t.acted_at)` strips
the candidate message's time. The correlated `EXISTS` therefore asks, for
each row of `Signups`: does any message with this `signup_id`, action
`'Verified'`, land on that exact day? The database short-circuits at the
first match per signup.

Rows that must not qualify fail the probe naturally: messages on the signup
day itself (the modifier moves to tomorrow first), on later days (the dates
no longer compare equal), and `'Not Verified'` actions regardless of timing
(the action filter discards them before the date check). Members with no
messages at all never enter the inner query, and members confirmed only on
later days stay out — which is what the ordering clause then reports
plainly: `ORDER BY member_id` returns the survivors in ascending order.

**Complexity:** `O(m log m)` time, `O(1)` extra space per probe — with an
index on `Messages.signup_id` each of the `m` signups probes its own
messages in logarithmic time; overall work scales as
`O(n + Σ messages(signup))`.
