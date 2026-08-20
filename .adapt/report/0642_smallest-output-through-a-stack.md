## 642 — Using a Robot to Print the Lexicographically Smallest String

- New id / title / slug: 642 / Smallest Output Through a Stack / `smallest-output-through-a-stack`
- Old → new API: `robotWithString` → `smallestStackOutput` (go `smallestStackOutput`, rust `smallest_stack_output`, ts `smallestStackOutput`); parameter `s` kept (conventional)
- Core algorithm / difficulty: greedy pop-while-top ≤ suffix-min over a stack, linear / H3 (unchanged)
- Statement rewritten from spec: yes — the robot scenario replaced by the abstract machine it actually is (input string, holding stack, sheet), moves stated directly
- Examples newly constructed: yes (structure-preserving: yes for the solution figure)
  - `"bad" → "abd"` (matches the figure's four panels: hold, push, pop-both, drain), `"cqqa" → "aqqc"` (nothing writable until the final a lands, output not a sort), `"rrr" → "rrr"` (uniform input)
- Constraints: domain unchanged (length ≤ 10⁵, lowercase), presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — `solution-robot-stack.svg` renamed to `solution-stack-walkthrough.svg` and relabelled bac→bad (b held, a pushed, d pops both, drain writes d); structure identical, one letter and the paper strings changed
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Example outputs were cross-checked by DFS brute force over all legal
  push/pop interleavings (n ≤ 4), not just by the reference solution.
- Choosing an example isomorphic to the figure (y < x < z in positions
  b,a,c) kept the drawing alive: "bad" reproduces every arrow and hold of
  the original "bac" walkthrough.
