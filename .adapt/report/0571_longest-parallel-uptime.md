## 571 — Maximum Running Time of N Computers

- New id / title / slug: 571 / Longest Parallel Uptime / `longest-parallel-uptime`
- Old → new API: `maxRunTime` → `maxUptime` (go `maxUptime`, rust `max_uptime`, ts `maxUptime`); parameters `n`, `batteries` kept
- Core algorithm / difficulty: binary search on the answer; feasibility sum(min(b, t)) >= n·t / H3 (unchanged)
- Statement rewritten from spec: yes — the swap rules restated (fit one per computer, swap freely at whole-minute marks, no recharge)
- Examples newly constructed: yes (structure-preserving: **yes** for both figures — equal-charge families scaled, swap schedule isomorphic)
  - `2, [6,6,6] → 9` (three batteries, two swaps at minutes 3 and 6), `2, [2,2,2,2] → 4` (four equal batteries in pairs), `2, [5,4] → 4` (no spares, unequal pair)
  - verified no public input duplicates a hidden one
- Constraints: domain unchanged (n ≤ batteries count ≤ 10⁵, charges 1..10⁹), presentation rewritten
- Skeletons regenerated: all 7
- Figures: **labels updated** — charge numbers, swap timestamps, captions, and comments in both panels; two fill-rect widths widened 15→22 to match the new mid-panel charges
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Swap-schedule figures fix the charge *ratios*: any [T,T,T] with swaps at
  T/2 and T reproduces the panel structure, so scaling T is the
  structure-preserving lever (3→6 here, 1→2 in example 2). Fill widths are
  proportional, so non-trivial scalings need width edits alongside labels —
  still attribute swaps, no path surgery.
- Fifth alt-text catch. The rule is now standing practice in this chunk:
  compose figure alt text from scratch, before the overlap gate sees it.
