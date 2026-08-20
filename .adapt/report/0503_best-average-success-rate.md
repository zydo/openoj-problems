## 503 — Maximum Average Pass Ratio

- New id / title / slug: 503 / Best Average Success Rate / `best-average-success-rate`
- Old → new API: `maxAverageRatio` → `bestAverageSuccessRate` (go `bestAverageSuccessRate`, rust `best_average_success_rate`, ts `bestAverageSuccessRate`); parameters `classes` → `batches`, `extraStudents` → `extraTrials` (rust `extra_students` → `extra_trials`)
- Core algorithm / difficulty: greedy max-heap on marginal lift `(p+1)/(t+1) - p/t`, with the CPython-heapq ports kept so float summation order matches / H3 (unchanged)
- Statement rewritten from spec: yes — school/classes framing replaced by trial batches with guaranteed-success extra trials; objective phrased as mean of batch rates
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[2,3],[4,7],[3,3]], 3 → 0.80833` (perfect batch gets nothing), `[[1,4],[5,8],[2,6],[7,7]], 5 → 0.67411` (split beats dumping — fading lift), `[[3,7]], 4 → 0.63636` (single batch)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The cpp/go/rust/java solutions contain literal ports of CPython's heapq plus
  Neumaier-summation comments so every language sums floats in the same order;
  those bodies were kept verbatim apart from identifier renames and
  terminology in comments (class→batch, student→sure trial).
- Comment terminology updates must dodge keywords: blanket-replacing the word
  "class" would have corrupted `class Solution` and `class Item` — only the
  specific comment phrases were replaced.
