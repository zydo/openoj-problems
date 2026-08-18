## 0382 — Linked List Random Node

- New id / title / slug: 382 / Random Node from a List / `random-node-from-a-list`
- Old → new API: `getRandom` → `draw`; class `Solution` kept (framework
  wrapper); constructor parameter `head` kept (conventional)
- Core algorithm / difficulty: materialize the wire array, uniform slot draw;
  follow-up reservoir of one / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,7,12]` (three lone values, thirds) and `[5,5,5,9,9]` (duplicated
    values weigh 3:2 — the count-weighted semantics example)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design problems offer only these)
- Figures: none
- Gates: compatibility ✓ verify ✓ (2/2 languages, 16/16 cases) sandbox
  deferred to the batch run stale ✓ overlap ✓

### Notes

- Same `draw` rename as 0380/0381 — the three "random" problems of this chunk
  now share one verb for the operation, which keeps the clan visible without
  inventing three near-identical names.
- The public cases are single judged `draw` actions with the
  `{"call": "draw", "repeat": 25000}` marker (the 0380 lesson applied here
  from the start); probabilities come from `count(value) / n`, cross-checked
  against 200k reference draws (empirical 0.333/0.333/0.334 and 0.598/0.402).
- The source `solution.py` carried `# noqa: N802 — LeetCode API` on the
  camelCase method; with `draw` the noqa is factually wrong, so it was
  dropped (comment-accuracy fix, same spirit as renaming comments).
