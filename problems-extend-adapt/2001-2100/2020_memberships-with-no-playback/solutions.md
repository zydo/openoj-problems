# Solutions — Memberships With No Playback

## Count overlapping memberships without a 2021 playback

A membership intersects 2021 exactly when it starts no later than December 31
and ends no earlier than January 1. Filter `Memberships` by those inclusive
boundaries, then count the members for which a correlated `NOT EXISTS` finds
no `Playbacks` row for the same member dated within the year.

`NOT EXISTS` is unaffected by duplicate playback rows and avoids the null
behavior of `NOT IN`. The outer `COUNT(*)` always emits one row, so an empty
input or a set where every qualifying member watched something still returns
the required zero under the `member_count` column.

**Complexity:** `O(S * T)` time and `O(1)` extra space for `S` memberships and `T` playbacks.
