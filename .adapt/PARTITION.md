# Splitting the remaining adaptation across four main agents

The work left after the pre-split base of 195 is divided into parts that can
be worked at the same time by independent main agents without any one's data
landing on another's.

The first split made two halves. Part A's remainder was then split again
three ways, because one session could not keep eight subagents alive against
the session pool and its half fell behind Part B's.

| Part | File | To do | Notes |
| --- | --- | --- | --- |
| A | `.adapt/part-a.json` | **0 — complete** | 87 adapted; inbox drained, shard closed |
| B | `.adapt/part-b.json` | 201 | plus the 117 it has already finished |
| C | `.adapt/part-c.json` | 141 | 89 from the A/C/D split, plus 52 handed back by A |
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

## Part A hands 39 back to C (2026-08-19)

Part A was told to finish a short tail rather than its full share, so the
39 problems it had not yet dispatched moved to Part C, leaving A with 18:
the 3 still in flight in `wave-a-06` plus 15 in `wave-a-07` .. `wave-a-09`.
The in-flight three were deliberately excluded from the transfer — moving a
key an agent is mid-way through would have two parts writing one bundle.

`part-a.json` was rewritten to A's true scope (82 done + 18 to do), so it no
longer lists work A will not do. `part-c.json` grew from 89 to 128. No family
group was split: none of the 54 candidates had a sibling among them.

One family does span the boundary, and it predates this transfer:
`1201_ugly-number-iii` sits in A while `0264_ugly-number-ii` is already
adapted in the frozen base as `0264_nth-five-smooth-number`. The sibling is
finished, so there is no coordination problem — A's agent just reads the
base ledger and matches the idiom.

## Part A closes out; the rest of its tail goes to C (2026-08-19)

Part A is being wound down to whatever its agents already had in hand, so
the 5 problems in the undispatched `wave-a-09` moved to Part C as well
(C: 128 -> 133) and that wave file was deleted. `part-a.json` is now
84 finished + 11 in flight across `wave-a-06` (1 left), `wave-a-07` and
`wave-a-08`.

The boundary is *dispatched vs not*, not an ID range: a key an agent is
already working cannot move without two parts writing one bundle. When
those 11 land, Part A is complete and `.adapt/incoming/` should stay
empty — any later fragment there would be a stray.

## C+D+E re-divided into five owner-less parts (2026-08-19 ~03:30)

The combined C, D and E territories (141 + 89 + 102 = 332, none
dispatched, no shard history) were re-sliced into five almost-equal
parts:

| Part | File | To do |
| --- | --- | --- |
| C | `.adapt/part-c.json` | 67 |
| D | `.adapt/part-d.json` | 67 |
| E | `.adapt/part-e.json` | 66 |
| F | `.adapt/part-f.json` | 66 |
| G | `.adapt/part-g.json` | 66 |

**None of these five parts is owned by any agent or session until
claimed.** A session claims a part by appending a line under this
heading naming itself and the part; until then the part files are inert
lists. Inboxes `incoming-<part>/`, shards `ledger-<part>.json`,
`adapt_merge.py --part <p>` and `adapt_remaining.py <p>` exist for all
seven letters. Agent instructions: `PART-B-CHUNK.md` plus the thin
per-part delta files (`PART-E-CHUNK.md`, `PART-F-CHUNK.md`,
`PART-G-CHUNK.md`; C and D use `PART-B-CHUNK.md` directly with their own
inbox paths).

- Codex `/root` session claimed Part C on 2026-08-19.

Two bookkeeping notes. First, `part-b.json` was pruned to B's true
territory (216 = its finished + remaining + blocked) so the old E keys
it still listed no longer shadow the new parts in `adapt_remaining.py`.
Second, no family group spanned the union (the earlier splits had kept
them whole), so the five-way cut is by plain id order and stays
family-safe.

`1201_ugly-number-iii` moved to C with the rest. Its sibling
`0264_ugly-number-ii` is already adapted in the frozen base as
`0264_nth-five-smooth-number`, so whoever takes it should match that
idiom rather than invent a new one.

## Part A is complete (2026-08-19)

Part A finished with **87 adapted**, `.adapt/ledger-a.json` closed, and
`.adapt/incoming/` drained to empty. `part-a.json` now lists exactly those
87 and nothing else, so `--part a --check` reports 0 pending forever after.
The wave files `wave-a-01` .. `wave-a-08` were consumed; 07 and 08 were
deleted along with 09 because their unstarted keys moved on.

Part A was wound down deliberately rather than run to exhaustion, so its
remaining queue went to Part C in three transfers: 39, then 5, then the
final 8. Part C grew 89 → 141. Nothing was dropped and nothing was
duplicated — every key A ever owned is either in `ledger-a.json` or in
`part-c.json`.

**The one salvage.** `1124_longest-overworked-stretch` was fully authored
when its agent was stopped — seven starters, seven solutions, statement,
cases — but had no ledger fragment, which is the only thing that makes a
bundle real. Rather than delete it, the gates and the local judge were
re-run (all green, 7/7 languages, 17/17 cases) and the fragment plus report
were reconstructed from the bundle and the source. `.adapt/report/1124_*.md`
records that its report is reconstructed rather than agent-authored.

**Interrupting cleanly.** The wind-down cut at *problem boundaries*, never
mid-bundle: agents were told to finish only the problem in hand and to
delete anything not finishable. That is why the tail left exactly one
complete-but-unrecorded bundle and zero scrap. The eight keys that moved to
C had no files on disk at all, so C starts them clean.

**Not inherited by C, but worth knowing.** Three adapted bundles judge with
`comparison: exact` on problems whose specifications admit several valid
answers — `0753` (any shortest string), `0652` (root order unspecified) and
`0943` (any shortest superstring). All three are pre-existing source
defects, not adaptation errors, and all were deliberately left alone
because `comparison` is a kept field. `0943` additionally chose examples
with a provably unique optimum so nothing rides on the tie-break. These
want one central decision, not per-bundle patches.
