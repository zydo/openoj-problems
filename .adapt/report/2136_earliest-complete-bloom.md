## 2136 — Earliest Possible Day of Full Bloom

- New id / title / slug: 2136 / Earliest Complete Bloom / `earliest-complete-bloom`
- Old → new API: `earliestFullBloom` → `earliestCompleteBloom` (go `earliestCompleteBloom`, rust `earliest_complete_bloom`, ts `earliestCompleteBloom`); parameters `plantTime`, `growTime` kept
- Core algorithm / difficulty: exchange argument — plant slowest growers first; sweep accumulating plant prefix, answer max(prefix + grow) / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: **yes** — seed-id permutations of the figure schedules)
  - `[4,3,1] / [3,1,2] → 9`, `[2,1,3,2] / [1,2,2,1] → 9` (interleaved planting days), `[3] / [2] → 5` (single seed, no figure)
  - verified no public input duplicates a hidden one
- Constraints: domain unchanged (n ≤ 10⁵, times 1..10⁴), presentation rewritten
- Skeletons regenerated: all 7
- Figures: **labels updated** — the Gantt charts encode the schedule in their cell geometry, so the new data is an id-permutation of the old; row labels and per-seed comments relabeled, no geometry touched
- Gates: check ✓ verify ✓ (7/7 languages, 14/14 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Gantt/timeline figures have zero free values: the cell layout *is* the
  data. The only structure-preserving change is permuting entity ids, which
  changes every input array (stale-literal safe) while keeping the drawing.
  The optimum is invariant under permutation, so examples 1-2 keep output 9
  — varied example 3 instead.
- Fourth case of copied alt text tripping the overlap gate ("across days 0
  through 9"). Standing conclusion: always write figure alt text fresh, never
  carry it over from the source statement.
