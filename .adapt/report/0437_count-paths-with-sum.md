## 0437 — Path Sum III

- New id / title / slug: 437 / Count Paths With Sum / `count-paths-with-sum`
- Old → new API: `pathSum` → `countPathsWithSum` (go `countPathsWithSum`,
  rust `count_paths_with_sum`, ts `countPathsWithSum`); parameters `root` and
  `targetSum` kept
- Core algorithm / difficulty: one DFS carrying a root-to-node prefix-sum tally,
  counting ancestors at `running - targetSum` / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes for example 1)
  - `[6,4,-5,5,1,null,14,2,-4,null,4]`, `targetSum = 9` → 3. Same node
    positions and same three qualifying chains as the drawn figure, so both
    SVGs needed value labels only
  - `[3,3,null,3]`, `targetSum = 3` → 3 (three one-node chains)
  - `[2,-1,4,3,null,null,-3]`, `targetSum = 1` → 2
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (`example-1.svg`, `solution-tree-paths.svg`) — node
  values, the three path captions, and the target in the caption text
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a
  compatibility ✓ stale ✓ overlap ✓

### Notes

- `targetSum` was deliberately **not** renamed to `target`: the source's Rust
  reference solution already declares an inner `target: i64` parameter, so a
  `targetSum → target` entry in the ledger's api map would rewrite the staged
  source solution into a shadowing mess at the next compatibility run. This is
  the PROTOCOL step-3 trap; the parameter is descriptive as it stands.
- Values needed re-picking so the *positions* of the three qualifying chains
  match the figure exactly: with the drawn shape, target `T` forces
  `B + D = T`, `B + E + I = T`, `C + F = T` and nothing else to hit `T`.
- Both figures also carry prose ("running − 8"); the solution figure's caption
  had to be retargeted along with the node labels.
