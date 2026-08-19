# Splitting the remaining adaptation across four main agents

The work left after the pre-split base of 195 is divided into parts that can
be worked at the same time by independent main agents without any one's data
landing on another's.

The first split made two halves. Part A's remainder was then split again
three ways, because one session could not keep eight subagents alive against
the session pool and its half fell behind Part B's.

| Part | File | To do | Notes |
| --- | --- | --- | --- |
| A | `.adapt/part-a.json` | 90 | plus the 49 it has already finished |
| B | `.adapt/part-b.json` | 201 | plus the 117 it has already finished |
| C | `.adapt/part-c.json` | 89 | new |
| D | `.adapt/part-d.json` | 89 | new |

`part-a.json` lists everything Part A owns, finished and unfinished, so it
stays comparable with `part-b.json`. `part-c.json` and `part-d.json` list
to-do only — those parts have no history yet.

## What the split is actually protecting

Two agents adapting different problems collide in only a few places, and
every one of them is a *shared file*, never a shared bundle:

| Surface | Risk | Resolution |
| --- | --- | --- |
| `.adapt/ledger.json` | every part appends, every commit conflicts | frozen base; each part writes its own shard |
| `.adapt/incoming/` | one part merges another's fragments | one inbox per part |
| `problems-adapt/<key>/` | `git add -A` sweeps another part's half-written bundles | stage explicitly from your own ledger (see below) |
| `MAPPING.md` | generated file, several parts regenerate it | Part A regenerates; B, C and D never run `adapt_mapping.py` |
| `families.json` | a sequel pair split across parts needs two agents to agree on one title | every split keeps sibling groups whole |
| `problems-adapt/<key>/`, `.adapt/report/<key>.md` | — | per-bundle paths, disjoint by construction |

## The rules

1. **Adapt only what your part file lists.** If a source is not in your
   file, it is not yours, even if it looks unclaimed.
2. **Fragments go to your part's inbox**, and you merge with your part's
   flag:
   | Part | agents write to | merge with | shard |
   | --- | --- | --- | --- |
   | A | `.adapt/incoming/` | `--part a` | `.adapt/ledger-a.json` |
   | B | `.adapt/incoming-b/` | `--part b` | `.adapt/ledger-b.json` |
   | C | `.adapt/incoming-c/` | `--part c` | `.adapt/ledger-c.json` |
   | D | `.adapt/incoming-d/` | `--part d` | `.adapt/ledger-d.json` |

   Part A keeps the unsuffixed inbox because its agents were dispatched
   against it and renaming it underneath them would strand their fragments.
3. **`.adapt/ledger.json` is frozen** at the 195 entries predating the
   split. Nobody appends to it. `--part` is required for all new work; the
   flagless form exists only to read that history.
4. **Only Part A runs `adapt_mapping.py`.** `MAPPING.md` is generated from
   the base plus every `ledger-*.json`, so Part A's regeneration already
   covers B, C and D. Two agents rewriting one generated file is precisely the
   conflict this split exists to prevent.
5. **Name your wave files apart** — `wave-<part>-*.json` — so dispatch
   lists never overwrite each other.
6. **Rebase before pushing** (`git pull --rebase`). The touched files are
   disjoint, so rebases apply cleanly; a straight push race is the only
   remaining way to lose work.

## Why the ID ranges interleave

Parts do not occupy clean ID ranges, and the A/C/D split interleaves them
heavily. That is deliberate: a group of siblings is assigned as a unit, so
`jump-game` (1345, 1696, 2297) travels together whichever part takes it.
**Use the part files, never an ID cutoff** — the boundary is by family, not
by number.

## Finishing

When every part is drained, the shards fold back into `ledger.json` and the
per-part inboxes and shard files go away. Until then the shards are the
record, and `adapt_merge.py --part <p> --check` reports that part's count
alongside the true total across all shards.

## Staging: `problems-adapt/` is shared ground

The two sessions share one working tree, so `git add -A` sweeps up whatever
the *other* part happens to have half-written at that moment. Excluding
`.adapt/incoming-b/`, `.adapt/ledger-b.json` and `.adapt/holdback-b/` is not
enough — bundle directories under `problems-adapt/` carry no part marker at
all, and Part A committed a dozen of Part B's in-progress bundles before this
was noticed.

Nothing is lost when that happens: an unrecorded bundle is inert, and the
owning part commits its finished version over the top. But the commit
message then lies about its scope, so stage explicitly instead:

    # Your part: the pre-split base plus your own shard, and nothing else
    python3 - <<'PY' > /tmp/pa_paths.txt
    import json, pathlib
    def load(p):
        f = pathlib.Path(p)
        return json.loads(f.read_text())["entries"] if f.exists() else []
    for e in load('.adapt/ledger.json') + load('.adapt/ledger-a.json'):  # your shard
        print(f"problems-adapt/{e['adapted']}")
    PY
    git add .adapt/ledger-a.json .adapt/part-a*.json .adapt/wave-a-*.json \
            .adapt/report MAPPING.md $(cat /tmp/pa_paths.txt)

A bundle only becomes a part's to commit once it is *in that part's ledger*.
Until then it is somebody's work in progress and not yours to snapshot.

## Part B → B + E (2026-08-18 ~22:30)

With 117 of 318 merged and one blocked source, Part B's remainder split:
the Part B session keeps everything already dispatched (waves 04, 08–15)
plus undispatched waves 16–18 — recorded in `.adapt/part-b-remaining.json`
(98 at split time) — and waves 19–27 (102 problems, including the 8 design
and 2 SQL sources from the old wave-b-27) became **Part E**:
`.adapt/part-e.json`, inbox `.adapt/incoming-e/`, shard
`.adapt/ledger-e.json`, agent instructions `.adapt/PART-E-CHUNK.md`
(a thin delta over `PART-B-CHUNK.md`). The B session set up the E
infrastructure and commits it; dispatching E belongs to whichever session
takes Part E. The blocked source `2167` stayed with B
(`.adapt/blocked-b.md`).
