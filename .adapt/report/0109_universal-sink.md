## 109 — Find the Celebrity

- New id / title / slug: 109 / Universal Sink / `universal-sink`
- Old → new API: `findCelebrity` → `findUniversalSink` (go `findUniversalSink`, rust `find_universal_sink`, ts `findUniversalSink`); parameter `graph` kept
- Core algorithm / difficulty: one-entry elimination walk plus a verification sweep of the survivor's row and column / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: no — figure dropped)
  - `[[1,0,0],[1,1,1],[1,0,1]] → 0`, `[[1,1,0],[0,1,1],[0,0,1]] → -1` (survivor fails verification), 4-vertex `→ 3`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped (both) — the drawings encode the edge sets in their
  arrow geometry; any new example redraws the arrows, and no renderer
  exists for this family
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The party/celebrity framing was LeetCode's dressing; the graph beneath
  it is the classic universal-sink problem, so the rewrite states it as
  one (incoming from all, outgoing to none). The follow-up keeps the
  per-query-cost angle that motivates `3n` lookups.
- 0997_find-the-town-judge is the same computation in another costume;
  whoever adapts it may want a related-but-distinct title.
