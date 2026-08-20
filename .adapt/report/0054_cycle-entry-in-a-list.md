## 54 — Linked List Cycle II

- New id / title / slug: 54 / Cycle Entry In A List / `cycle-entry-in-a-list`
- Old → new API: `detectCycle` → `listCycleEntry` (go `listCycleEntry`, rust `list_cycle_entry`, ts `listCycleEntry`); parameter `pos` → `tailLink`, `values` kept
- Core algorithm / difficulty: Floyd's two-speed walk plus the `c = a` restart, and a visited-identity set / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: **yes** for example 1 — four nodes with the closing link on index 1, which is the shape the solution figure draws)
  - `[4,11,6,2] tailLink 1 → 1`, `[9,-2,5] tailLink 2 → 2` (final node links to itself), `[20,-6,14] tailLink -1 → -1`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **labels updated** — `solution-floyd-entry-walk.svg`: four node values, the two walker captions (`finder: 4`, `slow: 2`), the entry value in the phase-2 row, the header line and two structural comments. `a = 1`, `b = 2`, `c = 1` and "meet at index 3" are functions of the *shape* (four nodes, closing link on index 1), so they survive the value change untouched.
- Variants: `floyd`, `hash` kept as variant ids (decision 4); guide headings `## Floyd` / `## Hash set` unchanged so the section matcher still resolves them
- Gates: check ✓ verify ✓ (14/14 variant files, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **Family: `cycle`, written immediately after `0053_cycle-detection-in-a-list`
  and sharing its vocabulary verbatim** — chain, node, outgoing link, "returns
  you to a node you have already stood on", walkers, and the same wire-form
  paragraph with only its last clause changed (detect versus locate). The two
  constraint blocks are identical, as they should be: same domain, same
  presentation. `pos` → `tailLink` was decided for the pair together, not per
  problem.
- **The examples were chosen to differ in shape from the sibling's**, not just
  in values: `0141` shows a four-node chain closing on index 2, a two-node
  chain closing on index 0, and a lone node; `0142` shows a four-node chain
  closing on index 1, a three-node chain whose final node links to *itself*,
  and a three-node chain with no cycle. Same family, no repeated picture.
- **This figure is the cheapest kind to adapt and shows why the rule works.**
  Everything the drawing asserts beyond the four values — the brace lengths,
  the meeting index, the `c = a` annotation, the phase-2 arrows — depends only
  on the node count and the link target. Fixing the example to that shape first
  reduced the whole figure to nine text substitutions.
  - One trap: the header `<text>` is a single long line with no wrapping, and
    the source's was already close to the 620-wide canvas. `tailLink` is six
    characters longer than `pos`, so the replacement header had to be
    *shortened* elsewhere to stay inside the box. Worth measuring rather than
    assuming when a renamed parameter appears in figure prose.
- The `hash` variant's guide paragraph needed a claim the source only implied:
  why the first repeated node is the *entry* and not some later node. It is
  because nothing links back to any node before the entry, so those are seen
  once and never again. Rebuilding the exposition from the algorithm rather
  than the source prose is what surfaced the gap.
