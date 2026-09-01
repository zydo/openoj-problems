# Solutions — Replies per Topic

## Distinct topics and distinct replies, then a counted left join

Duplicates run in both directions here — a topic row may repeat, and the
same reply may be recorded more than once — so both sides are de-duplicated
before they ever meet. `topics` keeps one row per `entry_id` among the
`reply_to IS NULL` rows; `replies` keeps one row per (`reply_to`,
`entry_id`) pair among the rest, which counts each distinct reply once no
matter how many times it was recorded.

A left join from topics to replies preserves topics with no replies —
`COUNT` over the unmatched rows' nulls reports zero, exactly the
`9 -> 0` case. Replies whose `reply_to` names an entry that is not a topic
in the table (entry 7, which answers the reply 8) simply match nothing and
vanish. Grouping by `topic_id` and ordering ascending finishes the report.

**Complexity:** `O(n log n)` time over the `n` feedback rows (the distinct
passes and the final sort), `O(n)` space.
