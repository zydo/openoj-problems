# Shortest Cooldown Schedule

## Description

You are given `jobs`, a list of labels — one entry per job waiting to be run,
labelled by an uppercase letter — and an integer `n`.

Time is cut into equal slots. A slot either runs one of the waiting jobs or sits
empty, and you may run the jobs in whatever order you like. The one rule is a
cooldown: after a job with some label runs, no job carrying that same label may
run for the next `n` slots.

Return the smallest number of slots in which every job can be run.

### Example 1

```text
Input: jobs = ["C","C","C","C","D","E"], n = 2
Output: 10
Explanation: C dominates, and its four runs must sit four slots apart:
C D E C - - C - - C
Only two other jobs exist to fill gaps, so six slots go empty.
```

### Example 2

```text
Input: jobs = ["P","Q","P","R","Q","S"], n = 1
Output: 6
Explanation: Four distinct labels are plenty to keep the repeats apart:
P Q R P Q S
Nothing waits, so the six jobs take six slots.
```

### Example 3

```text
Input: jobs = ["G","G","G","H","H","J","K"], n = 3
Output: 9
Explanation: The three G runs sit four slots apart, and the four other jobs
fill most of what lies between them:
G H J K G H - - G
```

### Constraints

- `1 <= jobs.length <= 10⁴`
- Each entry of `jobs` is a single uppercase English letter
- `0 <= n <= 100`

## Hints

### Hint 1

The most frequent label sets the shape of the timetable. Its runs are the ones
forced apart; everything else merely fills the space they leave.

### Hint 2

Say that label occurs `f` times. Its runs carve time into `f - 1` stretches of
`n + 1` slots, plus a short tail after the last one. Which labels must appear in
that tail?

### Hint 3

That layout is a lower bound, not always the answer. When the labels are varied
enough, every gap gets filled and no slot is ever wasted — and then no schedule
can be shorter than the number of jobs.

### Hint 4

Both quantities are lower bounds, and the larger of the two is always
achievable, so nothing needs to be simulated. Two statistics of the label
counts are all it takes to compute it.
