## 0456 — 132 Pattern

- New id / title / slug: 456 / Ascent Then Partial Retreat / `ascent-then-partial-retreat`
- Old → new API: `find132pattern` → `ascentretreat` (same token in go / rust /
  typescript — see note); parameter `nums` kept
- Core algorithm / difficulty: right-to-left monotonic decreasing stack tracking the best middle candidate / H3 (unchanged)
- Statement rewritten from spec: yes — the numeric nickname replaced by the shape it names (climb, overtake, partial fallback)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,4,7,9] → false` (never retreats), `[4,1,6,3] → true` (1 < 3 < 6), `[-2,5,3,0] → true` (three qualifying triples, negatives)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) compatibility ✓ stale ✓ overlap ✓

### Notes

- **Gate limitation, pre-existing:** when a source's rust entrypoint equals
  its method token (`find132pattern` in all four slots here),
  `adapt_gates.py`'s sequential renames clobber the rust file — the method
  rename lands first, so the rust-specific rename never fires and the
  compatibility run fails E0599 for *any* snake_case rust entrypoint. This
  already affects `0198_maximum-non-adjacent-loot` and
  `0131_palindrome-partitions`, which fail the gate today. Workaround used
  here (and the bank's own precedent from `0033 lookup` / `0056 coalesce`):
  pick one single-token name reused verbatim as method and all three
  entrypoints. Worth a gate fix upstream (apply rust rename before the
  generic method rename, or apply per-language renames to that language's
  file only). In my chunk this also applies to 0470, 0471, 0473.
- `ascentretreat` is a compound-lowercase token in the style of the source
  `makesquare` (0473); multi-word camelCase was not usable here.
