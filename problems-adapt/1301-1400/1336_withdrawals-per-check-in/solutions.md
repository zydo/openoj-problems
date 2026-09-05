# Solutions — Withdrawals per Check-In

## Approach: Left-join count per check-in, then a recursive tally

A check-in is identified by the pair (member_id, checkin_date), and every
withdrawal belongs to exactly one check-in — the one with the same member
and date, guaranteed to exist. So `Checkins LEFT JOIN Withdrawals` on both
columns, grouped by the pair, gives each check-in's withdrawal count, with
unmatched check-ins correctly counted as 0 (`COUNT(w.amount)` counts only
non-null right-side rows).

The output must contain every withdrawals_count from 0 up to the observed
maximum, including empty buckets. A recursive CTE (`tally`) generates the
integer sequence 0..max; joining it against the per-check-in counts (an
outer count over the grouped table) fills each bucket, 0 where no
check-in lands. The tally stops at the maximum observed count, exactly
where the statement says to stop.

**Complexity:** `O(C + W + M)` rows processed with `C` check-ins, `W`
withdrawals and `M` the maximum per-check-in count.
