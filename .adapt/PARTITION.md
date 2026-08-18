# Splitting the remaining adaptation between two main agents

The 635 problems left after the first 195 are split into two halves that can
be worked at the same time by two independent main agents without either
one's data landing on the other's.

- **Part A — `.adapt/part-a.json`, 317 problems.** Owned by the original
  session. Includes all 160 already in flight when the split was made.
- **Part B — `.adapt/part-b.json`, 318 problems.** Owned by the second
  session.

The two lists are disjoint and together are exactly `.adapt/remaining.json`.

## What the split is actually protecting

Two agents adapting different problems collide in only a few places, and
every one of them is a *shared file*, never a shared bundle:

| Surface | Risk | Resolution |
| --- | --- | --- |
| `.adapt/ledger.json` | both append, every commit conflicts | frozen base; each part writes its own shard |
| `.adapt/incoming/` | one part merges the other's fragments | one inbox per part |
| `MAPPING.md` | generated file, both regenerate it | Part A regenerates; Part B never runs `adapt_mapping.py` |
| `families.json` | a sequel pair split across parts needs two agents to agree on one title | the split keeps every sibling group whole |
| `problems-adapt/<key>/`, `.adapt/report/<key>.md` | — | per-bundle paths, disjoint by construction |

## The rules

1. **Adapt only what your part file lists.** If a source is not in your
   file, it is not yours, even if it looks unclaimed.
2. **Fragments go to your part's inbox**, and you merge with your part's
   flag:
   - Part A: agents write `.adapt/incoming/`, merge with
     `adapt_merge.py --part a` → `.adapt/ledger-a.json`
   - Part B: agents write `.adapt/incoming-b/`, merge with
     `adapt_merge.py --part b` → `.adapt/ledger-b.json`

   Part A keeps the original inbox path because its agents were dispatched
   against it and renaming it underneath them would strand their fragments.
3. **`.adapt/ledger.json` is frozen** at the 195 entries predating the
   split. Nobody appends to it. `--part` is required for all new work; the
   flagless form exists only to read that history.
4. **Only Part A runs `adapt_mapping.py`.** `MAPPING.md` is generated from
   the base plus every shard, so Part A's regeneration already covers
   Part B's work. Two agents rewriting one generated file is precisely the
   conflict this split exists to prevent.
5. **Name your wave files apart** — `wave-a-*.json` / `wave-b-*.json` — so
   dispatch lists never overwrite each other.
6. **Rebase before pushing** (`git pull --rebase`). The touched files are
   disjoint, so rebases apply cleanly; a straight push race is the only
   remaining way to lose work.

## Why the ID ranges look like they overlap

Part A ends at 2297 and Part B begins at 1866. That is deliberate: a group
of siblings is assigned as a unit, anchored to its earliest member, so
`jump-game` (1345, 1696, 2297) sits wholly in Part A. **Use the part files,
never an ID cutoff** — the boundary is by family, not by number.

## Finishing

When both parts are drained, the shards fold back into `ledger.json` and the
per-part inboxes and shard files go away. Until then the shards are the
record, and `adapt_merge.py --check` reports the true total across all three
files.
