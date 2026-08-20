## 116 — Find Median from Data Stream

- New id / title / slug: 116 / Running Median / `running-median`
- Old → new API: class `MedianFinder` → `RunningMedian`; `addNum` → `add`; `findMedian` → `median`; parameter `num` kept
- Core algorithm / difficulty: two heaps split at the middle, round-trip insert / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `4, 9, 6` (even mean then odd middle); `-3, 8, -7, 0` queried after every arrival, negatives throughout
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: python3 + java (design offers only these)
- Figures: none
- Gates: check ✓ verify ✓ (2/2 languages, 16/16 cases) compatibility ✓ stale ✓ overlap ✓ sandbox pending (batch run)

### Notes

- The overlap gate earned its keep here: my first hint pair described the
  max-heap/min-heap split with the source's own noun phrases ("the largest
  of the smaller half and the smallest of the larger half") and failed at
  exactly 6%. Rewriting the two hints from the insight (boundary pair,
  sizes equal as parity allows) took it to 0. Heap-problem hints are prone
  to this — the vocabulary is small and shared.
