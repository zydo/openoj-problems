## 2487 — Remove Nodes From Linked List

- New id / title / slug: 2487 / Filter List by Suffix Maximum / `filter-list-by-suffix-maximum`
- Old → new API: `removeNodes` → `filterBySuffixMax` (go `filterBySuffixMax`, rust `filter_by_suffix_max`, ts `filterBySuffixMax`); parameter `head` kept
- Core algorithm / difficulty: reverse the list, keep nodes `>=` running max while rebuilding by front-insertion / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — both figures kept, same lengths and keep/drop patterns, values only)
  - `[3,7,12,4,9]` → `[12,9]` (drop/drop/keep/drop/keep, same pattern as the drawn example), `[9,6,4,2]` → unchanged (strictly decreasing), `[8,8,8]` → unchanged (equal is not strictly greater)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (example-1 and solution-reverse-filter; geometry and keep/drop coloring untouched — the new example was chosen to reproduce the source's drop pattern exactly)
- Gates: check ✓ (no failures for this bundle) verify ✓ (7/7 languages, 17/17 cases) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Structure preservation for the *solution* figure is stricter than for an
  example figure: the reversed row's keep/drop decisions AND the running-max
  labels must all stay valid, so the example was reverse-engineered from the
  pattern (drop,drop,keep,drop,keep with the reversed row keep,drop,keep,drop,
  drop). One comment string inside each SVG also carried the old values
  (`<!-- input list: 5 -> 2 -> 13 -> 3 -> 8 -->`) — grep the SVGs for old data
  after label edits, comments included.
- The stale gate's literal check squashes spaces, so `[5,2,13,3,8]` in a
  comment would have failed the gate anyway; fixing comments up front avoids
  the round trip.
