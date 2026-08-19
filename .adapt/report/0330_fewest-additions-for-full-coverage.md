## 0330 — Patching Array

- New id / title / slug: 330 / Fewest Additions For Full Coverage / `fewest-additions-for-full-coverage`
- Old → new API: `minPatches` → `fewestAdditions` (go `fewestAdditions`, rust `fewest_additions`, ts `fewestAdditions`)
- Core algorithm / difficulty: greedy frontier walk, doubling the reachable prefix / H3 (unchanged)
- Statement rewritten from spec: yes — framed as "reachable totals" and insertions rather than patching an array in place
- Examples newly constructed: yes (structure-preserving: n/a — no figures)
  - `[1,4,9], n = 15 → 2`, `[3], n = 5 → 2`, `[1,2,4,8], n = 15 → 0` (already sufficient)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (py, js, ts, java, cpp, go, rust)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Parameters `nums` and `n` are conventional and were kept, which also keeps the
  stale gate's parameter set empty — nothing to collide with.
- The statement's third example (`[1,2,4,8]`) doubles as the zero-insertion case
  the source also carried, but with different data; the answer still comes from
  running the reference, not from the powers-of-two argument.
- The 64-bit note belongs in the hints: the frontier can pass `2^31` on its last
  doubling and the typed languages silently overflow without it. The source
  solutions already accumulate in 64-bit, so compatibility is unaffected.
