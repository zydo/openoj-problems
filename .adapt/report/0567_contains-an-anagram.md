## 0567 — Permutation in String

- New id / title / slug: 567 / Contains An Anagram / `contains-an-anagram`
- Old → new API: `checkInclusion` → `containsAnagram` (go `containsAnagram`, rust `contains_anagram`, ts `containsAnagram`); parameters `s1` → `pattern`, `s2` → `text`
- Core algorithm / difficulty: fixed-width sliding window over a 26-slot letter census / H2 (unchanged)
- Statement rewritten from spec: yes — it defines "anagram" up front and asks the question once, where the source asked it twice ("contains a permutation" / "one of s1's permutations is a substring")
- Examples newly constructed: yes (structure-preserving: n-a — no figures)
  - `"dog"` inside `"hangodx"` → true; `"dog"` against `"dxgoxd"` → false (all letters present, never adjacent); `"aab"` inside `"cbaabc"` → true (multiplicity matters)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n-a compatibility ✓ stale ✓ overlap ✓

### Notes

- `s1`/`s2` are exactly the parameter names worth renaming: they carry no
  meaning, and `pattern`/`text` make the asymmetry of the task visible in the
  signature. Grepping all seven source solutions first found no local named
  `pattern` or `text`, so the compatibility rename was clean.
- The false example should show the letters *present but never adjacent*, not
  letters missing — the missing-letter case is decided before the window ever
  matters and teaches nothing about the algorithm.
