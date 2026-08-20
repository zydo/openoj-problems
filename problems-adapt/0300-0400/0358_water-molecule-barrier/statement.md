# Water Molecule Barrier

## Description

Threads of two kinds arrive at a bonding site: **hydrogen** threads and
**oxygen** threads. Water forms in fixed proportion — two hydrogen to one
oxygen — and the bonding site only lets complete molecules through.

Each hydrogen thread receives a `releaseHydrogen` callback and each oxygen
thread a `releaseOxygen` one; running it emits the thread's atom, `"H"` or
`"O"`, and that emission is all the outside world ever sees of the thread.
Bonding is instantaneous: a molecule's three threads must all clear the site
before any thread of the following molecule does.

Spelled out:

- An oxygen thread arriving at an empty site must wait: two hydrogen
  partners are still missing.
- A hydrogen thread arriving at an empty site must wait too: one oxygen and a
  second hydrogen have yet to come.

No thread is ever told which other threads it bonded with — the matching is
anonymous. The requirement is purely on the emitted sequence: cut it into
consecutive groups of three, and every group must contain exactly two `"H"`
and one `"O"`.

Provide a `WaterMolecule` class exposing:

- `WaterMolecule()` prepares the shared state.
- `void hydrogen(Runnable releaseHydrogen)` parks the thread until bonding is
  legal, then runs `releaseHydrogen.run()` exactly once — the `"H"` emission.
- `void oxygen(Runnable releaseOxygen)` parks the thread until bonding is
  legal, then runs `releaseOxygen.run()` exactly once — the `"O"` emission.

### Concurrent judging

The judge spawns one real thread per character of `water` — hydrogen for each
`'H'`, oxygen for each `'O'` — all sharing a single `WaterMolecule` object,
started in a shuffled order that leaks nothing about the grouping. Each
callback appends its atom to one common log, which records the interleaving
your synchronization really caused. No particular log is the answer: **any**
log qualifies whose every run of three consecutive atoms contains two `"H"`
and one `"O"` — so long as everything finishes within the time limit. A
deadlocked solution never returns at all; the judge records a timeout.

### Example 1

```text
Input: water = "OHH"
Output: ["O", "H", "H"]
Explanation: One oxygen and two hydrogen threads run at once and form one
molecule. ["H", "O", "H"] and ["H", "H", "O"] pass equally: each holds two
"H" and one "O".
```

### Example 2

```text
Input: water = "OHHOHH"
Output: ["H", "H", "O", "O", "H", "H"]
Explanation: Two molecules. The first three emitted atoms must be complete,
and so must the last three, so ["O", "H", "H", "H", "H", "O"] also passes,
while ["O", "O", "H", "H", "H", "H"] does not — its opening group holds two
oxygen.
```

### Constraints

- `3 * n == water.length`
- `1 <= n <= 20`
- every character of `water` is one of `'H'` or `'O'`.
- `water` contains exactly `2 * n` occurrences of `'H'`.
- `water` contains exactly `n` occurrences of `'O'`.

## Hints

### Hint 1

Two quotas hide inside the rule: the open molecule may admit at most two
hydrogen threads and at most one oxygen thread. A counting semaphore is a
quota — one initialized to 2 for hydrogen, one to 1 for oxygen. Acquire the
permit before emitting, and any three emissions in flight already have the
right mix.

### Hint 2

Quotas alone leak. A hydrogen thread that emits and hands back its permit at
once lets the *next* molecule's hydrogen start before this molecule's oxygen
has emitted — splitting a group across the boundary. The three threads must
depart together, and a three-party barrier that resets after each trip
does exactly that.

### Hint 3

Sequence the steps as permit → emission → barrier → permit-back. Handing
the permit back only once the barrier has tripped puts all three atoms of a
molecule into the log before the following molecule's first thread can get
in — exactly the grouping the judge cuts on and checks.
