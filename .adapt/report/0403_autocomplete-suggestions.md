## 403 — Search Suggestions System

- New id / title / slug: 403 / Autocomplete Suggestions / `autocomplete-suggestions`
- Old → new API: `suggestedProducts` → `suggestWords` (go `suggestWords`, rust `suggest_words`, ts `suggestWords`); `products` → `catalog`, `searchWord` → `query`
- Core algorithm / difficulty: sort + per-keystroke lower-bound search, first three of the matching run / H2 (unchanged)
- Statement rewritten from spec: yes (a "system that suggests products" becomes a search box autocompleting a typed query)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `["plan","plane","planet","plank","plant","play"] "planet"` (cap at three, narrowing to one); `["sock"] "socket"` (word exhausted, empty lists); `["fern","fig","flax"] "fi"` (narrow to one)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 16/16 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Parameter rename `searchWord` → `query` checked safe: no source solution
  declares a `query` local (the word appears only in prose comments).
- The full-tree static sweep reports 9 failures, all in other agents'
  in-flight bundles (0547/0736/1039); none in this chunk's.
