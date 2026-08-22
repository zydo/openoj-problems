# Solutions — Nth Five-Smooth Number

Two ordered generators over one recurrence: the first grows a frontier
through a min-heap, the second merges three virtual lists with cursors.

## heap

Read the same generation as best-first expansion instead. A min-heap holds the
frontier — terms produced but not yet emitted — seeded with 1; pop the smallest,
then push each of `2·v`, `3·v`, `5·v` that has never been pushed before.
Because the heap always exposes its least element, every pop is the next term
in order, and after `n - 1` pops the top is the answer.

The `seen` set is what keeps the frontier a set: 12 arises as both `2·6` and
`3·4`, and admitting each value on first sight only is what makes the emission
sequence duplicate-free. Size stays modest — one element leaves and at most
three arrive per round — while the `O(log k)` sift per push makes the total
`O(n log n)`. The fixed-width ports keep 64-bit heap entries, since pushed
multiples routinely overshoot the 32-bit answer before being popped, and the
dedupe set is keyed on that full 64-bit value.

**Complexity:** `O(n log n)` time, `O(n)` space.

## three_pointers

Scaling a five-smooth number by 2, 3 or 5 leaves it five-smooth, so every term
after the 1 comes from an earlier term times one of those three. The sequence is
therefore `{1} ∪ {2·U} ∪ {3·U} ∪ {5·U}` — a three-way merge of sorted lists,
each derived from the sequence being built. That structure is why nothing has to
be *tested*; the terms are produced directly, in order.

The array fills left to right under three cursors `i2`, `i3`, `i5`. Each round
takes `smooth[i2]*2`, `smooth[i3]*3`, `smooth[i5]*5` as candidates — the
smallest unconsumed entry of each virtual list — and emits their minimum. Then
*every* cursor whose candidate matched the minimum advances, not merely one:
24 is both `2·12` and `3·8`, and stepping all matching cursors is what emits it
once. Watch the first few terms of the `n = 15` run:

1. `smooth = [1]`, cursors all home; candidates 2, 3, 5.
2. 2 is taken (`i2` moves); then 3 (`i3`), then 4 (`i2` again), then 5 (`i5`).
3. Candidates 6, 6, 10: both `i2` and `i3` advance together, emitting 6 once.
4. On through 8 = 2·4, 9 = 3·3, 10 = 2·5 = 5·2 (another double advance), 12 =
   2·6 = 3·4, and the 15th term lands on 24 = 2·12 = 3·8.

Each of the `n` slots costs three multiplications, three comparisons and some
increments; the array of `n + 1` values (index 0 holds the seed 1) is the whole
footprint, and `n <= 1690` keeps it tiny. The answer reads from slot `n - 1`.

**Complexity:** `O(n)` time, `O(n)` space.
