## 727 — Find the Length of the Longest Common Prefix

- New id / title / slug: 727 / Longest Shared Leading Digits / `longest-shared-leading-digits`
- Old → new API: `longestCommonPrefix` → `longestSharedPrefix` (go `longestSharedPrefix`, rust `longest_shared_prefix`, ts `longestSharedPrefix`); parameters `arr1`, `arr2` kept
- Core algorithm / difficulty: hash set of decimal leading slices, early break on the first miss / H2 (unchanged)
- Statement rewritten from spec: yes ("prefix of an integer" reframed as leading slices)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[7,74,749] × [7491,75]` → 3 (nesting chain); `[123,456] × [124,455]` → 2 (each array supplies a max pair); `[11,22] × [33,44]` → 0
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- First draft of the statement reused the source's own illustrative numbers
  (5655359/56554) — exactly the habit the program forbids; replaced with
  fresh ones (`3841`/`38455`) before any gate had to say so.
- LeetCode's string-flavored 0014 "Longest Common Prefix" is not in this
  bank, so the method rename could not collide with a sibling adaptation.
