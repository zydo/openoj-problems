## 76 — Reverse Linked List

- New id / title / slug: 76 / Reverse Whole List / `reverse-whole-list`
- Old → new API: `reverseList` → `reverseWholeList` (go `reverseWholeList`, rust `reverse_whole_list`, ts `reverseWholeList`); parameter `head` kept (conventional)
- Core algorithm / difficulty: in-place link repainting, once by loop and once by recursion / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: **yes** — five nodes then two nodes, so both example figures keep their geometry)
  - `[8,3,9,1,4] → [4,1,9,3,8]`, `[6,2] → [2,6]`, `[] → []` (empty)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **labels updated** — all three. `example-1` and `example-2` are ten and four digit `<text>` nodes plus their structural comments; `solution-pointer-reversal` needed ten digits, the "after processing node 9" caption, and two annotations (`9.next = prev was just flipped`, `nxt saved 1.next first`). No geometry touched.
- Variants: `iterative`, `recursive` kept as variant ids (decision 4); guide headings `## Iterative` / `## Recursive` unchanged so the section matcher still resolves them
- Gates: check ✓ verify ✓ (14/14 variant files, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **Family: `reverse`.** The sibling `0092_reverse-linked-list-ii` → *Reverse
  List Range* is not on disk yet. Whoever writes it should inherit this
  statement's framing vocabulary: the structure is a **chain** of **nodes**, a
  node's forward pointer is its **outgoing link**, and reversing is
  **repainting** those links / **turning the chain around**. The word "list" is
  reserved for the title. Constraints are phrased as "The chain holds between
  `0` and `5000` nodes" — the range form, not `0 <= n <= 5000`.
- **The solution figure is the one that bites.** It walks a specific mid-sweep
  state, so the new example had to be chosen so that its *third* node is the
  one the drawing has already processed. Any five-value list works, but the
  captions naming node values (`3.next = prev …`) are easy to miss — grep the
  SVG for every source digit before declaring the label edit done.
- The recursive ports diverge per runtime (Python lifts the frame ceiling, Rust
  threads an accumulator, JS/TS halve the chain). That divergence is described
  in `solutions.md` and had to be re-derived from the code rather than carried
  over as prose, since it is the most source-shaped paragraph in the bundle.
- Importing `solution*.py` to compute expected values leaves a `__pycache__`
  inside the bundle and `check.py` rejects it as an unexpected file. Run the
  helper with `sys.dont_write_bytecode`, or sweep afterwards.
