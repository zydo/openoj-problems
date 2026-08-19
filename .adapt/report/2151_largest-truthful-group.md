## 2151 — Maximum Good People Based on Statements

- New id / title / slug: 2151 / Largest Truthful Group / `largest-truthful-group`
- Old → new API: `maximumGood` → `mostTruthful` (go `mostTruthful`, rust `most_truthful`, ts `mostTruthful`); parameter `statements` kept; scenario words `good`/`bad` → `truthful`/`unreliable` throughout (statement, guide, solution comments and concept-named locals, figures)
- Core algorithm / difficulty: enumerate all 2ⁿ good/bad bitmasks, audit the claims of truthful speakers only / H3 (unchanged)
- Statement rewritten from spec: yes — claim semantics restated as declare-truthful / declare-unreliable / silence, with the nobody-self-reports fact kept
- Examples newly constructed: yes (structure-preserving: **yes** — person-id permutations of the figure scenarios)
  - `[[2,2,1],[0,2,2],[1,2,2]] → 2` (vouch/vouch/accuse, key person 1), `[[2,2],[0,2]] → 1` (one-sided accusation, silent partner)
  - verified no public input duplicates a hidden one
- Constraints: domain unchanged (2 ≤ n ≤ 15, entries 0/1/2, diagonal 2), presentation rewritten
- Skeletons regenerated: all 7
- Figures: **labels updated** — panel headers, person labels, and comments in both scenario-tree SVGs; icon colors and layout untouched
- Gates: check ✓ verify ✓ (7/7 languages, 14/14 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The stale gate's literal check is toothless here: every source example
  array is over a two-symbol alphabet ({0,2}, {1,2}, …), so all of them fall
  under the two-character exemption. The examples were still permuted to new
  inputs — the gate under-enforces, the rules don't.
- Scenario-tree figures pin the color pattern (which panel ends green/red),
  so like the functional-graph family the only free change is relabeling
  people — a permutation of ids produces a visibly different matrix with an
  isomorphic case analysis.
- Renaming scenario *concepts* (good→truthful, bad→unreliable) touches
  solution locals named after the concept (`good`, `isGood`) in seven
  languages; a word-boundary perl pass handled all of them, and the
  compatibility gate is unaffected since it stages the source's own files.
- Sixth alt-text overlap catch — this chunk's most repeated mistake. Alt
  text is statement prose; write it fresh from the start.
