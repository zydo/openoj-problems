## 105 — Ugly Number II

- New id / title / slug: 105 / Nth Five-Smooth Number / `nth-five-smooth-number`
- Old → new API: `nthUglyNumber` → `nthFiveSmooth` (go `nthFiveSmooth`, rust `nth_five_smooth`, ts `nthFiveSmooth`); parameter `n` kept
- Core algorithm / difficulty: three-cursor merge of the 2x/3x/5x virtual lists; min-heap frontier alternative / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n=7 → 8`, `n=1 → 1` (vacuous base), `n=15 → 24` (reached by two routes, exercising the dedupe)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (14/14 language-variants, 17/17 cases each) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Naming: "ugly number" is LeetCode's coinage for a concept that already has
  standard names — 5-smooth (or Hamming/regular) numbers. Renaming to
  "five-smooth" is not inventing terminology but recovering the prior art, so it
  is the opposite of a "keep" case like H-Index.
- The rename went deeper than the method: `ugly` appeared as a local array name,
  a Go heap type (`uglyHeap`), and throughout the comments of all 14 solution
  files. Locals and comments now say `smooth`/`smoothHeap`/"five-smooth". A
  blind s/ugly/smooth/ left one clumsy phrase ("a smaller smooth times 2") which
  was rewritten — read the diff after mechanical renames.
- Multi-solution bundle: variant ids `three_pointers` and `heap` kept, guide
  headings `## three_pointers` / `## heap` kept for the tab matcher.
- The guide's step-by-step generation walk was re-run on the *new* example data
  (n = 15, terms through 24) rather than the source's n = 10 walk.
