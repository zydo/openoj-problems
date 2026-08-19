## 1948 — Delete Duplicate Folders in System

- New id / title / slug: 1948 / Prune Duplicate Folders / `prune-duplicate-folders`
- Old → new API: `deleteDuplicateFolder` → `pruneDuplicateFolders` (go `pruneDuplicateFolders`, rust `prune_duplicate_folders`, ts `pruneDuplicateFolders`); parameter `paths` kept (conventional)
- Core algorithm / difficulty: trie + post-order subtree signatures, mark-duplicated-subtrees, single-pass deletion / H4 (unchanged)
- Statement rewritten from spec: yes (buggy-backup framing in one clause; identical-folder definition, the `/n/w` caveat, and the mark-once rule all restated with fresh letters)
- Examples newly constructed: yes (structure-preserving: yes)
  - All three figures keep their drawn trees under relabeling: `[["m"],["n"],["k"],["m","t"],["n","t"],["k","m"]] → [["k"],["k","m"]]`, the nested `[["p"],["q"],…] → [["p"],["p","s"],["q"],["q","s"]]` (post-deletion twins survive), and the all-unique `[["h","i"],…]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (3 of 3 — node labels and the SVG comments; geometry and deletion ovals untouched, since the deletion pattern is isomorphic)
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 17/17 cases) check ✓ (per-bundle static)

### Notes

- Third tree-figure problem of the wave: same recipe as 1938 (relabel nodes,
  keep geometry). The figures' deletion ovals stay truthful only because the
  relabeled example's deletion pattern is isomorphic to the source's — worth
  re-verifying per figure rather than assuming.
- Expected outputs come from the reference port directly (its DFS + sort
  defines the canonical order the exact-comparison judge expects); the
  outputs matched hand analysis.
