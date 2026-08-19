## 2466 — Count Ways To Build Good Strings

- New id / title / slug: 2466 / Count Strings From Run Appends / `count-strings-from-run-appends`
- Old → new API: `countGoodStrings` → `countRunStrings` (go `countRunStrings`, rust `count_run_strings`, ts `countRunStrings`); parameters `low`, `high`, `zero`, `one` kept (already neutral)
- Core algorithm / difficulty: `dp[L] = dp[L-zero] + dp[L-one]` — staircase recurrence with two strides; answer is the windowed sum `dp[low..high]`, mod `10^9+7` / H2 (unchanged)
- Statement rewritten from spec: yes (strings "grown" by run-append moves; acceptance phrased as length membership instead of the source's "good string" label)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `low=4 high=4 zero=1 one=1` → `16` (all binary strings of one length), `low=3 high=4 zero=2 one=1` → `8` (unequal run sizes, enumeration in the explanation), `low=4 high=8 zero=2 one=2` → `28` (equal run sizes, sparse reachable lengths)
  - expected values cross-checked against a brute-force grower, not just the DP
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- First hand-written enumeration in a chunk statement ("0001" slipped in as
  an impossible string — a single 0 is not growable when `zero = 2`); the
  brute-force grower caught it before the gates did. Enumerations in
  explanations deserve the same script check as expected values.
- No fenced arrays in the source statement, so the stale literal set is
  empty — only identifier renames mattered here.
