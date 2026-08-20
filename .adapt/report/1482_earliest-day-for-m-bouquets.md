## 1482 — Minimum Number of Days to Make m Bouquets

- New id / title / slug: 1482 / Earliest Day for m Bouquets / `earliest-day-for-m-bouquets`
- Old → new API: `minDays` → `earliestDay` (go `earliestDay`, rust `earliest_day`, ts `earliestDay`); parameter `bloomDay` → `openDay` (rust `bloom_day` → `open_day`); `m`, `k` kept
- Core algorithm / difficulty: binary search on the answer + greedy run-counting feasibility sweep / H3 (unchanged)
- Statement rewritten from spec: yes — garden framing kept (it is the computation), prose and example narration written from the spec
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[5,12,4,12,3] m=3 k=1 → 5`, `[4,8,15,8,4] m=2 k=3 → -1` (not enough flowers), `[2,7,3,4,3] m=1 k=2 → 4` (adjacency binds; open-but-scattered day 3 fails) — all cross-checked by a per-day brute force
- Constraints: domain unchanged (n ≤ 10⁵, openDay[i] ≤ 10⁹, m ≤ 10⁶, 1 ≤ k ≤ n), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The `[x, _, x, _, x]`-style day snapshots in the examples are part of the
  task's own notation, not the source's wording; the gate's literal scan
  only flags arrays over ≥3-symbol alphabets, so `x`/`_` rows are safe.
