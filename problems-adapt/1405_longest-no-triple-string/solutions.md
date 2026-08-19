# Solutions — Longest No-Triple String

## Greedy: always append the most plentiful allowed letter

Each step appends the letter with the biggest remaining budget, unless that
letter has just been written twice in a row, in which case the runner-up goes
next. Feeding the majority letter first is what maximizes length: hoarding a
common letter while spending rare ones strands it at the finish with nothing
left to break its pairs, chopping runs short; letting the majority consume
its budget as early as possible keeps the breakers in reserve. In Example 2
the five a's drain as `aa`-blocks the moment the two breakers allow, which is
exactly the interleaving that reaches length 7.

The two-in-a-row test against the last two emitted characters is the only
rule the builder needs — a block can never grow past two if third-in-a-row
emission is refused. Each iteration re-ranks the three letters by
`(-count, letter)`, count descending with alphabetical tie-breaks for
determinism, and takes the head. A head with budget zero ends the loop (no
letter remains), and so does a runner-up with budget zero when the head is
blocked: only one letter is left and it already sits doubled, and capping the
string there is precisely right, since the only continuation would be a
forbidden triple.

Every iteration emits one character and shrinks a budget, so the loop
terminates, and at termination no extension is possible — either all budgets
are spent or every remaining letter would start a triple. Example 3 shows the
zero-budget case: with `a = 0`, the ranking simply never offers `a`, and the
b's and c's alternate until the b's run out.

**Complexity:** `O(a + b + c)` time, `O(a + b + c)` space for the output.
