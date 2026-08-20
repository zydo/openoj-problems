## 536 — Describe the Painting

- New id / title / slug: 536 / Mixed Layer Sums / `mixed-layer-sums`
- Old → new API: `splitPainting` → `mixedLayerSums` (go `mixedLayerSums`, rust `mixed_layer_sums`, ts `mixedLayerSums`); parameter `segments` kept (conventional)
- Core algorithm / difficulty: difference-map sweep over boundary events with a running color total / H3 (unchanged)
- Statement rewritten from spec: yes (painting restated as passes/stacks; judge's sorted-output caveat kept)
- Examples newly constructed: yes (structure-preserving: yes)
  - All three figures keep the drawn stretches and number lines; only colors change: `[[1,4,3],[4,7,8],[1,7,5]] → [[1,4,8],[4,7,13]]`, `[[1,7,4],[6,8,12],[8,10,5]] → [[1,6,4],[6,7,16],[7,8,12],[8,10,5]]`, and equal-totals-kept-separate `[[1,4,4],[1,4,10],[4,7,6],[4,7,8]] → [[1,4,14],[4,7,14]]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (3 of 3 — color labels inside the bars plus the SVG header comments; geometry untouched)
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 18/18 cases) check ✓ (per-bundle static)

### Notes

- This problem's stale-literal set is large — the gate collects *output*
  arrays from the source's text blocks too (`[4,7,16]`, `[1,6,9]`,
  `[6,7,24]`, …), not just inputs. New example values had to dodge both
  lists; first color choice for figure 1 (`3,6,2`) produced output `[1,4,5]`
  which collides with a source *input* literal. Chose values by checking
  every input and output triple against the forbidden set.
- Kept the equal-sums lesson of source example 3 (totals 14/14 from
  different stacks) since that is the subtle point of the task.
