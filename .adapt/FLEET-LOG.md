# Variant wave II — fleet log

Recreated 2026-09-05 per the fleet-discipline rules in openoj/CLAUDE.md.

## Rate-limit events

- 2026-09-05 ~18:34 UTC — agent "0648 shortest-root-substitution" died:
  429 "Rate limit reached for requests" (per-minute class, concurrency-
  driven). Target was 5 concurrent agents. Response: step target down to
  4 (halve, floor 4); resume the dead agent when a slot frees instead of
  launching fresh. Batch 1 ran 5 concurrent with no 429s, so the pool is
  near its edge at 5.
- 2026-09-05 ~19:05 UTC — agent "0189 roll-the-array-rightward" died: 429,
  same per-minute class. Target was 4 concurrent (already stepped down).
  Agent had finished both file edits; only the JSON sanity check and the
  verify gate remained. Resumed in place. No further step-down (already at
  the floor); events are ~30 min apart, consistent with pool edges rather
  than sustained overload.
