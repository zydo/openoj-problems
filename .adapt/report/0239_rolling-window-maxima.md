## 0239 — Sliding Window Maximum

- New id / title / slug: 239 / Rolling Window Maxima / `rolling-window-maxima`
- Old → new API: `maxSlidingWindow` → `rollingWindowMaxima` (go `rollingWindowMaxima`, rust `rolling_window_maxima`, ts `rollingWindowMaxima`); parameters `nums`, `k` kept
- Core algorithm / difficulty: monotonic deque of indices; lazy max-heap alternative / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — Example 1 keeps the figure's 8 cells, `k = 3`, and the exact comparison pattern the drawn deque states depend on)
  - `[2,9,4,0,12,6,15,20] k=3 → [9,9,12,12,15,20]`, `[5,-2,-9] k=1 → [5,-2,-9]` (width one), `[-7,-7,-4,-9] k=2 → [-7,-4,-4]` (ties, all negative)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (`solution-monotonic-deque.svg`)
- Gates: check ✓ verify ✓ (14/14 language-variants, 16/16 cases each) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Multi-solution bundle: variant ids `monotonic_deque` and `heap_lazy` kept, and
  the guide headings `## Monotonic Deque` / `## Lazy Max-Heap` kept so the token
  matcher still pairs them.
- The deque figure is the tightest structure-preserving constraint met so far. It
  is a *trace*, not a picture of the input: which boxes exist at `i = 3, 4, 5, 7`
  is decided by the comparisons between neighbours. The replacement array was
  built by copying the source array's comparison pattern (`a0<a1`, `a2<a1`,
  `a3<a2`, `a4>a1`, `a5<a4`, `a6>a5`, `a7>a6`) and choosing fresh values that
  satisfy it, which keeps every box and every eviction caption valid with a pure
  label edit. Worth reusing: for trace figures, adapt the *relation* pattern, not
  the numbers.
- The source Example 1 explanation is an ASCII table of bracketed window
  positions. That layout is itself part of the source's presentation, so the new
  explanation lists the blocks in prose instead.
