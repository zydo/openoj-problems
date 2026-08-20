## 416 — Distinct Echo Substrings

- New id / title / slug: 416 / Distinct Doubled Substrings / `distinct-doubled-substrings`
- Old → new API: `distinctEchoSubstrings` → `distinctDoubledSubstrings` (go `distinctDoubledSubstrings`, rust `distinct_doubled_substrings`, ts `distinctDoubledSubstrings`); parameter `text` kept
- Core algorithm / difficulty: enumerate (half, start) pairs, direct half comparison, set deduplication / H3 (unchanged)
- Statement rewritten from spec: yes ("echo" reframed as a string written twice in a row, `a + a`)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `moonmoonmoonmoon` → 6 (block repetition: 2-char, four length-8 windows, whole string); `alfalfa` → 2 (`alfalf`, `lfalfa`); `balcony` → 0 (none)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The concept rename goes beyond identifiers: all seven reference solutions'
  comments said "An echo is exactly ..." / "no non-echo can pass"; those
  comments now say "doubled substring" (the sanctioned old-terminology
  comment update), nothing else in the solutions changed.
- The reference solution is the brute-force half comparison (the tags mention
  Rolling Hash, but no rolling-hash variant exists in the bundle); solutions.md
  keeps that single variant section, freshly written, walkthrough on the new
  `moonmoonmoonmoon` data.
