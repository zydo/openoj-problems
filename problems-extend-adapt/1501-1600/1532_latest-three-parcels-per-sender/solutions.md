# Solutions — Latest Three Parcels per Sender

## Rank each sender's parcels by recency with a window function

`ROW_NUMBER() OVER (PARTITION BY sender_id ORDER BY ship_date DESC, parcel_id DESC)`
numbers every parcel within its own sender's partition, starting at 1
for the most recent one. Ordering primarily by `ship_date DESC` puts
the newest parcel first; the secondary `parcel_id DESC` only ever
settles a same-date tie, which the one-parcel-per-day rule rules out
in practice but the window still resolves deterministically if the
data ever contains one. Filtering the ranked rows to `rn <= 3` keeps
exactly a sender's most recent three parcels — or every parcel they
handed in, if that is fewer than three, since the rank never climbs
past however many rows the partition holds.

The ranking lives in a derived table because the filter needs the
window's output, and a window function is evaluated after the `FROM`
clause but before any `WHERE` on its own result. The filtered rows
then join `Senders` to attach the display name and project the four
requested columns.

**Complexity:** `O(n log n)` time and `O(n)` space, where `n` is the
number of parcels — the window function sorts each sender's parcels by
date, and the join and projection are linear passes.
